import { SITE_CONFIG } from '@/config'
import { AdSlot, type AdPlacement } from '@/components/advertising/AdSlot'

const RAILS: { placement: AdPlacement; side: 'left' | 'right' }[] = [
  { placement: 'left-rail', side: 'left' },
  { placement: 'right-rail', side: 'right' },
]

/**
 * Desktop side-rail ad placements (300×250, left + right).
 *
 * The rails only appear on very wide screens, so the mobile experience is
 * never affected. Each rail renders nothing until consent is given and a real
 * ad-unit slot ID is configured in SITE_CONFIG.adsense.slots.
 */
export default function SideRailAds() {
  if (!SITE_CONFIG.adsense.enabled) return null

  return (
    <>
      {RAILS.map(({ placement, side }) => (
        <div
          key={placement}
          aria-hidden="true"
          className={`pointer-events-none fixed inset-y-0 ${
            side === 'left' ? 'left-3' : 'right-3'
          } z-0 hidden items-center 2xl:flex`}
        >
          <div className="pointer-events-auto">
            <AdSlot placement={placement} />
          </div>
        </div>
      ))}
    </>
  )
}