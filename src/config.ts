export const SITE_CONFIG = {
  brand: 'Angelora',
  tagline: 'Your day. Your signs. Your moment.',
  altTagline: 'A little inspiration for every day.',
  description:
    'Discover your personal number, daily color, special time, positive message and symbolic daily inspiration based on your birthday.',
  url: (import.meta.env.VITE_SITE_URL as string | undefined) ?? window.location.origin,
  social: {
    handle: '@angelora',
  },
  /** Advertising is disabled for the MVP. Set VITE_ADS_ENABLED=true only after
   *  an advertising provider is integrated and configured. */
  adsEnabled: (import.meta.env.VITE_ADS_ENABLED as string | undefined) === 'true',
} as const

export function siteUrl(path = '/'): string {
  const base = SITE_CONFIG.url.replace(/\/+$/, '')
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}