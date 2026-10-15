import { numbers, numbersByValue } from '@/data/numbers'
import { mirrorTimes, mirrorTimesByTime } from '@/data/mirrorTimes'
import { colors, colorsBySlug } from '@/data/colors'
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG } from '@/data/blog'
import { slugify } from '@/utils/slugify'

export interface RouteMeta {
  title: string
  description: string
}

/** Per-page title/description, shared by the live app and the static renderer. */
export const STATIC_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Your Daily Signs & Personal Number | Angelora',
    description:
      'Discover your personal number, daily color, special time, positive message and symbolic daily inspiration based on your birthday.',
  },
  '/about': {
    title: 'About | Angelora',
    description:
      'Angelora turns your birthday and today\u2019s date into a personal daily moment — a number, a color, a mirror time, an energy and a message. For entertainment and reflection.',
  },
  '/privacy': {
    title: 'Privacy Policy | Angelora',
    description:
      'Angelora is a frontend-only app — your birthday and name never leave your browser. We use Google Analytics to understand how visitors use the site.',
  },
  '/terms': {
    title: 'Terms of Use | Angelora',
    description:
      'Angelora offers numerology-inspired content for entertainment and reflection. Read the terms of using the site.',
  },
  '/contact': {
    title: 'Contact | Angelora',
    description:
      'Say hello to Angelora — feedback, a suggestion, or a question about your daily experience.',
  },
  '/numbers': {
    title: 'Personal Numbers in Numerology | Angelora',
    description:
      'What do the numbers 1 to 9, and master numbers 11, 22 and 33, symbolize? Learn how your birthday reduces to a personal number in numerology traditions.',
  },
  '/moments': {
    title: 'Mirror Times & Repeating Clocks | Angelora',
    description:
      'What does 11:11 mean? What are mirror times? Explore the symbolic meaning of repeating clock patterns such as 11:11, 22:22 and 12:12.',
  },
  '/colors': {
    title: 'Symbolic Daily Colors | Angelora',
    description:
      'Lavender, gold, sage green and more — explore the symbolic meanings, moods and style ideas associated with each daily color.',
  },
  '/affirmations': {
    title: 'Daily Affirmations | Angelora',
    description:
      'A growing library of gentle daily affirmations for confidence, calm, growth, rest and new beginnings. Simple sentences to carry through your day.',
  },
  '/blog': {
    title: 'Guides & Journal | Angelora',
    description:
      'Original guides on personal numbers, mirror times, angel numbers and color symbolism — thoughtful, honest writing for gentle daily reflection.',
  },
}

export function numberMeta(entry: (typeof numbers)[number]): RouteMeta {
  return {
    title: `${entry.number} in Numerology — ${entry.title} | Angelora`,
    description: entry.essence,
  }
}

export function momentMeta(entry: (typeof mirrorTimes)[number]): RouteMeta {
  return {
    title: `What ${entry.display} Means — ${entry.title} | Angelora`,
    description: entry.symbolicMeaning,
  }
}

export function colorMeta(entry: (typeof colors)[number]): RouteMeta {
  return {
    title: `${entry.name} — Meaning & Symbolism | Angelora`,
    description: entry.symbolicMeaning,
  }
}

export function blogMeta(entry: (typeof BLOG_POSTS)[number]): RouteMeta {
  return { title: `${entry.title} | Angelora`, description: entry.description }
}

/** Resolves title/description for any known path, including dynamic routes. */
export function getRouteMeta(path: string): RouteMeta {
  if (STATIC_META[path]) return STATIC_META[path]

  const numberMatch = path.match(/^\/numbers\/(\d+)$/)
  if (numberMatch) {
    const entry = numbersByValue[Number(numberMatch[1])]
    if (entry) return numberMeta(entry)
  }

  const momentMatch = path.match(/^\/moments\/(.+)$/)
  if (momentMatch) {
    const entry = mirrorTimesByTime[momentMatch[1].replace('-', ':')]
    if (entry) return momentMeta(entry)
  }

  const colorMatch = path.match(/^\/colors\/(.+)$/)
  if (colorMatch) {
    const entry = colorsBySlug[colorMatch[1].toLowerCase()]
    if (entry) return colorMeta(entry)
  }

  const blogMatch = path.match(/^\/blog\/(.+)$/)
  if (blogMatch) {
    const entry = BLOG_POSTS_BY_SLUG[blogMatch[1]]
    if (entry) return blogMeta(entry)
  }

  return STATIC_META['/']
}

export interface PrerenderRoute {
  path: string
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: number
}

/** Every URL that should be emitted as static HTML and listed in the sitemap. */
export function getPrerenderRoutes(): PrerenderRoute[] {
  const routes: PrerenderRoute[] = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/blog', changefreq: 'weekly', priority: 0.8 },
    { path: '/numbers', changefreq: 'monthly', priority: 0.8 },
    { path: '/moments', changefreq: 'monthly', priority: 0.8 },
    { path: '/colors', changefreq: 'monthly', priority: 0.8 },
    { path: '/affirmations', changefreq: 'monthly', priority: 0.7 },
    { path: '/about', changefreq: 'monthly', priority: 0.6 },
    { path: '/privacy', changefreq: 'yearly', priority: 0.4 },
    { path: '/terms', changefreq: 'yearly', priority: 0.4 },
    { path: '/contact', changefreq: 'yearly', priority: 0.4 },
  ]

  for (const entry of numbers) {
    routes.push({ path: `/numbers/${entry.number}`, changefreq: 'monthly', priority: 0.7 })
  }
  for (const entry of mirrorTimes) {
    routes.push({
      path: `/moments/${entry.time.replace(':', '-')}`,
      changefreq: 'monthly',
      priority: 0.6,
    })
  }
  for (const entry of colors) {
    routes.push({ path: `/colors/${slugify(entry.name)}`, changefreq: 'monthly', priority: 0.6 })
  }
  for (const entry of BLOG_POSTS) {
    routes.push({ path: `/blog/${entry.slug}`, changefreq: 'monthly', priority: 0.7 })
  }

  return routes
}
