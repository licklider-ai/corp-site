import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const machine = ['src/pages/llms.txt.ts', 'src/pages/docs/llms.txt.ts',
  'src/data/agent-docs.ts', 'src/data/site-facts.ts'];
const publication = ['src/data/publications.ts', 'src/pages/index.astro',
  'src/pages/feed.json.ts', 'src/pages/rss.xml.ts'];
const normalize = (value) => value.replaceAll('\\', '/');

export function inspectionScope(changed, files, full = false) {
  const candidates = new Set(changed);
  const paths = new Set(Object.keys(files));
  if (full) for (const path of paths) candidates.add(path);
  const reverse = new Map();
  for (const [name, text] of Object.entries(files)) {
    for (const match of text.matchAll(/(?:from\s*|import\s*\(\s*|import\s*)['"](\.[^'"\n]+)['"]/g)) {
      const base = normalize(relative('/', resolve('/', dirname(name), match[1])));
      const possibilities = [base, `${base}.ts`, `${base}.tsx`, `${base}.js`,
        `${base}.astro`, `${base}/index.ts`, base.replace(/\.js$/, '.ts')];
      const dependency = possibilities.find((p) => paths.has(p));
      if (dependency) {
        if (!reverse.has(dependency)) reverse.set(dependency, new Set());
        reverse.get(dependency).add(name);
      }
    }
  }
  const contentChange = full || changed.some((p) => /^(src\/|docs\/|public\/)/.test(p));
  if (contentChange) {
    for (const p of [...machine, ...publication]) if (paths.has(p)) candidates.add(p);
    for (const p of paths) if (/^src\/pages\/(latest|research|engineering|news|blog|docs)\//.test(p)) candidates.add(p);
  }
  const queue = [...candidates];
  for (let i = 0; i < queue.length; i++) {
    for (const dependent of reverse.get(queue[i]) ?? []) {
      if (!candidates.has(dependent)) { candidates.add(dependent); queue.push(dependent); }
    }
  }
  return { mode: full ? 'full-scope inspection; comparison unavailable' : 'changed-file inspection',
    changed: [...changed].sort(), inspect: [...candidates].sort(),
    meaning: 'Candidate surfaces to inspect, not required edits or factual approval. Search old claims, titles and URLs for semantic dependencies; update affected sources only.' };
}

function sources(root) {
  const files = {};
  function visit(dir) {
    if (!existsSync(dir)) return;
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      if (item.isSymbolicLink()) continue;
      const p = join(dir, item.name);
      if (item.isDirectory()) visit(p);
      else if (/\.(ts|tsx|js|mjs|astro|md|json)$/.test(item.name)) files[normalize(relative(root, p))] = readFileSync(p, 'utf8');
    }
  }
  for (const p of ['src', 'docs']) visit(join(root, p));
  return files;
}

export function collectChanges(root, explicitBase, env = process.env) {
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  let base;
  if (explicitBase) {
    // An explicitly misspelled base is a task error, not permission to report no changes.
    base = git('rev-parse', '--verify', '--end-of-options', `${explicitBase}^{commit}`).trim();
  } else {
    for (const candidate of [env.CONTENT_BASE_SHA, env.VERCEL_GIT_PREVIOUS_SHA, 'origin/main', 'HEAD^']) {
      if (!candidate || /^0+$/.test(candidate)) continue;
      try {
        const sha = git('rev-parse', '--verify', '--end-of-options', `${candidate}^{commit}`).trim();
        if (candidate === 'origin/main' && sha === git('rev-parse', 'HEAD').trim()) continue;
        base = sha; break;
      } catch { /* A shallow/no-Git build receives a visible full-scope fallback. */ }
    }
  }
  if (!base) return { changed: [], full: true, base: null };
  const changed = new Set(git('diff', '--name-only', '-z', base, '--').split('\0').filter(Boolean));
  for (const p of git('ls-files', '--others', '--exclude-standard', '-z').split('\0').filter(Boolean)) changed.add(p);
  return { changed: [...changed], full: false, base };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2).filter((a) => a !== '--');
  if (args.length && (args.length !== 2 || args[0] !== '--base')) {
    throw new Error('Usage: node scripts/content-impact.mjs [--base <commit>]');
  }
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const delta = collectChanges(root, args[1]);
  const report = inspectionScope(delta.changed, sources(root), delta.full);
  console.log(JSON.stringify({ base: delta.base, ...report }, null, 2));
}
