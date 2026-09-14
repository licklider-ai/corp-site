import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { inspectionScope, collectChanges } from './content-impact.mjs';

test('shared facts reach transitive importers and both reader surfaces', () => {
  const files = { 'src/data/facts.ts': '', 'src/data/summary.ts': "export { x } from './facts.js'",
    'src/pages/product.astro': "import { x } from '../data/summary'",
    'src/pages/llms.txt.ts': "import { x } from '../data/facts'" };
  const r = inspectionScope(['src/data/facts.ts'], files);
  assert(r.inspect.includes('src/pages/product.astro'));
  assert(r.inspect.includes('src/pages/llms.txt.ts'));
});
test('deleted article still requests related publication and machine review', () => {
  const r = inspectionScope(['src/pages/news/removed.astro'], {
    'src/data/publications.ts': '', 'src/pages/docs/llms.txt.ts': '' });
  assert(r.inspect.includes('src/data/publications.ts'));
  assert(r.inspect.includes('src/pages/docs/llms.txt.ts'));
  assert(r.changed.includes('src/pages/news/removed.astro'));
});
test('unavailable Git comparison is explicitly full-scope, never zero-impact', () => {
  const root = mkdtempSync(join(tmpdir(), 'content-impact-'));
  try {
    const delta = collectChanges(root, undefined, {});
    assert.equal(delta.full, true);
    const r = inspectionScope(delta.changed, {
      'src/pages/docs/llms.txt.ts': '', 'src/pages/product.astro': '',
      'docs/content-workflow.md': '' }, delta.full);
    assert(r.inspect.includes('src/pages/docs/llms.txt.ts'));
    assert(r.inspect.includes('src/pages/product.astro'));
    assert(r.inspect.includes('docs/content-workflow.md'));
    assert.throws(() => collectChanges(root, 'missing-base', {}));
  } finally { rmSync(root, { recursive: true, force: true }); }
});
test('candidate inspection includes staged, unstaged and new files', () => {
  const root = mkdtempSync(join(tmpdir(), 'content-impact-'));
  const git = (...args) => execFileSync('git', args, { cwd: root, stdio: 'pipe' }).toString().trim();
  try {
    git('init'); git('config', 'user.name', 'Fixture'); git('config', 'user.email', 'fixture@example.invalid');
    writeFileSync(join(root, 'tracked.md'), 'before'); git('add', '.'); git('commit', '-m', 'fixture');
    const base = git('rev-parse', 'HEAD');
    writeFileSync(join(root, 'tracked.md'), 'after');
    writeFileSync(join(root, 'staged.md'), 'new'); git('add', 'staged.md');
    writeFileSync(join(root, 'untracked.md'), 'new');
    assert.deepEqual(collectChanges(root, base, {}).changed.sort(), ['staged.md', 'tracked.md', 'untracked.md']);
    assert.throws(() => collectChanges(root, 'invalid', {}));
  } finally { rmSync(root, { recursive: true, force: true }); }
});
