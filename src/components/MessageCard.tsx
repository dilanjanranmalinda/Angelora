import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function MessageCard({ experience }: { experience: DailyExperience }) {
  return (
    <DetailSection
      id="section-message"
      index="07"
      icon="💌"
      title="Your Daily Message"
      accent={experience.color.hex}
      experience={experience}
      intro="A short, human message selected for your day. Keep it, pass it on, or sit with it over a cup of something warm."
    >
      <div
        className="relative overflow-hidden rounded-3xl p-8 text-center sm:p-12"
        style={{
          background: `linear-gradient(200deg, ${experience.color.hex}22, transparent 60%), var(--color-night-2)`,
          border: '1px solid rgba(248,247,255,0.1)',
        }}
      >
        <span className="absolute left-6 top-4 font-display text-6xl text-accent/30" aria-hidden="true">
          &ldquo;
        </span>
        <p className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-ink sm:text-3xl">
          {experience.message}
        </p>
        <span
          className="absolute bottom-0 right-6 font-display text-6xl text-accent/30"
          aria-hidden="true"
        >
          &rdquo;
        </span>
      </div>
    </DetailSection>
  )
}