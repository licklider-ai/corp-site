import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const engineeringDir = path.resolve('src/content/engineering');
const publicStates = new Set(['published', 'corrected', 'superseded', 'withdrawn']);

const forbiddenPublicPatterns = [
  { pattern: /sandbox:\/\//i, label: 'sandbox URL' },
  { pattern: /\/mnt\/data\//i, label: 'machine-local /mnt/data path' },
  { pattern: /file:\/\//i, label: 'file:// URL' },
  { pattern: /https?:\/\/localhost(?::\d+)?/i, label: 'localhost URL' },
  {
    pattern: /github\.com\/licklider-ai\/nomue-app/i,
    label: 'private nomue-app repository URL',
  },
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(full);
  }

  return files;
}

function extractFrontmatter(source) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/);
  return match ? { raw: match[1], body: source.slice(match[0].length) } : null;
}

function extractScalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*["']?([^"'\\n#]+)["']?\\s*$`, 'm'));
  return match?.[1]?.trim();
}

const errors = [];
let files = [];

try {
  files = await walk(engineeringDir);
} catch (error) {
  if (error?.code !== 'ENOENT') throw error;
}

for (const file of files) {
  const source = await readFile(file, 'utf8');
  const rel = path.relative(process.cwd(), file).replaceAll(path.sep, '/');
  const parsed = extractFrontmatter(source);

  if (!parsed) {
    errors.push(`${rel}: missing YAML frontmatter.`);
    continue;
  }

  const status = extractScalar(parsed.raw, 'status');

  for (const { pattern, label } of forbiddenPublicPatterns) {
    if (pattern.test(source)) {
      errors.push(`${rel}: contains ${label}; public articles must use public, portable references.`);
    }
  }

  if (status && publicStates.has(status) && /\b(?:TODO|TBD)\b/i.test(parsed.body)) {
    errors.push(`${rel}: public-state article contains unresolved TODO/TBD marker.`);
  }
}

if (errors.length > 0) {
  console.error('Publication hygiene check failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Publication hygiene check passed (${files.length} Engineering article source file(s)).`);
