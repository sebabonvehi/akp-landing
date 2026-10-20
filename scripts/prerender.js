// Injects the server-rendered App into dist/index.html so crawlers get real content without JS.
// The SSR bundle is built here with an inline config (configFile: false) so plugins injected by the
// hosting platform into vite.config.js can't change where it is written.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import react from '@vitejs/plugin-react';
import { build } from 'vite';

const ROOT_PLACEHOLDER = '<div id="root"></div>';
const htmlPath = resolve('dist/index.html');
const ssrDir = resolve('dist-ssr');

await build({
  configFile: false,
  logLevel: 'warn',
  plugins: [react()],
  build: {
    ssr: resolve('src/entry-server.jsx'),
    outDir: ssrDir,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: 'entry-server.js' } },
  },
});

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const html = await readFile(htmlPath, 'utf8');

if (!html.includes(ROOT_PLACEHOLDER)) {
  throw new Error(`prerender: ${ROOT_PLACEHOLDER} not found in ${htmlPath}`);
}

await writeFile(htmlPath, html.replace(ROOT_PLACEHOLDER, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
