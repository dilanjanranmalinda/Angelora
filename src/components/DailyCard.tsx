import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export interface DailyCardProps {
  label: string
  value: string
  icon: string
  sub?: string
  accent?: string
  targetId: string
  className?: string
  wide?: boolean
}

/**
 * Compact summary card shown in the YOUR DAY dashboard.
 * Clicking it smooth-scrolls to the matching detailed section.
 */
export default function DailyCard({
  label,
  value,
  icon,
  sub,
  accent,
  targetId,
  className,
  wide,
}: DailyCardProps) {
  const scrollToDetail = () => {
    const el = document.getElementById(targetId)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      onClick={scrollToDetail}
      className={cn(
        'panel card-hover group flex flex-col items-start gap-1 rounded-2xl p-4 text-left',
        wide && 'w-full sm:flex-row sm:items-center sm:justify-between sm:gap-4',
        className,
      )}
      aria-label={`View your ${label.toLowerCase()}: ${value}`}
    >
      <span
        className="grid h-10 w-10 place-items-center rounded-xl text-lg"
        style={
          accent
            ? { background: `${accent}22`, boxShadow: `0 0 24px ${accent}30` }
            : undefined
        }
      >
        {icon}
      </span>
      <span className="mt-1 w-full">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
          {label}
        </span>
        <span className="block text-lg font-bold leading-tight text-ink">
          {value}
        </span>
        {sub && (
          <span className="mt-0.5 block text-sm text-mute/90">{sub}</span>
        )}
      </span>
    </motion.button>
  )
}