import { useParams, Navigate } from 'react-router-dom'
import DetailPageShell from '@/components/DetailPageShell'
import { colorsByName } from '@/data/colors'

export default function ColorDetail() {
  const { name } = useParams<{ name: string }>()
  const entry = name ? colorsByName[name.toLowerCase()] : undefined

  if (!entry) {
    return <Navigate to="/colors" replace />
  }

  const paths = `${entry.hex}55`

  const title = `${entry.name} — Meaning & Symbolism | Angelora`

  return (
    <DetailPageShell
      title={title}
      description={entry.symbolicMeaning}
      path={`/colors/${name?.toLowerCase()}`}
      backTo="/colors"
      backLabel="All colors"
    >
      <article>
        <header className="panel mb-8 rounded-3xl p-8 text-center">
          <span
            className="mx-auto grid h-24 w-24 place-items-center rounded-3xl"
            style={{ background: entry.hex, boxShadow: `0 0 44px ${paths}` }}
            aria-hidden="true"
          />
          <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {entry.name}
          </h1>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mute">
            {entry.mood}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-mute">{entry.symbolicMeaning}</p>
        </header>

        <div className="space-y-4">
          <section className="panel rounded-2xl p-6" aria-labelledby="pairs-heading">
            <h2 id="pairs-heading" className="text-lg font-bold text-ink">
              Colors {entry.name} pairs well with
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.secondaryColors.map((colorName) => (
                <span
                  key={colorName}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-mute"
                >
                  {colorName}
                </span>
              ))}
            </div>
          </section>

          <section className="panel rounded-2xl p-6">
            <h2 className="text-lg font-bold text-ink">How to wear / use it</h2>
            <p className="mt-2 leading-relaxed text-mute">{entry.styleDescription}</p>
          </section>

          <p className="pt-4 text-xs leading-relaxed text-mute/70">
            Color symbolism is cultural and personal — there is no single correct
            meaning. If {entry.name} spoke to you today, let it simply be a small
            aesthetic moment. See your own daily color on the homepage.
          </p>
        </div>
      </article>
    </DetailPageShell>
  )
}