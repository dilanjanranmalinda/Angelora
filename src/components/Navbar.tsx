import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import { SITE_CONFIG } from '@/config'

const NAV_LINKS = [
  { to: '/', label: 'Your Day', end: true },
  { to: '/numbers', label: 'Numbers' },
  { to: '/moments', label: 'Moments' },
  { to: '/colors', label: 'Colors' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-night/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-4 sm:px-6"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={closeMenu}
          aria-label={`${SITE_CONFIG.brand} home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-deep to-accent-soft shadow-glow">
            <Sparkles size={18} className="text-night" strokeWidth={2.25} />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide text-ink">
            {SITE_CONFIG.brand}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-accent-soft' : 'text-mute hover:text-ink',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/"
            className="rounded-full bg-gradient-to-r from-accent-deep to-accent px-4 py-2 text-sm font-semibold text-night transition-transform hover:-translate-y-0.5"
          >
            ✨ Discover My Day
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-white/5 bg-night/95 px-4 pb-6 pt-3 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2.5 text-sm font-medium',
                    isActive || location.pathname === link.to
                      ? 'bg-white/5 text-accent-soft'
                      : 'text-mute hover:text-ink',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-gradient-to-r from-accent-deep to-accent px-4 py-2.5 text-center text-sm font-semibold text-night"
            >
              ✨ Discover My Day
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}