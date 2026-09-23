import type { DailyExperience, ShareFormat } from '@/types/daily'

interface ShareCardProps {
  experience: DailyExperience
  format: ShareFormat
}

const PALETTE = {
  night: '#080A18',
  panel: '#10152B',
  ink: '#F8F7FF',
  mute: '#A7AAC4',
  accent: '#B8A1FF',
  gold: '#E8C77A',
}

function Row({
  icon,
  label,
  value,
}: {
  icon: string
  label: string
  value: string
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 28,
        width: '100%',
        padding: '22px 40px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(248,247,255,0.1)',
        borderRadius: 24,
      }}
    >
      <span style={{ fontSize: 52, lineHeight: 1 }}>{icon}</span>
      <div>
        <p
          style={{
            margin: 0,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: PALETTE.mute,
            fontWeight: 700,
          }}
        >
          {label}
        </p>
        <p
          style={{
            margin: '6px 0 0',
            fontSize: 46,
            fontWeight: 800,
            color: PALETTE.ink,
            lineHeight: 1.1,
            textTransform: 'uppercase',
          }}
        >
          {value}
        </p>
      </div>
    </div>
  )
}

/**
 * Professional share card rendered at native 1080x1920 (story) or
 * 1080x1080 (post). Used both for the preview inside the share modal and for
 * image download via html2canvas. Plain CSS only — no motion transforms —
 * so capture stays crisp.
 */
export default function ShareCard({ experience, format }: ShareCardProps) {
  const isStory = format === 'story'
  const width = isStory ? 1080 : 1080
  const height = isStory ? 1920 : 1080
  const c = experience.color

  const stars = Array.from({ length: 26 }, (_, i) => i).map((i) => ({
    left: (i * 137) % 100,
    top: ((i * 61) % 100),
    size: (i % 3) + 1,
    delay: (i % 8) * 0.3,
  }))

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        background:
          'linear-gradient(180deg, #080A18 0%, #10152B 55%, #0B0E1F 100%)',
        color: PALETTE.ink,
        fontFamily:
          '"Inter", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(620px 420px at 50% -6%, ${c.hex}38, transparent 62%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(480px 380px at 50% 108%, ${c.hex}2e, transparent 60%)`,
        }}
      />
      {stars.map((s, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            borderRadius: 99,
            background: PALETTE.ink,
            opacity: 0.4,
          }}
        />
      ))}

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: isStory ? '90px 70px 70px' : '56px 70px 48px',
          flex: 1,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 30,
            letterSpacing: 14,
            textTransform: 'uppercase',
            color: PALETTE.accent,
            fontWeight: 800,
          }}
        >
          ✨ Your Day ✨
        </p>

        <p
          style={{
            margin: isStory ? '44px 0 0' : '30px 0 0',
            fontSize: isStory ? 84 : 72,
            fontWeight: 800,
            letterSpacing: isStory ? 10 : 8,
            lineHeight: 1,
            textTransform: 'uppercase',
            color: PALETTE.ink,
          }}
        >
          {experience.name?.toUpperCase() ?? 'Your Day'}
        </p>

        <p
          style={{
            margin: '18px 0 0',
            fontSize: 26,
            letterSpacing: 4,
            color: PALETTE.mute,
            textTransform: 'uppercase',
          }}
        >
          {experience.date}
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isStory ? 22 : 16,
            width: '100%',
            marginTop: isStory ? 56 : 40,
          }}
        >
          <Row icon="🔢" label="Personal Number" value={String(experience.personalNumber.value)} />
          <Row icon="🎨" label="Today's Color" value={c.name} />
          <Row icon="⏰" label="Your Moment" value={experience.moment.display} />
          <Row icon="💗" label="Today's Energy" value={experience.energy.title} />
        </div>

        <blockquote
          style={{
            margin: `${isStory ? 52 : 38}px 0 0`,
            fontFamily: '"Playfair Display", Georgia, serif',
            fontStyle: 'italic',
            fontSize: isStory ? 46 : 40,
            lineHeight: 1.45,
            color: PALETTE.ink,
            maxWidth: 880,
          }}
        >
          &ldquo;{experience.message}&rdquo;
        </blockquote>

        <div style={{ marginTop: 'auto', paddingTop: isStory ? 60 : 40 }}>
          <p
            style={{
              margin: 0,
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 42,
              fontStyle: 'italic',
              color: PALETTE.gold,
            }}
          >
            Angelora
          </p>
          <p
            style={{
              margin: '12px 0 0',
              fontSize: 22,
              letterSpacing: 3,
              color: PALETTE.mute,
              textTransform: 'uppercase',
            }}
          >
            Your day. Your signs. Your moment.
          </p>
        </div>
      </div>
    </div>
  )
}