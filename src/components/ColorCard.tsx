import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function ColorCard({ experience }: { experience: DailyExperience }) {
  const c = experience.color

  return (
    <DetailSection
      id="section-color"
      index="02"
      icon="🎨"
      title={`Your Daily Color — ${c.name}`}
      accent={c.hex}
      experience={experience}
      intro="Your daily color is drawn deterministically from your birthday and today's date."
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-8">
        <div
          className="grid h-32 w-32 shrink-0 place-items-center rounded-3xl"
          style={{ background: c.hex, boxShadow: `0 0 54px ${c.hex}55` }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-night/80">
            {c.name}
          </span>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Symbolic meaning</p>
            <p className="mt-1 leading-relaxed text-mute">{c.symbolicMeaning}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-soft">Mood</p>
            <p className="mt-1 text-ink/90">{c.mood}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint">Pairs well with</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {c.secondaryColors.map((color) => (
                <span key={color} className="rounded-full border border-white/10 px-3 py-1 text-sm text-ink/80">
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-white/[0.03] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Style note</p>
        <p className="mt-1.5 text-sm leading-relaxed text-mute">{c.styleDescription}</p>
      </div>
    </DetailSection>
  )
}