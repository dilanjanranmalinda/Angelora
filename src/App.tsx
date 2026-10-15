import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import AppShell from '@/AppShell'
import AppRoutes from '@/routes'
import SideRailAds from '@/components/advertising/SideRailAds'
import CookieConsent from '@/components/CookieConsent'
import { useLocalProfile } from '@/hooks/useLocalProfile'
import { getConsent, loadAnalytics, loadAdsense } from '@/utils/consent'
import { Analytics } from '@vercel/analytics/react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const { clearData, clearConsentChoice } = useLocalProfile()

  useEffect(() => {
    if (getConsent() === 'accepted') {
      loadAnalytics()
      loadAdsense()
    }
  }, [])

  const handleClearAllData = () => {
    clearData()
    clearConsentChoice()
  }

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <SideRailAds />
        <CookieConsent />
        <AppShell onClearData={handleClearAllData}>
          <AppRoutes />
        </AppShell>
        <Analytics />
      </BrowserRouter>
    </MotionConfig>
  )
}
