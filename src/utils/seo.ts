import { siteUrl, SITE_CONFIG } from '@/config'

export interface SeoMeta {
  title: string
  description: string
  path?: string
  ogType?: string
}

export function applySeoMeta(meta: SeoMeta): void {
  const url = siteUrl(meta.path ?? '/')
  const title = meta.title
  const description = meta.description

  const set = (selector: string, content: string) => {
    document.querySelector(selector)?.setAttribute('content', content)
  }

  document.title = title
  set('meta[name="description"]', description)

  set('link[rel="canonical"]', url)
  set('meta[property="og:title"]', title)
  set('meta[property="og:description"]', description)
  set('meta[property="og:url"]', url)
  set('meta[property="og:site_name"]', SITE_CONFIG.brand)
  set('meta[property="og:type"]', meta.ogType ?? 'website')
  set('meta[property="og:image"]', siteUrl('/images/og.png'))

  set('meta[name="twitter:title"]', title)
  set('meta[name="twitter:description"]', description)
  set('meta[name="twitter:image"]', siteUrl('/images/og.png'))
}

function upsertJsonLd(id: string, data: unknown): void {
  const existing = document.getElementById(id) as HTMLScriptElement | null
  const script = existing ?? document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  if (!existing) document.head.appendChild(script)
}

export function applyBlogPostingStructuredData(post: {
  title: string
  description: string
  date: string
  updated?: string
  author: string
  path: string
  category: string
}): void {
  upsertJsonLd('blogposting-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.brand,
      url: siteUrl('/'),
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': siteUrl(post.path) },
    articleSection: post.category,
    url: siteUrl(post.path),
  })
}

export function applyBreadcrumbStructuredData(items: { name: string; path: string }[]): void {
  upsertJsonLd('breadcrumb-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: siteUrl(item.path),
    })),
  })
}

export function applyFaqStructuredData(faq: { q: string; a: string }[]): void {
  upsertJsonLd('faq-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  })
}

export function applyOrganizationStructuredData(): void {
  upsertJsonLd('org-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.brand,
    url: siteUrl('/'),
    slogan: SITE_CONFIG.tagline,
  })
}