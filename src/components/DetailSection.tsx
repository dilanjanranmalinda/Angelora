import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import ShareButton from '@/components/ShareButton'
import type { DailyExperience } from '@/types/daily'

interface DetailSectionProps {
  id: string
  index: string
  icon: string
  title: string
  accent: string
  experience: DailyExperience
  children: ReactNode
  className?: string
  intro?: string
}

/**
 * Shared layout for the EXPLORE DETAILS cards: a numbered, clickable-feel
 * section with a heading, optional intro copy and a subtle share affordance.
 */
export default function DetailSection({
  id,
  index,
  icon,
  title,
  accent,
  experience,
  children,
  className,
  intro,
}: DetailSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('scroll-mt-24', className)}
    >
      <div
        className="panel rounded-3xl p-6 sm:p-8"
      >
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-2xl"
              style={{ background: `${accent}1f`, boxShadow: `0 0 30px ${accent}28` }}
            >
              {icon}
            </span>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                {index}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">
                {title}
              </h2>
              {intro && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{intro}</p>}
            </div>
          </div>
          <div className="shrink-0">
            <ShareButton experience={experience} variant="ghost" />
          </div>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </motion.section>
  )
}