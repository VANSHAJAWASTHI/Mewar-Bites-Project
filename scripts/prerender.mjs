import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { getAllFlavors, getFlavorPath } from '../src/data/siteContent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const vite = await createServer({
  configFile: path.join(rootDir, 'vite.config.js'),
  root: rootDir,
  appType: 'custom',
  server: { middlewareMode: true },
});

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

  const buildHtml = (appHtml, helmet) => {
    const bodyStart = appHtml.indexOf('<div class="app-wrapper">');
    const headHtml = bodyStart >= 0 ? appHtml.slice(0, bodyStart) : '';
    const bodyHtml = bodyStart >= 0 ? appHtml.slice(bodyStart) : appHtml;

    return template
      .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`)
      .replace('</head>', `${headHtml}\n</head>`);
  };

  const routes = ['/', ...getAllFlavors().map((flavor) => getFlavorPath(flavor.slug))];

  for (const route of routes) {
    const { html, helmet } = render(route);
    const renderedHtml = buildHtml(html, helmet);

    if (route === '/') {
      await fs.writeFile(path.join(distDir, 'index.html'), renderedHtml, 'utf8');
      continue;
    }

    const outputFile = path.join(distDir, `${route.slice(1)}.html`);
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, renderedHtml, 'utf8');
  }
} finally {
  await vite.close();
}
