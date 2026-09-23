import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Download,
  Link2,
  Share2,
  Copy,
  Check,
  MonitorSmartphone,
  Square,
} from 'lucide-react'
import type { DailyExperience, ShareFormat } from '@/types/daily'
import ShareCard from '@/components/ShareCard'
import { cn } from '@/utils/cn'
import {
  buildShareText,
  buildShareUrl,
  canUseWebShare,
  copyTextToClipboard,
  shareViaWebShare,
} from '@/utils/shareUtils'

interface ShareModalProps {
  experience: DailyExperience
  open: boolean
  onClose: () => void
}

const FORMATS: { value: ShareFormat; label: string; hint: string }[] = [
  { value: 'story', label: 'Story', hint: '1080 × 1920' },
  { value: 'post', label: 'Post', hint: '1080 × 1080' },
]

export default function ShareModal({ experience, open, onClose }: ShareModalProps) {
  const [format, setFormat] = useState<ShareFormat>('story')
  const [downloading, setDownloading] = useState(false)
  const [copied, setCopied] = useState<'text' | 'link' | null>(null)
  const captureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const isStory = format === 'story'
  const captureW = 1080
  const captureH = isStory ? 1920 : 1080

  const previewW = isStory ? 340 : 360
  const scale = previewW / captureW

  const handleDownload = useCallback(async () => {
    const node = captureRef.current
    if (!node || downloading) return
    setDownloading(true)
    try {
      const { default: html2canvas } = await import('html2canvas')
      const canvas = await html2canvas(node, {
        scale: 1,
        useCORS: true,
        backgroundColor: '#080A18',
        width: captureW,
        height: captureH,
        windowWidth: captureW,
        windowHeight: captureH,
        scrollX: 0,
        scrollY: 0,
      })
      const link = document.createElement('a')
      link.download = `angelora-your-day-${format}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Share card render failed', error)
    } finally {
      setDownloading(false)
    }
  }, [downloading, format, captureW, captureH])

  const handleCopyText = useCallback(async () => {
    const ok = await copyTextToClipboard(buildShareText(experience))
    if (ok) {
      setCopied('text')
      window.setTimeout(() => setCopied(null), 1800)
    }
  }, [experience])

  const handleCopyLink = useCallback(async () => {
    const ok = await copyTextToClipboard(buildShareUrl())
    if (ok) {
      setCopied('link')
      window.setTimeout(() => setCopied(null), 1800)
    }
  }, [])

  const handleNativeShare = useCallback(() => {
    void shareViaWebShare(experience).catch(() => undefined)
  }, [experience])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-night/85 p-4 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Share your day"
        >
          {/* Off-screen native-size capture node */}
          <div
            ref={captureRef}
            aria-hidden="true"
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              zIndex: -1,
              width: captureW,
            }}
          >
            <ShareCard experience={experience} format={format} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="panel w-full max-w-md rounded-3xl p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-ink">Share your day ✨</h3>
                <p className="text-sm text-mute">A beautiful card, ready to post.</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-lg text-mute hover:bg-white/5 hover:text-ink"
                aria-label="Close share dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-1 rounded-xl bg-white/[0.04] p-1" role="tablist">
              {FORMATS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  role="tab"
                  aria-selected={format === f.value}
                  onClick={() => setFormat(f.value)}
                  className={cn(
                    'flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                    format === f.value
                      ? 'bg-gradient-to-r from-accent-deep to-accent text-night'
                      : 'text-mute hover:text-ink',
                  )}
                >
                  {f.value === 'story' ? (
                    <MonitorSmartphone size={16} />
                  ) : (
                    <Square size={16} />
                  )}
                  {f.label}
                  <span className={cn('text-xs', format === f.value ? 'opacity-80' : 'opacity-60')}>
                    {f.hint}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-center rounded-2xl bg-night/60 py-5">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ width: previewW, height: previewW * (isStory ? 16 / 9 : 1) }}
              >
                <div
                  style={{
                    width: captureW,
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                  }}
                >
                  <ShareCard experience={experience} format={format} />
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-soft text-base font-bold text-night transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                <Download size={18} strokeWidth={2.5} />
                {downloading ? 'Creating image...' : 'Download Image'}
              </button>

              <div className="grid grid-cols-3 gap-2">
                {canUseWebShare() && (
                  <button
                    type="button"
                    onClick={handleNativeShare}
                    className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-ink hover:border-accent/40"
                  >
                    <Share2 size={16} /> Share
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-ink hover:border-accent/40"
                >
                  {copied === 'text' ? (
                    <Check size={16} className="text-mint" />
                  ) : (
                    <Copy size={16} />
                  )}
                  Copy Text
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-ink hover:border-accent/40"
                >
                  {copied === 'link' ? (
                    <Check size={16} className="text-mint" />
                  ) : (
                    <Link2 size={16} />
                  )}
                  Copy Link
                </button>
              </div>
            </div>

            <p className="mt-4 text-center text-xs leading-relaxed text-mute/80">
              Share the image, or copy your day as text. Your friends can discover
              their own with just a birthday. ✨
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}