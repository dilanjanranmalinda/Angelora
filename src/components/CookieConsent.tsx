import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cookie } from 'lucide-react'
import { getConsent, setConsent, loadAnalytics, type ConsentState } from '@/utils/consent'

export default function CookieConsent() {
  const [consent, setLocalConsent] = useState<ConsentState>(() => getConsent())

  if (consent !== 'unknown') return null

  const accept = () => {
    setConsent('accepted')
    setLocalConsent('accepted')
    loadAnalytics()
  }

  const decline = () => {
    setConsent('declined')
    setLocalConsent('declined')
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.35, delay: 0.6 }}
        className="fixed inset-x-0 bottom-0 z-40 p-4 sm:p-5"
        role="region"
        aria-label="Cookie consent"
      >
        <div className="panel mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
          <div className="flex flex-1 items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-soft">
              <Cookie size={20} />
            </span>
            <div>
              <p className="font-semibold text-ink">Cookies make Angelora better</p>
              <p className="mt-1 text-sm leading-relaxed text-mute">
                We use Google Analytics to understand how the site is used. It
                stores an anonymous identifier and never sees your birthday or
                name. Read more in our{' '}
                <Link
                  to="/privacy"
                  className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-soft"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={decline}
              className="h-11 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-mute transition-colors hover:border-white/25 hover:text-ink sm:flex-none"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={accept}
              className="h-11 flex-1 rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-soft px-5 text-sm font-bold text-night sm:flex-none"
            >
              Accept
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}