import { useEffect, useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Mail } from 'lucide-react'
import StaticPage, { ProseHeading, ProseText } from '@/components/StaticPage'
import { SITE_CONFIG } from '@/config'
import { applySeoMeta } from '@/utils/seo'

export default function Contact() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    applySeoMeta({
      title: 'Contact | Angelora',
      description:
        'Say hello to Angelora — feedback, a suggestion, or a question about your daily experience.',
      path: '/contact',
    })
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = `Angelora message from ${name || 'a visitor'}`
    const body = `${message}\n\n— ${name}\nReply-to: ${email}`
    window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    form.reset()
  }

  return (
    <StaticPage
      title="Contact"
      intro="A suggestion, a question, or just saying hello — we read every message."
    >
      <ProseHeading>Write to us</ProseHeading>
      <ProseText>
        During the MVP the quickest way is email. Write to us at{' '}
        <a
          href={`mailto:${SITE_CONFIG.contactEmail}`}
          className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-soft"
        >
          {SITE_CONFIG.contactEmail}
        </a>{' '}
        — or use the form below and your email app will open with the message
        ready to send.
      </ProseText>

      <form onSubmit={handleSubmit} className="panel space-y-4 rounded-2xl p-6" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
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
              name="email"
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
            name="message"
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
              <Check size={16} /> Your email app should have opened with your
              message ready to send.
            </motion.p>
          ) : (
            <motion.button
              key="button"
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-soft text-base font-bold text-night"
            >
              <Mail size={18} /> Send Message
            </motion.button>
          )}
        </AnimatePresence>
      </form>
    </StaticPage>
  )
}