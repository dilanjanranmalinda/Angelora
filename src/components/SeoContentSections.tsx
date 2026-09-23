import { motion } from 'framer-motion'

const SECTIONS = [
  {
    emoji: '🔢',
    title: 'What Is a Personal Number?',
    paragraphs: [
      'A personal number is a single digit derived from your birthday — a concept used widely in numerology traditions. Every digit of your birth date is added together and reduced until one digit remains, with master numbers such as 11, 22 and 33 kept intact.',
      'Traditionally, this number is thought to symbolise recurring themes, strengths and tendencies in a person\u2019s life. Angelora uses it as a starting point for a personalized daily reflection — a lens, not a label.',
    ],
  },
  {
    emoji: '⏰',
    title: 'What Does 11:11 Symbolize?',
    paragraphs: [
      '11:11 is the most recognized mirror time — the repeating clock pattern that seems to appear right when you glance at a clock. In popular spiritual tradition, seeing 11:11 is often read as a gentle invitation to pause, breathe and set a small intention.',
      'Whether you feel it as coincidence, a habit of noticing, or a meaningful moment, 11:11 is a useful excuse to slow down for a second. Here it is one of many moments we explore — not the whole story.',
    ],
  },
  {
    emoji: '🪞',
    title: 'What Are Mirror Times?',
    paragraphs: [
      'Mirror times are clock readings with repeating or mirrored digits, such as 01:01, 11:11, 12:12 and 22:22. Across many cultures, people have attached gentle symbolic meanings to each one.',
      'Our readings are original, everyday interpretations offered for entertainment and reflection. If a mirror time catches your eye today, it is simply a nice prompt to consider how you are spending the moment.',
    ],
  },
  {
    emoji: '💭',
    title: 'Why Do People Find Meaning in Repeating Numbers?',
    paragraphs: [
      'Human brains are excellent at spotting patterns — it is how we learned to read the sky, the seasons and each other. Repeating numbers stand out precisely because they are easy to notice, and once noticed, they feel significant.',
      'That tendency is completely natural and harmless. Giving a repeating number a symbolic meaning can be a comforting ritual, which is exactly why this platform treats them as inspiration rather than fact.',
    ],
  },
  {
    emoji: '🌸',
    title: 'Daily Inspiration — A Little Something for Every Day',
    paragraphs: [
      'Angelora exists to give you one beautiful, personalized moment each day: a number, a color, a clock time, a gentle energy, a focus and a short message — all chosen deterministically from your birthday and today\u2019s date.',
      'No sign-up, no hidden promises, no fortune-telling. Just a quiet invitation to reflect on your day and, when it helps, to share it with someone else.',
    ],
  },
]

export default function SeoContentSections() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6" aria-label="Learn more">
      <div className="space-y-8">
        {SECTIONS.map((section, i) => (
          <motion.article
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.03 }}
            className="panel rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-xl font-bold text-ink sm:text-2xl">
              <span className="mr-2" aria-hidden="true">
                {section.emoji}
              </span>
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-3 leading-relaxed text-mute">
                {paragraph}
              </p>
            ))}
          </motion.article>
        ))}
      </div>
    </section>
  )
}