import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function EnergyCard({ experience }: { experience: DailyExperience }) {
  const e = experience.energy

  return (
    <DetailSection
      id="section-energy"
      index="04"
      icon="💗"
      title={`Today's Energy — ${e.title}`}
      accent={experience.color.hex}
      experience={experience}
      intro="A symbolic read on the gentle current running through your day — something to lean into, not obey."
    >
      <div className="rounded-2xl bg-white/[0.03] p-6">
        <p className="text-2xl font-bold text-ink">{e.title}</p>
        <p className="mt-2 leading-relaxed text-mute">{e.description}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-night/50 px-5 py-4">
          <span className="text-lg" aria-hidden="true">
            ✨
          </span>
          <p className="font-display text-lg italic text-accent-soft">
            &ldquo;{e.affirmation}&rdquo;
          </p>
        </div>
      </div>
    </DetailSection>
  )
}