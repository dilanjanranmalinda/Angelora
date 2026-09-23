import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { applySeoMeta } from '@/utils/seo'

interface NumberPageShellProps {
  title: string
  description: string
  path: string
  backTo: string
  backLabel?: string
  children: ReactNode
}

/** Layout for number / mirror-time / color detail pages. */
export default function DetailPageShell({
  title,
  description,
  path,
  backTo,
  backLabel,
  children,
}: NumberPageShellProps) {
  useEffect(() => {
    applySeoMeta({ title, description, path })
  }, [title, description, path])

  return (
    <div className="cosmic-bg">
      <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-mute transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} /> {backLabel ?? 'Back'}
        </Link>
        {children}
      </main>
    </div>
  )
}