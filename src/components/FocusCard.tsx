import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function FocusCard({ experience }: { experience: DailyExperience }) {
  const f = experience.focus

  return (
    <DetailSection
      id="section-focus"
      index="05"
      icon="🌸"
      title={`Today's Focus — ${f.title}`}
      accent={experience.color.hex}
      experience={experience}
      intro="A single theme to hold loosely through the day. Not a to-do — just an emphasis."
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div
          className="grid h-24 w-24 shrink-0 place-items-center rounded-full text-4xl"
          style={{ background: `${experience.color.hex}1a`, boxShadow: `0 0 40px ${experience.color.hex}30` }}
          aria-hidden="true"
        >
          🌸
        </div>
        <div>
          <p className="font-display text-3xl font-semibold text-ink">{f.title}</p>
          <p className="mt-2 max-w-xl leading-relaxed text-mute">{f.description}</p>
        </div>
      </div>
    </DetailSection>
  )
}