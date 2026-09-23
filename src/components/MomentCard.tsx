import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function MomentCard({ experience }: { experience: DailyExperience }) {
  const m = experience.moment

  return (
    <DetailSection
      id="section-moment"
      index="03"
      icon="⏰"
      title={`Your Moment — ${m.display}`}
      accent={experience.color.hex}
      experience={experience}
      intro="Mirror times are those repeating clock patterns people tend to notice. Your daily moment is picked from your birthday and today's date."
    >
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
        <div
          className="rounded-3xl px-8 py-6 text-5xl font-extrabold tracking-wider text-night"
          style={{ background: experience.color.hex, boxShadow: `0 0 48px ${experience.color.hex}44` }}
        >
          {m.display}
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{m.title}</p>
            <p className="mt-1.5 leading-relaxed text-mute">{m.symbolicMeaning}</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-4">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">
              A gentle reflection
            </p>
            <p className="text-sm leading-relaxed text-ink/90">{m.reflectionPrompt}</p>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-mute/70">
        Seeing a mirror time is a harmless, human pattern-recognition habit. Remembering a repeating
        clock moment is simply a nice pause in the day — not a message about the future.
      </p>
    </DetailSection>
  )
}