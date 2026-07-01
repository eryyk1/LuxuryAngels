import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getSitemapEntries, SITE_URL } from '../src/data/seo.js'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const outputPath = join(rootDir, 'public', 'sitemap.xml')

const entries = getSitemapEntries()

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${SITE_URL}${entry.path === '/' ? '/' : entry.path}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(outputPath, xml, 'utf8')
console.log(`Generated sitemap with ${entries.length} URLs → public/sitemap.xml`)
