import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import IndexPage from '@/components/IndexPage'
import { numbers } from '@/data/numbers'
import { applySeoMeta } from '@/utils/seo'

export default function NumbersList() {
  useEffect(() => {
    applySeoMeta({
      title: 'Personal Numbers in Numerology | Angelora',
      description:
        'What do the numbers 1 to 9, and master numbers 11, 22 and 33, symbolize? Learn how your birthday reduces to a personal number in numerology traditions.',
      path: '/numbers',
    })
  }, [])

  return (
    <IndexPage
      title="Personal Numbers"
      intro="Every number traditionally carries a different symbolic flavor. Tap any number to read its essence, strengths and reflection prompts — each written as inspiration, not prediction."
    >
      <section aria-label="List of personal numbers" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {numbers.map((entry) => (
          <Link
            key={entry.number}
            to={`/numbers/${entry.number}`}
            className="panel card-hover group flex items-center gap-5 rounded-2xl p-5"
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent-soft/20 text-3xl font-extrabold text-accent-soft">
              {entry.number}
            </span>
            <span>
              <span className="block font-display text-lg font-semibold text-ink">
                {entry.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-mute">
                {entry.essence}
              </span>
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-bold text-ink sm:text-2xl">
          How your personal number is calculated
        </h2>
        <p className="mt-3 leading-relaxed text-mute">
          Every digit of your birthday is added together and reduced to a single
          digit. 23/08/2002 becomes 2+3+0+8+2+0+0+2 = 17, then 1+7 = 8. If the
          reduction lands on 11, 22 or 33 — the master numbers — it is kept as-is.
          You can see your own number on the homepage: enter your birthday and get
          a personal day built entirely in your browser.
        </p>
      </section>
    </IndexPage>
  )
}