import { Link } from 'react-router-dom'
import { Sparkles, Trash2 } from 'lucide-react'
import { SITE_CONFIG } from '@/config'

interface FooterProps {
  onClearData?: () => void
}

export default function Footer({ onClearData }: FooterProps) {
  return (
    <footer className="mt-10 border-t border-white/5 bg-night-2/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-deep to-accent-soft shadow-glow">
                <Sparkles size={18} className="text-night" strokeWidth={2.25} />
              </span>
              <span className="font-display text-lg font-semibold text-ink">
                {SITE_CONFIG.brand}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-mute">{SITE_CONFIG.tagline}</p>
          </div>

          <nav aria-label="Explore">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Explore</h3>
            <ul className="mt-3 space-y-2">
              <li><Link className="text-sm text-mute hover:text-ink" to="/">Your Day</Link></li>
              <li><Link className="text-sm text-mute hover:text-ink" to="/numbers">Numbers</Link></li>
              <li><Link className="text-sm text-mute hover:text-ink" to="/moments">Moments</Link></li>
              <li><Link className="text-sm text-mute hover:text-ink" to="/colors">Colors</Link></li>
              <li><Link className="text-sm text-mute hover:text-ink" to="/affirmations">Affirmations</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Company</h3>
            <ul className="mt-3 space-y-2">
              <li><Link className="text-sm text-mute hover:text-ink" to="/about">About</Link></li>
              <li><Link className="text-sm text-mute hover:text-ink" to="/privacy">Privacy</Link></li>
              <li><Link className="text-sm text-mute hover:text-ink" to="/terms">Terms</Link></li>
              <li><Link className="text-sm text-mute hover:text-ink" to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Your data</h3>
            <ul className="mt-3 space-y-3">
              <li className="text-sm leading-relaxed text-mute">
                No account. Birthday and name live only in your browser.
              </li>
              <li>
                <button
                  type="button"
                  onClick={onClearData}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-mute transition-colors hover:border-coral/40 hover:text-coral"
                >
                  <Trash2 size={13} />
                  Clear My Data
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs leading-relaxed text-mute/70">
            {SITE_CONFIG.brand} provides numerology-inspired and spiritual content for
            entertainment and reflection. Not scientifically proven predictions.
          </p>
          <p className="mt-2 text-xs text-mute/60">
            © {new Date().getFullYear()} {SITE_CONFIG.brand}. Your day. Your signs. Your moment.
          </p>
        </div>
      </div>
    </footer>
  )
}