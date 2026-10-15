import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, Clock, Sparkles } from 'lucide-react'
import { BLOG_POSTS_BY_SLUG, relatedPosts, type BlogSection } from '@/data/blog'
import { blogMeta } from '@/seo/routeMeta'
import {
  applySeoMeta,
  applyBlogPostingStructuredData,
  applyBreadcrumbStructuredData,
} from '@/utils/seo'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function Section({ section }: { section: BlogSection }) {
  switch (section.type) {
    case 'h2':
      return (
        <h2 className="mt-10 text-xl font-bold text-ink sm:text-2xl">{section.text}</h2>
      )
    case 'h3':
      return <h3 className="mt-8 text-lg font-bold text-ink sm:text-xl">{section.text}</h3>
    case 'p':
      return <p className="mt-4 leading-relaxed text-mute">{section.text}</p>
    case 'ul':
      return (
        <ul className="mt-4 space-y-2 pl-1">
          {section.items?.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-mute">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="mt-6 border-l-2 border-accent/50 pl-5 font-display text-lg italic leading-relaxed text-ink">
          {section.text}
        </blockquote>
      )
    case 'callout':
      return (
        <aside className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
          <p className="leading-relaxed text-ink">{section.text}</p>
        </aside>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug = '' } = useParams<{ slug: string }>()
  const post = BLOG_POSTS_BY_SLUG[slug]
  const path = `/blog/${slug}`

  useEffect(() => {
    if (!post) return
    applySeoMeta({ ...blogMeta(post), path, ogType: 'article' })
    applyBlogPostingStructuredData({
      title: post.title,
      description: post.description,
      date: post.date,
      updated: post.updated,
      author: post.author,
      path,
      category: post.category,
    })
    applyBreadcrumbStructuredData([
      { name: 'Home', path: '/' },
      { name: 'Guides', path: '/blog' },
      { name: post.title, path },
    ])
  }, [post, path])

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const related = relatedPosts(post.slug)

  return (
    <div className="cosmic-bg">
      <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-mute transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} /> All guides
        </Link>

        <article className="mt-6">
          <header className="border-b border-white/5 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
              {post.category}
            </span>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-mute">{post.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-mute/80">
              <span>{post.author}</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={13} /> {formatDate(post.updated ?? post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} /> {post.readingMinutes} min read
              </span>
            </div>
          </header>

          <div className="mt-2">
            {post.sections.map((section, index) => (
              <Section key={`${section.type}-${index}`} section={section} />
            ))}
          </div>

          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-mute"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <aside className="panel mt-10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-deep to-accent-soft">
                <Sparkles size={18} className="text-night" strokeWidth={2.25} />
              </span>
              <div>
                <p className="font-semibold text-ink">{post.author}</p>
                <p className="mt-1 text-sm leading-relaxed text-mute">
                  Written and reviewed by the Angelora editorial team. We research
                  numerology, mirror-time and color traditions, then frame everything
                  honestly as entertainment and personal reflection.
                </p>
              </div>
            </div>
          </aside>

          <p className="mt-6 text-xs leading-relaxed text-mute/70">
            This article is provided for entertainment and reflection and is not
            scientific advice. Symbols can inspire, but they never decide. You are
            the best expert on your own life.
          </p>
        </article>

        {related.length > 0 && (
          <section aria-label="Related articles" className="mt-14">
            <h2 className="text-lg font-bold text-ink">Keep reading</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="panel card-hover rounded-2xl p-5"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-soft">
                    {item.category}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold leading-snug text-ink">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="panel mt-12 flex flex-col items-center gap-3 rounded-3xl p-8 text-center">
          <p className="text-2xl" aria-hidden="true">
            ✨
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">
            Discover your own daily signs
          </h2>
          <p className="max-w-md text-sm text-mute">
            Enter your birthday to see your personal number, daily color, mirror
            moment and message — a small reflection for today.
          </p>
          <Link
            to="/"
            className="mt-1 rounded-full bg-gradient-to-r from-accent-deep to-accent px-5 py-2.5 text-sm font-semibold text-night"
          >
            Try it now
          </Link>
        </div>
      </main>
    </div>
  )
}
