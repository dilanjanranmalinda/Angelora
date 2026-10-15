import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface AppShellProps {
  children: ReactNode
  onClearData?: () => void
}

/**
 * Shared page chrome (navigation + footer). Used by both the live client app
 * and the prerenderer so static HTML includes real navigation and internal links.
 */
export default function AppShell({ children, onClearData }: AppShellProps) {
  return (
    <div className="cosmic-bg flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer onClearData={onClearData} />
    </div>
  )
}
