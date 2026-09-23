import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import CosmicBackground from '@/components/CosmicBackground'
import { SITE_CONFIG } from '@/config'

interface HeroProps {
  children: ReactNode
  busy?: boolean
}

export default function Hero({ children, busy }: HeroProps) {
  return (
    <section className="cosmic-bg relative overflow-hidden">
      <CosmicBackground />
      <div className="relative mx-auto w-full max-w-screen-xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-accent-soft"
        >
          ✨ {SITE_CONFIG.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
            Discover Your Personalized{' '}
            <span className="text-gradient">Daily Signs</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-mute sm:text-lg">
            Your personal number. Your color. Your moment. Your energy.
            <br className="hidden sm:block" /> A little inspiration for what makes
            today yours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-10 flex max-w-lg flex-col items-center"
        >
          {children}
        </motion.div>

        <p className="mt-6 text-xs text-mute/70" aria-hidden={busy ? 'true' : undefined}>
          ✨ Your number • Your color • Your moment • Your message
        </p>
      </div>
    </section>
  )
}