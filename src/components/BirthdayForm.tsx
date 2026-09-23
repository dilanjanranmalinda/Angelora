import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { buildDateFromParts, type DateInputParts } from '@/utils/dateUtils'

interface BirthdayFormProps {
  defaultBirthday?: string
  defaultName?: string
  busy?: boolean
  onSubmit: (input: { birthDate: Date; name?: string }) => void
}

interface Errors {
  date: string
}

function splitBirthday(value: string | undefined): DateInputParts {
  const parts = (value ?? '').trim().split(/[/.\s-]+/)
  return {
    day: parts[0] ?? '',
    month: parts[1] ?? '',
    year: parts[2] ?? '',
  }
}

export default function BirthdayForm({
  defaultBirthday,
  defaultName,
  busy,
  onSubmit,
}: BirthdayFormProps) {
  const initial = splitBirthday(defaultBirthday)
  const [day, setDay] = useState(initial.day)
  const [month, setMonth] = useState(initial.month)
  const [year, setYear] = useState(initial.year)
  const [name, setName] = useState(defaultName ?? '')
  const [errors, setErrors] = useState<Errors>({ date: '' })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const birthDate = buildDateFromParts({ day, month, year })
    if (!birthDate) {
      const anyEmpty = !day.trim() || !month.trim() || !year.trim()
      setErrors({
        date: anyEmpty
          ? 'Add your birthday so we can read your day. ✨'
          : 'That date doesn\u2019t look quite right — check the day, month and year.',
      })
      return
    }
    setErrors({ date: '' })
    onSubmit({ birthDate, name: name.trim() || undefined })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
      <fieldset disabled={busy} className="space-y-4">
        <div>
          <label htmlFor="birthday" className="mb-2 block text-sm font-medium text-ink">
            What&rsquo;s your birthday?
          </label>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 grid-cols-3 gap-2" id="birthday-group">
              <div className="flex flex-col gap-1">
                <input
                  id="birthday"
                  aria-label="Day"
                  inputMode="numeric"
                  autoComplete="bday-day"
                  placeholder="DD"
                  maxLength={2}
                  value={day}
                  onChange={(e) => setDay(e.target.value.replace(/\D/g, ''))}
                  className="h-14 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-center text-lg font-semibold text-ink placeholder:text-mute/50 focus:border-accent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  aria-label="Month"
                  inputMode="numeric"
                  autoComplete="bday-month"
                  placeholder="MM"
                  maxLength={2}
                  value={month}
                  onChange={(e) => setMonth(e.target.value.replace(/\D/g, ''))}
                  className="h-14 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-center text-lg font-semibold text-ink placeholder:text-mute/50 focus:border-accent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  aria-label="Year"
                  inputMode="numeric"
                  autoComplete="bday-year"
                  placeholder="YYYY"
                  maxLength={4}
                  value={year}
                  onChange={(e) => setYear(e.target.value.replace(/\D/g, ''))}
                  className="h-14 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-center text-lg font-semibold text-ink placeholder:text-mute/50 focus:border-accent focus:outline-none"
                />
              </div>
            </div>
          </div>
          <AnimatePresence>
            {errors.date && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-2 text-sm text-coral"
                role="alert"
              >
                {errors.date}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            Your name <span className="text-mute">(optional)</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Emma"
            maxLength={30}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-lg font-medium text-ink placeholder:text-mute/50 focus:border-accent focus:outline-none"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={busy}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-soft text-base font-bold text-night shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Sparkles size={18} strokeWidth={2.5} />
          {busy ? 'Reading your day...' : 'Discover My Day'}
        </motion.button>

        <p className="text-center text-xs leading-relaxed text-mute/80">
          No account required. Your experience is created directly in your browser —
          the same birthday + date always gives you the same day.
        </p>
      </fieldset>
    </form>
  )
}