// Builds dist/: prerenders the React page to static HTML (SEO + instant paint) and bundles the hydration script.
import { build } from 'esbuild';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';

const out = 'dist';
await rm(out, { recursive: true, force: true });
await mkdir(`${out}/ds`, { recursive: true });
await cp('public', out, { recursive: true });

await build({
  entryPoints: ['src/client.jsx'], outfile: `${out}/app.js`, bundle: true, minify: true,
  format: 'iife', target: 'es2018', jsx: 'automatic', define: { 'process.env.NODE_ENV': '"production"' }
});

const tokens = ['fonts', 'colors', 'typography', 'spacing', 'themes', 'base'];
const css = (await Promise.all(tokens.map(t => readFile(`src/ds/tokens/${t}.css`, 'utf8'))))
  .join('\n').replaceAll('../fonts/', 'fonts/');
await writeFile(`${out}/ds/ds.css`, css);

await build({
  entryPoints: ['src/prerender.jsx'], outfile: '.prerender/prerender.mjs', bundle: true,
  platform: 'node', format: 'esm', jsx: 'automatic', packages: 'external',
  define: { 'process.env.NODE_ENV': '"production"' }
});
const { render } = await import(pathToFileURL('.prerender/prerender.mjs').href + '?t=' + Date.now());
await rm('.prerender', { recursive: true, force: true });

const hash = createHash('sha1').update(await readFile(`${out}/app.js`)).update(css).digest('hex').slice(0, 10);
const html = (await readFile('src/index.html', 'utf8')).replaceAll('__HASH__', hash).replace('__APP__', () => render());
await writeFile(`${out}/index.html`, html);
console.log('Built dist/ (' + hash + ')');
