import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import IndexPage from '@/components/IndexPage'
import { mirrorTimes } from '@/data/mirrorTimes'
import { applySeoMeta } from '@/utils/seo'

function timeSlug(time: string): string {
  return time.replace(':', '-')
}

export default function MomentsList() {
  useEffect(() => {
    applySeoMeta({
      title: 'Mirror Times & Repeating Clocks | Angelora',
      description:
        'What does 11:11 mean? What are mirror times? Explore the symbolic meaning of repeating clock patterns such as 11:11, 22:22 and 12:12.',
      path: '/moments',
    })
  }, [])

  return (
    <IndexPage
      title="Mirror Times"
      intro="Repeating clock patterns — 11:11, 22:22, 12:12 — are easy to notice and fun to think about. Each moment below carries a gentle, original interpretation."
    >
      <section aria-label="List of mirror times" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {mirrorTimes.map((moment) => (
          <Link
            key={moment.time}
            to={`/moments/${timeSlug(moment.time)}`}
            className="panel card-hover group flex items-center gap-5 rounded-2xl p-5"
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent-soft/20 text-xl font-extrabold tracking-wider text-accent-soft">
              {moment.display}
            </span>
            <span>
              <span className="block font-display text-lg font-semibold text-ink">
                {moment.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-mute">
                {moment.symbolicMeaning}
              </span>
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-bold text-ink sm:text-2xl">Why mirror times matter</h2>
        <p className="mt-3 leading-relaxed text-mute">
          Noticing repeating numbers is a natural human pattern-recognition habit.
          Mirror times give you a pleasant excuse to pause and reflect. On the
          homepage, your own daily moment is picked deterministically from your
          birthday and today&rsquo;s date — a new one every day.
        </p>
      </section>
    </IndexPage>
  )
}