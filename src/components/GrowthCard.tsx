import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function GrowthCard({ experience }: { experience: DailyExperience }) {
  return (
    <DetailSection
      id="section-growth"
      index="10"
      icon="🌱"
      title="Personal Growth"
      accent={experience.color.hex}
      experience={experience}
      intro="A gentle nudge toward becoming — at your own pace, on your own timeline."
    >
      <div className="flex items-start gap-4 rounded-2xl bg-white/[0.03] p-5">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-2xl"
          style={{ background: `${experience.color.hex}1a`, boxShadow: `0 0 28px ${experience.color.hex}26` }}
          aria-hidden="true"
        >
          🌱
        </span>
        <p className="leading-relaxed text-ink/90">{experience.growth}</p>
      </div>
    </DetailSection>
  )
}