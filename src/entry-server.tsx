import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import AppShell from '@/AppShell'
import AppRoutes from '@/routes'
import { SITE_CONFIG, siteUrl } from '@/config'
import { getPrerenderRoutes, getRouteMeta } from '@/seo/routeMeta'

export { getPrerenderRoutes, getRouteMeta, SITE_CONFIG, siteUrl }

/**
 * Renders a single route to an HTML string at build time. Used by
 * `scripts/prerender.mjs` to emit static, crawlable HTML for every URL.
 */
export function render(url: string): string {
  return renderToString(
    <MotionConfig reducedMotion="user">
      <StaticRouter location={url}>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </StaticRouter>
    </MotionConfig>,
  )
}
