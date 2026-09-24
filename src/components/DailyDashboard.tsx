import { motion } from 'framer-motion'
import type { DailyExperience } from '@/types/daily'
import DailyCard from '@/components/DailyCard'
import ShareButton from '@/components/ShareButton'
import { greetingForDate } from '@/utils/dateUtils'

interface DailyDashboardProps {
  experience: DailyExperience
}

export default function DailyDashboard({ experience }: DailyDashboardProps) {
  const greeting = `${greetingForDate(new Date())}${experience.name ? ', ' + experience.name : ''}`

  return (
    <motion.section
      id="your-day"
      aria-labelledby="your-day-heading"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6"
    >
      <div className="mb-8 text-center">
        <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          ✨ YOUR DAY ✨
        </p>
        <h2 id="your-day-heading" className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
          {greeting}
        </h2>
        <p className="mt-1.5 text-sm font-medium uppercase tracking-[0.18em] text-mute">
          {experience.date}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="panel card-hover relative mb-3 overflow-hidden rounded-2xl p-6"
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #E8C77A, transparent 70%)' }}
        />
        <div className="relative flex items-center gap-5 sm:items-start">
          <span className="text-5xl sm:text-6xl" aria-hidden="true">
            🍀
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              Today&rsquo;s Lucky Number
            </p>
            <div className="mt-1 flex items-center gap-3">
              <span className="font-display text-6xl font-extrabold leading-none text-gold sm:text-7xl">
                {experience.luckyNumber.number}
              </span>
              <div className="min-w-0">
                <p className="font-bold leading-tight text-ink">
                  {experience.luckyNumber.omen}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-mute/90">
                  {experience.luckyNumber.meaning}
                </p>
              </div>
            </div>
            {experience.luckyNumber.number === experience.personalNumber.value ? (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                ✨ Double luck — it matches your personal number today!
              </p>
            ) : (
              <p className="mt-3 text-xs leading-relaxed text-mute">
                {experience.luckyNumber.hint}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <DailyCard
          label="Number"
          value={String(experience.personalNumber.value)}
          sub={experience.personalNumber.isMaster ? 'Master number' : undefined}
          icon="🔢"
          accent={experience.color.hex}
          targetId="section-number"
        />
        <DailyCard
          label="Color"
          value={experience.color.name}
          icon="🎨"
          accent={experience.color.hex}
          targetId="section-color"
        />
        <DailyCard
          label="Moment"
          value={experience.moment.display}
          icon="⏰"
          accent={experience.color.hex}
          targetId="section-moment"
        />
        <DailyCard
          label="Energy"
          value={experience.energy.title}
          icon="💗"
          accent={experience.color.hex}
          targetId="section-energy"
        />
        <DailyCard
          label="Focus"
          value={experience.focus.title}
          icon="🌸"
          accent={experience.color.hex}
          targetId="section-focus"
        />
        <DailyCard
          label="Style"
          value={`${experience.style.palette[0]} + ${experience.style.palette[1]}`}
          sub={experience.style.title}
          icon="👗"
          accent={experience.color.hex}
          targetId="section-style"
        />
      </div>

      <div className="panel card-hover mt-3 rounded-2xl p-6">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
          💌 Message for today
        </p>
        <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
          &ldquo;{experience.message}&rdquo;
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <ShareButton experience={experience} />
      </div>
    </motion.section>
  )
}