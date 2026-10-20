// Injects the server-rendered App into dist/index.html so crawlers get real content without JS.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const ROOT_PLACEHOLDER = '<div id="root"></div>';
const htmlPath = 'dist/index.html';
const ssrDir = 'dist-ssr';

const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href);
const html = await readFile(htmlPath, 'utf8');

if (!html.includes(ROOT_PLACEHOLDER)) {
  throw new Error(`prerender: ${ROOT_PLACEHOLDER} not found in ${htmlPath}`);
}

await writeFile(htmlPath, html.replace(ROOT_PLACEHOLDER, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
