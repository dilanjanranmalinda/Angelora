import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SideRailAds from '@/components/advertising/SideRailAds'
import CookieConsent from '@/components/CookieConsent'
import { useLocalProfile } from '@/hooks/useLocalProfile'
import { getConsent, loadAnalytics } from '@/utils/consent'
import Home from '@/pages/Home'

const About = lazy(() => import('@/pages/About'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const Terms = lazy(() => import('@/pages/Terms'))
const Contact = lazy(() => import('@/pages/Contact'))
const NumbersList = lazy(() => import('@/pages/NumbersList'))
const NumberDetail = lazy(() => import('@/pages/NumberDetail'))
const MomentsList = lazy(() => import('@/pages/MomentsList'))
const MomentDetail = lazy(() => import('@/pages/MomentDetail'))
const ColorsList = lazy(() => import('@/pages/ColorsList'))
const ColorDetail = lazy(() => import('@/pages/ColorDetail'))
const AffirmationsPage = lazy(() => import('@/pages/AffirmationsPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function PageFallback() {
  return (
    <div className="grid min-h-[50vh] place-items-center">
      <div className="flex flex-col items-center gap-3">
        <span className="grid h-12 w-12 animate-pulse place-items-center rounded-2xl bg-gradient-to-br from-accent-deep to-accent-soft shadow-glow">
          ✨
        </span>
        <p className="text-sm text-mute">Reading the page...</p>
      </div>
    </div>
  )
}

export default function App() {
  const { clearData, clearConsentChoice } = useLocalProfile()

  useEffect(() => {
    if (getConsent() === 'accepted') loadAnalytics()
  }, [])

  const handleClearAllData = () => {
    clearData()
    clearConsentChoice()
  }

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <div className="cosmic-bg flex min-h-screen flex-col">
          <Navbar />
          <SideRailAds />
          <CookieConsent />
          <div className="flex-1">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/numbers" element={<NumbersList />} />
                <Route path="/numbers/:number" element={<NumberDetail />} />
                <Route path="/moments" element={<MomentsList />} />
                <Route path="/moments/:time" element={<MomentDetail />} />
                <Route path="/colors" element={<ColorsList />} />
                <Route path="/colors/:name" element={<ColorDetail />} />
                <Route path="/affirmations" element={<AffirmationsPage />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </div>
          <Footer onClearData={handleClearAllData} />
        </div>
      </BrowserRouter>
    </MotionConfig>
  )
}