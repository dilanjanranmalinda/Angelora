import { useParams, Navigate } from 'react-router-dom'
import DetailPageShell from '@/components/DetailPageShell'
import { numbersByValue } from '@/data/numbers'

export default function NumberDetail() {
  const { number } = useParams<{ number: string }>()
  const value = Number(number)
  const entry = Number.isInteger(value) ? numbersByValue[value] : undefined

  if (!entry) {
    return <Navigate to="/numbers" replace />
  }

  const title = `${entry.number} in Numerology — ${entry.title} | Angelora`

  return (
    <DetailPageShell
      title={title}
      description={entry.essence}
      path={`/numbers/${entry.number}`}
      backTo="/numbers"
      backLabel="All numbers"
    >
      <article>
        <header className="panel mb-8 rounded-3xl p-8 text-center">
          <span className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-accent/25 to-accent-soft/20 text-6xl font-extrabold text-accent-soft">
            {entry.number}
          </span>
          <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {entry.title}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-mute">{entry.essence}</p>
        </header>

        <div className="space-y-4">
          <section className="panel rounded-2xl p-6" aria-labelledby="traits-heading">
            <h2 id="traits-heading" className="text-lg font-bold text-ink">
              Traits traditionally associated with {entry.number}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-accent-soft"
                >
                  {trait}
                </span>
              ))}
            </div>
          </section>

          <section className="panel rounded-2xl p-6">
            <h2 className="text-lg font-bold text-ink">Strength</h2>
            <p className="mt-2 leading-relaxed text-mute">{entry.strength}</p>
          </section>
          <section className="panel rounded-2xl p-6">
            <h2 className="text-lg font-bold text-ink">Love</h2>
            <p className="mt-2 leading-relaxed text-mute">{entry.love}</p>
          </section>
          <section className="panel rounded-2xl p-6">
            <h2 className="text-lg font-bold text-ink">Career</h2>
            <p className="mt-2 leading-relaxed text-mute">{entry.career}</p>
          </section>

          <section className="panel rounded-2xl p-6">
            <h2 className="text-lg font-bold text-ink">Complementary colors</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.colors.map((colorName) => (
                <span
                  key={colorName}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-mute"
                >
                  {colorName}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
            <h2 className="text-lg font-bold text-accent-soft">Reflection for you</h2>
            <p className="mt-2 font-display text-lg italic leading-relaxed text-ink">
              {entry.reflection}
            </p>
          </section>

          <p className="pt-4 text-xs leading-relaxed text-mute/70">
            These descriptions follow numerology traditions and are offered as
            entertainment and personal reflection. They are not scientifically
            proven predictions. Discover your own number on the homepage — it only
            takes a birthday.
          </p>
        </div>
      </article>
    </DetailPageShell>
  )
}