import type { ReactNode } from 'react'

interface StaticPageProps {
  title: string
  intro?: string
  children: ReactNode
}

/** Simple, semantic shell for informational pages (about, privacy, terms...). */
export default function StaticPage({ title, intro, children }: StaticPageProps) {
  return (
    <div className="cosmic-bg">
      <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <article>
          <header className="mb-10 border-b border-white/5 pb-8 text-center">
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
            {intro && <p className="mx-auto mt-4 max-w-2xl text-lg text-mute">{intro}</p>}
          </header>
          <div className="prose-custom space-y-6">{children}</div>
        </article>
      </main>
    </div>
  )
}

export function ProseHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-bold text-ink sm:text-2xl">{children}</h2>
}

export function ProseText({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-mute">{children}</p>
}