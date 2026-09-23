import { useMemo } from 'react'

interface Star {
  id: number
  top: number
  left: number
  size: number
  delay: number
  duration: number
  opacity: number
}

interface Particle {
  id: number
  top: number
  left: number
  size: number
  duration: number
  delay: number
}

/**
 * Subtle, performant cosmic backdrop. Stars are static CSS-animated dots;
 * floating particles drift slowly. Everything respects prefers-reduced-motion
 * via the global CSS media query.
 */
export default function CosmicBackground() {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 3,
        opacity: Math.random() * 0.5 + 0.25,
      })),
    [],
  )

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        top: Math.random() * 90 + 5,
        left: Math.random() * 100,
        size: Math.random() * 14 + 6,
        duration: Math.random() * 14 + 12,
        delay: Math.random() * 8,
      })),
    [],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background:
              'radial-gradient(circle, rgba(245,214,255,0.35), rgba(184,161,255,0.08) 60%, transparent 70%)',
            filter: 'blur(1px)',
            animation: `floatY ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(700px 420px at 85% 0%, rgba(184,161,255,0.16), transparent 60%), radial-gradient(600px 380px at 0% 45%, rgba(232,199,122,0.08), transparent 55%)',
        }}
      />
    </div>
  )
}