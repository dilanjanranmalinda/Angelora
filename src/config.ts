export const SITE_CONFIG = {
  brand: 'Angelora',
  tagline: 'Your day. Your signs. Your moment.',
  altTagline: 'A little inspiration for every day.',
  description:
    'Discover your personal number, daily color, special time, positive message and symbolic daily inspiration based on your birthday.',
  url: (import.meta.env?.VITE_SITE_URL as string | undefined) ??
    (typeof window !== 'undefined' ? window.location.origin : ''),
  social: {
    handle: '@angelora',
  },
  contactEmail: 'dilanjanranmalinda98@gmail.com',
  /** Google AdSense. Side-rail units render only after consent is given AND a
   *  real ad-unit slot ID is configured below. Flip VITE_ADS_ENABLED=true when
   *  the publisher is active. */
  adsense: {
    client: 'ca-pub-5345162386229869',
    enabled: (import.meta.env?.VITE_ADS_ENABLED as string | undefined) === 'true',
    slots: {
      leftRail: '',
      rightRail: '',
    },
  },
} as const

export function siteUrl(path = '/'): string {
  const base = SITE_CONFIG.url.replace(/\/+$/, '')
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}