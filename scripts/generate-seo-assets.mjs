import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getAllFlavors, site, getFlavorPath } from '../src/data/siteContent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const sitemapEntries = [
  {
    loc: `${site.url}/`,
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'weekly',
    priority: '1.0',
  },
  ...getAllFlavors().map((flavor) => ({
    loc: `${site.url}${getFlavorPath(flavor.slug)}`,
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: '0.8',
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;

await fs.mkdir(publicDir, { recursive: true });
await fs.writeFile(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
await fs.writeFile(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');

