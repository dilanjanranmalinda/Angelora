import { SITE_CONFIG } from '@/config'

export type AdPlacement =
  | 'left-rail'
  | 'right-rail'

interface AdSlotProps {
  placement: AdPlacement
  format?: 'rectangle' | 'skyscraper'
  className?: string
}

/**
 * Provider-independent ad slot.
 *
 * Advertising is DISABLED in the current MVP: this component renders nothing
 * until `VITE_ADS_ENABLED=true` is set (and an advertising provider is
 * configured). When enabled, the visual container occupies reserved space so
 * the page never shifts on load. The provider fills the container; the
 * surrounding layout is final.
 */
export function AdSlot({ placement, format = 'rectangle' }: AdSlotProps) {
  if (!SITE_CONFIG.adsEnabled) return null

  const dimensions =
    format === 'skyscraper' ? 'h-[600px] w-[300px]' : 'h-[250px] w-[300px]'

  return (
    <div role="complementary" aria-label="Advertisement">
      <div
        data-ad-placement={placement}
        className={`${dimensions} overflow-hidden rounded-xl border border-white/5 bg-white/[0.015]`}
      />
    </div>
  )
}