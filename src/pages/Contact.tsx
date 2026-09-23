import { useEffect, useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import StaticPage, { ProseHeading, ProseText } from '@/components/StaticPage'
import { applySeoMeta } from '@/utils/seo'

export default function Contact() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    applySeoMeta({
      title: 'Contact | Angelora',
      description:
        'Say hello to Angelora — whether it is feedback, a suggestion, or a question about your daily experience.',
      path: '/contact',
    })
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    ;(event.target as HTMLFormElement).reset()
  }

  return (
    <StaticPage
      title="Contact"
      intro="A suggestion, a question, or just saying hello — we read every message."
    >
      <ProseHeading>Write to us</ProseHeading>
      <ProseText>
        During the MVP there is no backend, so messages go nowhere yet — this is a
        placeholder form that will be wired up when we add infrastructure. You can
        reach out socially through the handles on our social profiles.
      </ProseText>

      <form onSubmit={handleSubmit} className="panel space-y-4 rounded-2xl p-6" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
              Your name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              maxLength={50}
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-ink placeholder:text-mute/50 focus:border-accent focus:outline-none"
              placeholder="Alex"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-ink placeholder:text-mute/50 focus:border-accent focus:outline-none"
              placeholder="alex@example.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            maxLength={1000}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-ink placeholder:text-mute/50 focus:border-accent focus:outline-none"
            placeholder="Tell us what inspired you today ✨"
          />
        </div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.p
              key="sent"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 rounded-xl border border-mint/30 bg-mint/10 px-4 py-3 text-sm font-medium text-mint"
            >
              <Check size={16} /> Thanks! Your message is ready to be sent once our
              contact channel is live.
            </motion.p>
          ) : (
            <motion.button
              key="button"
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="h-12 w-full rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-soft text-base font-bold text-night"
            >
              Send Message
            </motion.button>
          )}
        </AnimatePresence>
      </form>
    </StaticPage>
  )
}