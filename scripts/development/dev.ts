import { spawn } from 'node:child_process';
import { mkdirSync, openSync, closeSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../../', import.meta.url));
const runtime = join(root, '.taste-skill/runtime');
const port = process.env.PORT ?? '5021';
if (!/^\d+$/.test(port) || Number(port) < 1 || Number(port) > 65535) throw new Error('PORT deve ser uma porta válida.');
const url = `http://127.0.0.1:${port}/`;

async function ready() {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(1500) });
    if (response.ok && response.headers.get('x-powered-by') !== 'Next.js') throw new Error(`Outra aplicação está usando ${url}`);
    return response.ok;
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('Outra aplicação')) throw error;
    return false;
  }
}

if (!(await ready())) {
  mkdirSync(runtime, { recursive: true });
  const stdout = openSync(join(runtime, 'server.stdout.log'), 'a');
  const stderr = openSync(join(runtime, 'server.stderr.log'), 'a');
  const server = spawn(process.execPath, [join(root, 'node_modules/next/dist/bin/next'), 'dev', '--hostname', '127.0.0.1', '--port', port], {
    cwd: root, detached: true, windowsHide: true, stdio: ['ignore', stdout, stderr],
  });
  server.on('error', (error) => { console.error(error); process.exitCode = 1; });
  server.unref();
  closeSync(stdout);
  closeSync(stderr);
  writeFileSync(join(runtime, 'server.pid'), String(server.pid));
  let running = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (await ready()) { running = true; break; }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  if (!running) throw new Error(`A prévia não iniciou. Consulte os logs em ${runtime}`);
}
console.log(`Café 40: ${url}`);
if (process.argv.includes('--open')) {
  const command = process.platform === 'win32' ? 'rundll32.exe' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  const args = process.platform === 'win32' ? ['url.dll,FileProtocolHandler', url] : [url];
  const browser = spawn(command, args, { detached: true, windowsHide: true, stdio: 'ignore' });
  browser.on('error', console.error);
  browser.unref();
}
