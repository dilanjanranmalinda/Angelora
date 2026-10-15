import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import Contact from '@/pages/Contact'
import NumbersList from '@/pages/NumbersList'
import NumberDetail from '@/pages/NumberDetail'
import MomentsList from '@/pages/MomentsList'
import MomentDetail from '@/pages/MomentDetail'
import ColorsList from '@/pages/ColorsList'
import ColorDetail from '@/pages/ColorDetail'
import AffirmationsPage from '@/pages/AffirmationsPage'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'

/**
 * Single source of truth for the app's routes. Shared by the client
 * (`App.tsx`) and the static-site prerenderer (`entry-server.tsx`) so the
 * generated HTML and the hydrated SPA can never drift apart.
 */
export default function AppRoutes() {
  return (
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
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
