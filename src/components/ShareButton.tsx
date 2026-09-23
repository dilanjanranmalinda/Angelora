import { Suspense, lazy, useState } from 'react'
import { Share2 } from 'lucide-react'
import type { DailyExperience } from '@/types/daily'
import { cn } from '@/utils/cn'

const ShareModal = lazy(() => import('@/components/ShareModal'))

interface ShareButtonProps {
  experience: DailyExperience
  variant?: 'primary' | 'ghost'
  className?: string
}

export default function ShareButton({ experience, variant = 'primary', className }: ShareButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          variant === 'primary'
            ? 'inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-soft px-6 text-base font-bold text-night shadow-glow transition-transform hover:-translate-y-0.5'
            : 'inline-flex items-center gap-1.5 text-sm font-medium text-mute transition-colors hover:text-ink',
          className,
        )}
        aria-haspopup="dialog"
      >
        <Share2 size={18} strokeWidth={2.4} />
        Share My Day
      </button>
      <Suspense fallback={null}>
        {open && (
          <ShareModal experience={experience} open={open} onClose={() => setOpen(false)} />
        )}
      </Suspense>
    </>
  )
}