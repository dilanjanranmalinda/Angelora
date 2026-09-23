import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function LoveCard({ experience }: { experience: DailyExperience }) {
  return (
    <DetailSection
      id="section-love"
      index="08"
      icon="❤️"
      title="Love"
      accent={experience.color.hex}
      experience={experience}
      intro="A reflective thought about connection for today — symbolic reflection, never a prediction."
    >
      <div className="flex items-start gap-4 rounded-2xl bg-white/[0.03] p-5">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-2xl"
          style={{ background: `${experience.color.hex}1a`, boxShadow: `0 0 28px ${experience.color.hex}26` }}
          aria-hidden="true"
        >
          ❤️
        </span>
        <p className="leading-relaxed text-ink/90">{experience.love}</p>
      </div>
    </DetailSection>
  )
}