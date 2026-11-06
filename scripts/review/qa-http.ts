import assert from 'node:assert/strict';
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { INTENTS } from '../../app/content.ts';

const target = process.env.QA_URL ?? 'http://127.0.0.1:5021';
const checks: { path: string; status: number }[] = [];

async function get(path: string, status: number) {
  const response = await fetch(new URL(path, target), { redirect: 'manual' });
  assert.equal(response.status, status, path);
  checks.push({ path, status });
  return response;
}

const home = await get('/', 200);
assert.equal(home.headers.get('x-powered-by'), 'Next.js');
assert.match(await home.text(), /<html lang="pt-BR"/);
for (const path of ['/assets/design.md', '/.env', '/config/.env.example', '/app/content.ts', '/assets/references/cafe40/brand-images.json']) {
  await get(path, 404);
}

function* files(folder: string): Generator<string> {
  for (const entry of readdirSync(folder, { withFileTypes: true })) {
    const path = join(folder, entry.name);
    if (entry.isDirectory()) yield* files(path);
    else yield path;
  }
}
for (const path of files('public')) await get(`/${relative('public', path).replaceAll('\\', '/')}`, 200);

for (const [key, intent] of Object.entries(INTENTS)) {
  const response = await get(`/contato?motivo=${key}`, 303);
  const destination = new URL(response.headers.get('location')!);
  assert.equal(destination.origin, 'https://wa.me');
  assert.match(destination.pathname, /^\/\d{10,15}$/);
  assert.equal(destination.searchParams.get('text'), intent.message);
}
for (const value of ['https://example.com', 'toString', '__proto__', 'constructor', '']) {
  const response = await get(`/contato?motivo=${encodeURIComponent(value)}`, 400);
  assert.equal(response.headers.get('location'), null);
}
const defaultContact = await get('/contato', 303);
assert.equal(new URL(defaultContact.headers.get('location')!).searchParams.get('text'), INTENTS.cafe.message);
const method = await fetch(new URL('/contato', target), { method: 'POST', redirect: 'manual' });
assert.equal(method.status, 405);
mkdirSync('.taste-skill/qa', { recursive: true });
writeFileSync('.taste-skill/qa/http.json', JSON.stringify({ target, checks, unsupportedMethod: 405 }, null, 2));
console.log(`HTTP QA passed: ${checks.length} URLs; Next.js, assets, research privacy and WhatsApp redirects.`);
