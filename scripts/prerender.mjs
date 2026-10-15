import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = resolve(process.cwd())
const DIST = join(ROOT, 'dist')
const SSR_ENTRY = join(ROOT, 'dist-ssr', 'entry-server.js')

const {
  render,
  getPrerenderRoutes,
  getRouteMeta,
  siteUrl,
} = await import(pathToFileURL(SSR_ENTRY).href)

const template = await readFile(join(DIST, 'index.html'), 'utf8')

function esc(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function replaceTag(html, regex, tag) {
  if (!regex.test(html)) {
    throw new Error(`prerender: could not find tag to replace: ${regex}`)
  }
  return html.replace(regex, tag)
}

function buildHead(html, route) {
  const meta = getRouteMeta(route.path)
  const url = siteUrl(route.path)
  const title = esc(meta.title)
  const description = esc(meta.description)
  const ogType = route.path.startsWith('/blog/') ? 'article' : 'website'

  let out = html
  out = replaceTag(out, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  out = replaceTag(
    out,
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${description}" />`,
  )
  out = replaceTag(out, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
  out = replaceTag(out, /<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${ogType}" />`)
  out = replaceTag(out, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
  out = replaceTag(
    out,
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${title}" />`,
  )
  out = replaceTag(
    out,
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${description}" />`,
  )
  out = replaceTag(
    out,
    /<meta name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${title}" />`,
  )
  out = replaceTag(
    out,
    /<meta name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${description}" />`,
  )
  return out
}

const routes = getPrerenderRoutes()
const today = new Date().toISOString().slice(0, 10)

for (const route of routes) {
  const appHtml = render(route.path)
  let html = buildHead(template, route)
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outPath =
    route.path === '/' ? join(DIST, 'index.html') : join(DIST, route.path, 'index.html')
  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, html, 'utf8')
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) =>
    [
      '  <url>',
      `    <loc>${siteUrl(route.path)}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority.toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n'),
  ),
  '</urlset>',
  '',
].join('\n')

await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8')

console.log(`prerender: wrote ${routes.length} HTML pages + sitemap.xml`)
