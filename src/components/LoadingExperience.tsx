import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const STEPS = [
  { icon: '✨', label: 'Reading your day...' },
  { icon: '🔢', label: 'Finding your number...' },
  { icon: '🎨', label: 'Finding your color...' },
  { icon: '⏰', label: 'Finding your moment...' },
  { icon: '💗', label: 'Finding your energy...' },
  { icon: '🌸', label: 'Creating your message...' },
]

const STEP_MS = 260
const REVEAL_MS = 420

interface LoadingExperienceProps {
  onComplete: () => void
}

/**
 * The WOW loading sequence: a short, elegant reveal before YOUR DAY appears.
 * Timings keep the total under ~2 seconds for mobile users.
 */
export default function LoadingExperience({ onComplete }: LoadingExperienceProps) {
  const [step, setStep] = useState(0)
  const [revealing, setRevealing] = useState(false)

  const total = STEP_MS * STEPS.length + REVEAL_MS

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStep((s) => {
        if (s + 1 >= STEPS.length) {
          window.clearInterval(interval)
          setRevealing(true)
          return s + 1
        }
        return s + 1
      })
    }, STEP_MS)
    return () => window.clearInterval(interval)
  }, [])

  const finish = useCallback(() => {
    onComplete()
  }, [onComplete])

  useEffect(() => {
    const timer = window.setTimeout(finish, total + 120)
    return () => window.clearTimeout(timer)
  }, [finish, total])

  const visibleSteps = STEPS.slice(0, step + 1)

  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-6">
      <div>
        <AnimatePresence mode="wait">
          {revealing ? (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-deep to-accent-soft shadow-glow">
                <Sparkles size={26} className="text-night" strokeWidth={2.4} />
              </span>
              <p className="font-display text-2xl font-semibold text-ink">
                ✨ YOUR DAY ✨
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="steps"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-start gap-3"
              aria-live="polite"
            >
              {visibleSteps.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3 text-mute"
                >
                  <span className="w-7 text-center">{item.icon}</span>
                  <motion.span
                    animate={{ opacity: i === step && !revealing ? 1 : 0.75 }}
                    className="text-sm sm:text-base"
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}