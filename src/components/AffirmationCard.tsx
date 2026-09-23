import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function AffirmationCard({ experience }: { experience: DailyExperience }) {
  return (
    <DetailSection
      id="section-affirmation"
      index="11"
      icon="✨"
      title="Today's Affirmation"
      accent={experience.color.hex}
      experience={experience}
      intro="A short sentence to carry with you. Repeat it in the mirror, in your head, or wherever you need it."
    >
      <div
        className="relative flex flex-col items-center gap-3 overflow-hidden rounded-3xl p-8 text-center sm:p-10"
        style={{
          background: `linear-gradient(180deg, ${experience.color.hex}1c, transparent 70%), var(--color-night-2)`,
          border: '1px solid rgba(248,247,255,0.1)',
        }}
      >
        <span className="text-3xl" aria-hidden="true">
          ✨
        </span>
        <p className="mx-auto max-w-xl font-display text-2xl font-medium leading-relaxed text-ink sm:text-3xl">
          &ldquo;{experience.affirmation}&rdquo;
        </p>
        <p className="text-xs uppercase tracking-[0.22em] text-mute">Today's affirmation</p>
      </div>
    </DetailSection>
  )
}