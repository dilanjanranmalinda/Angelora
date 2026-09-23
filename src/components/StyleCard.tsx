import type { DailyExperience } from '@/types/daily'
import DetailSection from '@/components/DetailSection'

export default function StyleCard({ experience }: { experience: DailyExperience }) {
  const s = experience.style

  return (
    <DetailSection
      id="section-style"
      index="06"
      icon="👗"
      title={`Today's Style — ${s.title}`}
      accent={experience.color.hex}
      experience={experience}
      intro="Everyday style inspiration built around your daily color. Wear it loosely — comfort always comes first."
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mute">Suggested palette</p>
          <div className="flex flex-wrap gap-3">
            {s.palette.map((colorName) => {
              const known: Record<string, string> = {
                Lavender: '#B8A1FF',
                White: '#F8F7FF',
                Silver: '#C9CDE0',
                Ivory: '#F3EEDD',
                Beige: '#D9C9A8',
                'Soft Grey': '#9AA0B8',
                Rose: '#F5A8C0',
                'Dusty Pink': '#D9A0B8',
                Peach: '#F8C8A8',
                Cream: '#F7EDDA',
                'Sky Blue': '#8EC0F7',
                Navy: '#3B4A7A',
                'Sage Green': '#A8C9A7',
                'Warm Brown': '#8A6A53',
                Gold: '#E8C77A',
                Charcoal: '#2B2F45',
                Coral: '#FF8FA3',
                'Midnight Blue': '#3B4A7A',
              }
              return (
                <div key={colorName} className="flex items-center gap-2">
                  <span
                    className="inline-block h-8 w-8 rounded-full border border-white/20"
                    style={{ background: known[colorName] ?? experience.color.hex }}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-ink/90">{colorName}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Category</p>
          <p className="mt-1 text-lg font-semibold text-ink">{s.category}</p>
        </div>
      </div>
      <p className="mt-6 max-w-2xl leading-relaxed text-mute">{s.description}</p>
    </DetailSection>
  )
}