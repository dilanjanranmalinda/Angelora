import { useEffect } from 'react'
import IndexPage from '@/components/IndexPage'
import { affirmations } from '@/data/affirmations'
import { applySeoMeta } from '@/utils/seo'

export default function AffirmationsPage() {
  useEffect(() => {
    applySeoMeta({
      title: 'Daily Affirmations | Angelora',
      description:
        'A growing library of gentle daily affirmations for confidence, calm, growth, rest and new beginnings. Simple sentences to carry through your day.',
      path: '/affirmations',
    })
  }, [])

  return (
    <IndexPage
      title="Daily Affirmations"
      intro="Short, gentle sentences worth repeating. Say them aloud, write them down, or just keep one in your pocket for the day."
    >
      <section aria-label="Affirmations" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {affirmations.map((text, i) => (
          <figure key={text} className="panel rounded-2xl p-6">
            <blockquote className="font-display text-lg italic leading-relaxed text-ink">
              &ldquo;{text}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-mute">
              Affirmation {String(i + 1).padStart(2, '0')}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="mt-14 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
        <h2 className="text-lg font-bold text-accent-soft">Your affirmation for today</h2>
        <p className="mx-auto mt-2 max-w-lg text-mute">
          On the homepage, your daily affirmation is selected deterministically from
          your birthday and today&rsquo;s date — a new one, every day.
        </p>
      </section>
    </IndexPage>
  )
}