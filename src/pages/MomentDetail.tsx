import { useParams, Navigate } from 'react-router-dom'
import DetailPageShell from '@/components/DetailPageShell'
import { mirrorTimesByTime } from '@/data/mirrorTimes'

function fromSlug(slug: string): string {
  if (slug.includes('-')) return slug.replace('-', ':')
  const parts = slug.split('')
  return parts.length === 4 ? `${parts.slice(0, 2).join('')}:${parts.slice(2).join('')}` : slug
}

export default function MomentDetail() {
  const { time } = useParams<{ time: string }>()
  const entry = time ? mirrorTimesByTime[fromSlug(time)] : undefined

  if (!entry) {
    return <Navigate to="/moments" replace />
  }

  const title = `What ${entry.display} Means — ${entry.title} | Angelora`

  return (
    <DetailPageShell
      title={title}
      description={entry.symbolicMeaning}
      path={`/moments/${entry.time.replace(':', '-')}`}
      backTo="/moments"
      backLabel="All moments"
    >
      <article>
        <header className="panel mb-8 rounded-3xl p-8 text-center">
          <span className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-accent/25 to-accent-soft/20 text-3xl font-extrabold tracking-wider text-accent-soft">
            {entry.display}
          </span>
          <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {entry.title}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-mute">{entry.symbolicMeaning}</p>
        </header>

        <section className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
          <h2 className="text-lg font-bold text-accent-soft">A gentle reflection</h2>
          <p className="mt-2 font-display text-lg italic leading-relaxed text-ink">
            {entry.reflectionPrompt}
          </p>
        </section>

        <section className="panel mt-4 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-ink">A short note</h2>
          <p className="mt-2 leading-relaxed text-mute">
            Interpretations of mirror times differ from tradition to tradition and
            are cultural symbolism rather than science. Noticing {entry.display} is a
            friendly nudge to pause — nothing more, nothing less. You can receive
            today&rsquo;s own moment on the homepage by entering your birthday.
          </p>
        </section>
      </article>
    </DetailPageShell>
  )
}