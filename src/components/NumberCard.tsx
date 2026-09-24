import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function NumberCard({ experience }: { experience: DailyExperience }) {
  const n = experience.numberMeaning
  const isMaster = experience.personalNumber.isMaster

  return (
    <DetailSection
      id="section-number"
      index="01"
      icon="🔢"
      title="Your Personal Number"
      accent={experience.color.hex}
      experience={experience}
      intro="Using the digits of your birthday, numerology traditions reduce the sum to a single digit — or a master number such as 11, 22 or 33."
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="shrink-0 text-center">
          <div
            className="grid h-28 w-28 place-items-center rounded-3xl text-6xl font-extrabold text-ink"
            style={{ background: `${experience.color.hex}1a`, boxShadow: `0 0 44px ${experience.color.hex}33` }}
          >
            {experience.personalNumber.value}
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-mute">
            {isMaster ? 'Master number' : 'Personal number'}
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-2xl font-semibold text-ink">{n.title}</h3>
          <p className="mt-2 leading-relaxed text-mute">{n.essence}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {n.traits.map((trait) => (
              <span
                key={trait}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-accent-soft"
              >
                {trait}
              </span>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/[0.03] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Strength</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/90">{n.strength}</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Reflection</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/90">{n.reflection}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-mute/70">
        In numerology traditions, this number describes recurring themes and energy rather than a
        fixed destiny. Treat it as a reflective style — not a prediction.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-2 rounded-xl bg-gradient-to-r from-gold/15 to-transparent p-4">
        <span className="text-xl" aria-hidden="true">🍀</span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
            Today&rsquo;s Lucky Number
          </p>
          <p className="text-sm leading-relaxed text-ink/90">
            {experience.luckyNumber.number} — {experience.luckyNumber.omen}.{' '}
            {experience.luckyNumber.hint}
          </p>
        </div>
      </div>
    </DetailSection>
  )
}