import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarDays, Clock } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blog'
import { STATIC_META } from '@/seo/routeMeta'
import { applySeoMeta } from '@/utils/seo'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Blog() {
  useEffect(() => {
    applySeoMeta({ ...STATIC_META['/blog'], path: '/blog' })
  }, [])

  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="cosmic-bg">
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <header className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
            Guides &amp; Journal
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-ink sm:text-5xl">
            Thoughtful writing on numbers, colors &amp; daily rituals
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            Original, honest guides to numerology, mirror times, angel numbers and
            color symbolism. Everything is framed as inspiration and reflection —
            never as science or prediction.
          </p>
        </header>

        <section aria-label="Articles" className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="panel flex h-full flex-col rounded-2xl p-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
                {post.category}
              </span>
              <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
                <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-accent-soft">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-mute/80">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={13} /> {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} /> {post.readingMinutes} min read
                </span>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
              >
                Read the guide →
              </Link>
            </motion.article>
          ))}
        </section>
      </main>
    </div>
  )
}
