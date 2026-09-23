import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import IndexPage from '@/components/IndexPage'
import { colors } from '@/data/colors'
import { slugify } from '@/utils/slugify'
import { applySeoMeta } from '@/utils/seo'

export default function ColorsList() {
  useEffect(() => {
    applySeoMeta({
      title: 'Symbolic Daily Colors | Angelora',
      description:
        'Lavender, gold, sage green and more — explore the symbolic meanings, moods and style ideas associated with each daily color.',
      path: '/colors',
    })
  }, [])

  return (
    <IndexPage
      title="Daily Colors"
      intro="Each color carries a traditional symbolic flavor — a mood, a meaning, and a few everyday styling ideas. Find the one that speaks to you today."
    >
      <section aria-label="List of colors" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {colors.map((color) => (
          <Link
            key={color.name}
            to={`/colors/${slugify(color.name)}`}
            className="panel card-hover group flex items-center gap-5 rounded-2xl p-5"
          >
            <span
              className="h-16 w-16 shrink-0 rounded-2xl border border-white/15"
              style={{ background: color.hex, boxShadow: `0 0 26px ${color.hex}44` }}
              aria-hidden="true"
            />
            <span>
              <span className="block font-display text-lg font-semibold text-ink">
                {color.name}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-mute">
                {color.symbolicMeaning}
              </span>
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-bold text-ink sm:text-2xl">How your daily color is chosen</h2>
        <p className="mt-3 leading-relaxed text-mute">
          On the homepage, the color of your day is derived deterministically from
          your birthday and today&rsquo;s date — no randomness, so you can trust that
          the same birthday always gives you the same color on the same day. It also
          tints the accents of your personalized dashboard.
        </p>
      </section>
    </IndexPage>
  )
}