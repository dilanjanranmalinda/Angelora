import { useEffect } from 'react'
import { SITE_CONFIG } from '@/config'
import { areAdsAllowed } from '@/utils/consent'

export type AdPlacement = 'left-rail' | 'right-rail'

interface AdSlotProps {
  placement: AdPlacement
}

const WIDTH = 300
const HEIGHT = 250

/**
 * 300×250 AdSense side-rail unit.
 *
 * Renders only when ALL of these hold: advertising enabled, a real ad-unit
 * slot ID is configured for this placement, AND the visitor accepted the
 * consent banner (after consent, the container mounts and the ad fills it).
 */
const SLOT_KEY: Record<AdPlacement, keyof typeof SITE_CONFIG.adsense.slots> = {
  'left-rail': 'leftRail',
  'right-rail': 'rightRail',
}

export function AdSlot({ placement }: AdSlotProps) {
  const slot = SITE_CONFIG.adsense.slots[SLOT_KEY[placement]]

  useEffect(() => {
    if (!slot || !areAdsAllowed()) return
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [slot, placement])

  if (!slot || !SITE_CONFIG.adsense.enabled || !areAdsAllowed()) {
    return <div className="h-[250px] w-[300px]" aria-hidden="true" />
  }

  return (
    <div className="w-[300px] overflow-hidden rounded-xl border border-white/5 bg-night-2/40">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={SITE_CONFIG.adsense.client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="false"
        data-ad-width={WIDTH}
        data-ad-height={HEIGHT}
      />
    </div>
  )
}