import type { ReactNode } from 'react'

interface IndexPageProps {
  title: string
  intro: string
  children: ReactNode
}

export default function IndexPage({ title, intro, children }: IndexPageProps) {
  return (
    <div className="cosmic-bg">
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold text-ink sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            {intro}
          </p>
        </header>
        {children}
      </main>
    </div>
  )
}