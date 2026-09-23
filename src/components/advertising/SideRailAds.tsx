import { SITE_CONFIG } from '@/config'
import { AdSlot } from '@/components/advertising/AdSlot'

/**
 * Desktop side-rail ad placements (left + right, e.g. 300×250 rectangles).
 *
 * Renders nothing until advertising is enabled (`VITE_ADS_ENABLED=true`).
 * When enabled, the rails are sticky and only appear on wide screens so the
 * mobile-first experience is never affected.
 */
export default function SideRailAds() {
  if (!SITE_CONFIG.adsEnabled) return null

  return (
    <>
      <div className="pointer-events-none fixed inset-y-0 left-3 z-0 hidden items-center 2xl:flex">
        <div className="pointer-events-auto">
          <AdSlot placement="left-rail" format="rectangle" />
        </div>
      </div>
      <div className="pointer-events-none fixed inset-y-0 right-3 z-0 hidden items-center 2xl:flex">
        <div className="pointer-events-auto">
          <AdSlot placement="right-rail" format="rectangle" />
        </div>
      </div>
    </>
  )
}