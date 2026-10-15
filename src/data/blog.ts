export type BlogSectionType = 'h2' | 'h3' | 'p' | 'ul' | 'quote' | 'callout'

export interface BlogSection {
  type: BlogSectionType
  text?: string
  items?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  excerpt: string
  date: string
  updated?: string
  author: string
  category: string
  tags: string[]
  readingMinutes: number
  sections: BlogSection[]
}

export const BLOG_AUTHOR = 'The Angelora Editors'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-does-11-11-mean',
    title: 'What Does 11:11 Mean? A Complete Guide to Mirror Times',
    description:
      'Seeing 11:11 on the clock is one of the most talked-about repeating-number moments. Here is where the idea came from, what it usually symbolizes, and how to make it genuinely useful.',
    excerpt:
      '11:11 is the most famous mirror time. But where did the idea come from, what does it actually mean, and is there a healthy way to use it?',
    date: '2026-01-12',
    author: BLOG_AUTHOR,
    category: 'Mirror Times',
    tags: ['11:11', 'mirror hours', 'repeating numbers', 'angel numbers'],
    readingMinutes: 8,
    sections: [
      {
        type: 'p',
        text: 'If you have ever glanced at your phone and caught 11:11 on the clock, you already know why people talk about it. The number stands out, it repeats, and it seems to show up at oddly meaningful moments. For a great many people it has become a small daily ritual: see the number, pause, and take a breath.',
      },
      {
        type: 'p',
        text: 'This guide looks at where the idea of mirror times comes from, what 11:11 is commonly said to symbolize, how other cultures and traditions treat repeating numbers, and — importantly — how to enjoy the practice without confusing it for science or prediction.',
      },
      { type: 'h2', text: 'What is a mirror time?' },
      {
        type: 'p',
        text: 'A mirror time (sometimes called a mirror hour or a repeating time) is a clock reading built from repeating or mirrored digits. Familiar examples include 01:01, 10:10, 11:11, 12:12, 22:22 and 23:23. The pattern is easy to notice precisely because the number is symmetrical, and anything symmetrical is easy for the human eye to latch onto.',
      },
      {
        type: 'p',
        text: 'Across the world, different traditions have attached their own gentle meanings to these repeating patterns. Some call them angel numbers, some call them mirror hours, and many simply treat them as a lucky coincidence. There is no single official meaning — the interpretation is cultural, personal, and meant to be taken lightly.',
      },
      { type: 'h2', text: 'Why 11:11 became the most famous of them all' },
      {
        type: 'p',
        text: 'Plenty of numbers repeat on a clock, but 11:11 carries a special weight because the digit itself has long been associated with intuition, insight, and beginnings. Because it appears once in the morning and once at night, it tends to be seen by people who are either starting their day or winding down — two moments when we are naturally reflective.',
      },
      {
        type: 'p',
        text: 'The rise of social media amplified the idea enormously. People began sharing their 11:11 sightings, wishes and intentions, and the number became a shared cultural shorthand for a moment of pause. That popularity is a good reminder that the meaning of 11:11 is largely something we, collectively, have chosen to give it.',
      },
      { type: 'h2', text: 'What people commonly say 11:11 means' },
      {
        type: 'p',
        text: 'In popular spiritual traditions, seeing 11:11 is often read as an invitation to slow down. The most common interpretations include:',
      },
      {
        type: 'ul',
        items: [
          'A pause to set a small, honest intention for the day.',
          'A nudge toward intuition — trusting a feeling you have been ignoring.',
          'A sign of alignment between what you want and what you are doing.',
          'A simple excuse to make a wish, the way people wish on a shooting star.',
          'A reminder to breathe and notice the present moment.',
        ],
      },
      {
        type: 'p',
        text: 'Notice how every one of these interpretations is about the person noticing the number, not about the number acting on the world. That framing matters. The most useful versions of the 11:11 tradition are the ones that return you gently to your own thoughts rather than handing your decisions to a clock.',
      },
      { type: 'h2', text: 'Repeating numbers in different traditions' },
      {
        type: 'p',
        text: 'Numerology, the study of numbers and their symbolic meanings, has a long history that stretches back through ancient Greece, early mathematics, and medieval mysticism. In many numerological systems, repeated digits are considered to carry a stronger version of the underlying number — so 11:11 combines the energy of the number one (beginnings, initiative) with the master number eleven (insight, intuition).',
      },
      {
        type: 'p',
        text: 'Other cultures treat repeating numbers differently. In some East Asian traditions the sound of certain numbers is linked to words for prosperity or longevity. In Western pop culture, patterns like 11:11 and 12:34 became playful moments rather than spiritual ones. All of these are examples of the same basic human instinct: we love patterns and we love giving them meaning.',
      },
      { type: 'h2', text: 'Is 11:11 a sign, or just coincidence?' },
      {
        type: 'p',
        text: 'Both can be true at once. Statistically, a clock shows 11:11 for a full minute twice a day, and people check their phones many times a day, so the number will appear regularly whether or not anything mystical is going on. Add to that a natural human bias toward remembering striking events and forgetting ordinary ones, and you have a very reliable recipe for noticing 11:11 more than other times.',
      },
      {
        type: 'callout',
        text: 'A useful way to think about it: 11:11 is not a message from the universe, and it is not meaningless either. It is a moment you have chosen to treat as meaningful — and choosing meaning is a very human, very healthy thing to do.',
      },
      { type: 'h2', text: 'How to use mirror times without losing perspective' },
      {
        type: 'p',
        text: 'The healthiest way to enjoy mirror times is as a tiny ritual for reflection, not as a source of instruction. If you see 11:11 and it makes you pause, use the moment to ask yourself a real question. Here are a few that tend to be more useful than a wish:',
      },
      {
        type: 'ul',
        items: [
          'What is one thing I genuinely want today?',
          'What have I been putting off, and what is the smallest first step?',
          'How am I actually feeling right now, underneath the busyness?',
          'Who could use a kind word from me this afternoon?',
        ],
      },
      {
        type: 'p',
        text: 'This is exactly the spirit in which Angelora treats mirror times. We offer original interpretations as inspiration and reflection — never as science, and never as a forecast of what will happen to you. You stay the expert on your own life.',
      },
      { type: 'h2', text: 'A quick summary' },
      {
        type: 'p',
        text: '11:11 is a mirror time — a repeating clock pattern that people the world over have chosen to find meaningful. It is most often associated with intuition, intention and pause. Whether you treat it as a lucky coincidence or a gentle spiritual nudge, its real value lies in what it makes you notice about your own day.',
      },
      {
        type: 'p',
        text: 'Curious about other repeating times? Explore the meaning of 12:12, 22:22, 01:01 and more in our mirror times library, or discover which moment belongs to your own day by entering your birthday on the homepage.',
      },
    ],
  },
  {
    slug: 'how-to-calculate-your-personal-number',
    title: 'How to Calculate Your Personal Number from Your Birthday',
    description:
      'A step-by-step walkthrough of the numerology method behind reducing a birth date to a single digit, including the master numbers 11, 22 and 33, with clear worked examples.',
    excerpt:
      'Your personal number comes from your birth date. Here is exactly how the reduction works, why master numbers are kept intact, and a few worked examples you can follow.',
    date: '2026-01-18',
    author: BLOG_AUTHOR,
    category: 'Numerology Basics',
    tags: ['personal number', 'life path number', 'numerology', 'birthday'],
    readingMinutes: 7,
    sections: [
      {
        type: 'p',
        text: 'Of all the ideas in numerology, the personal number — often called the life path number — is the most widely used. It is built from your birth date, it is easy to calculate by hand, and it is the starting point for almost every other reading. This guide walks through the method carefully, with examples, so you can work out your own number in a couple of minutes.',
      },
      { type: 'h2', text: 'What is a personal number?' },
      {
        type: 'p',
        text: 'A personal number is a single digit from 1 to 9 — or one of the master numbers 11, 22 or 33 — produced by reducing the digits of your birth date. In numerology traditions it is treated as a summary of the themes, strengths and tendencies associated with a person. In the Angelora app it also acts as the seed for your personalized daily experience.',
      },
      {
        type: 'p',
        text: 'It is worth saying plainly: a personal number is a symbolic framework, not a measurement. It does not describe you the way a blood test or a personality inventory might. It is a lens for reflection, and its value comes from what it gets you thinking about.',
      },
      { type: 'h2', text: 'The basic reduction method' },
      {
        type: 'p',
        text: 'The classic method has three steps. First, write out your birth date as digits. Second, add every digit together. Third, keep adding the digits of the result together until a single digit remains — unless you land on 11, 22 or 33, which are kept as they are.',
      },
      {
        type: 'p',
        text: 'That is the whole method. There is no multiplication, no weighting, and no special rules by country or gender. The elegance is part of the appeal: the number is fully determined by the date, so the same birthday always produces the same result.',
      },
      { type: 'h2', text: 'Example one: a straightforward reduction' },
      {
        type: 'p',
        text: 'Take the birth date 23 August 2002. Writing it out day-first gives 23, 08, 2002, which becomes the digit string 2, 3, 0, 8, 2, 0, 0, 2. Add them: 2 + 3 + 0 + 8 + 2 + 0 + 0 + 2 = 17. Now reduce again: 1 + 7 = 8. The personal number is 8.',
      },
      {
        type: 'callout',
        text: 'Tip: include the zeroes of a month like August (08) or a day like 09. They do not change the total, but writing them in keeps the digits tidy and mirrors how the calculation is usually shown.',
      },
      { type: 'h2', text: 'Example two: keeping a master number' },
      {
        type: 'p',
        text: 'Now take 29 November 1997. Day-first this is 29, 11, 1997, or digits 2, 9, 1, 1, 1, 9, 9, 7. Add them: 2 + 9 + 1 + 1 + 1 + 9 + 9 + 7 = 39. Reduce: 3 + 9 = 12, and 1 + 2 = 3. The personal number is 3.',
      },
      {
        type: 'p',
        text: 'Here is where the master numbers change things. Suppose the reduction lands on 11, 22 or 33 before it reaches a single digit. For example, a date that totals 22 is kept as 22 rather than being reduced to 4. Tradition treats 11, 22 and 33 as intensified versions of 2, 4 and 6, carrying additional meaning of their own.',
      },
      { type: 'h2', text: 'Why are 11, 22 and 33 special?' },
      {
        type: 'p',
        text: 'The master numbers are the most debated part of the method. In numerology they are considered to hold a kind of doubled potential — 11 associated with intuition and insight, 22 with building something lasting, and 33 with compassion and guidance. Many practitioners keep them intact; others reduce everything to a single digit for simplicity.',
      },
      {
        type: 'p',
        text: 'Angelora keeps the master numbers, because they give the reflection more texture. If your date reduces to 11, 22 or 33, you will see that number highlighted rather than folded away. Whichever approach you prefer, the important thing is to apply it consistently so that the same birthday always gives the same result.',
      },
      { type: 'h2', text: 'A note on different calculation styles' },
      {
        type: 'p',
        text: 'If you compare notes with other people, you may occasionally find they get a different number from the same birthday. That is normal, and it comes down to method rather than arithmetic. Some systems reduce the day, month and year separately before combining them, which can preserve a master number that the all-at-once method would flatten. Neither is "the" correct answer — they are simply different traditions.',
      },
      {
        type: 'p',
        text: 'For consistency, pick one method and stick with it. Angelora uses a single deterministic method so that the personal number, and everything derived from it, stays stable for a given birthday.',
      },
      { type: 'h2', text: 'How to use your personal number' },
      {
        type: 'p',
        text: 'Once you know your number, treat it as a prompt rather than a label. Read the traditional associations, notice which ones ring true and which do not, and let the rest go. A good reading should feel like a thoughtful question, not a verdict.',
      },
      {
        type: 'p',
        text: 'If you would like to see yours in context, enter your birthday on the homepage. Your personal number will appear alongside your daily color, mirror moment and message — a small, personalized reflection you can return to each day.',
      },
    ],
  },
  {
    slug: 'numerology-vs-science',
    title: 'Numerology vs. Science: What Numerology Can and Cannot Tell You',
    description:
      'Is numerology real? An honest look at the difference between symbolic tradition and evidence-based prediction, and how to enjoy one without confusing it for the other.',
    excerpt:
      'Numerology is a centuries-old symbolic tradition, not a predictive science. Here is an honest look at what it can offer — and what it cannot.',
    date: '2026-01-24',
    author: BLOG_AUTHOR,
    category: 'Perspectives',
    tags: ['numerology', 'skepticism', 'science', 'entertainment'],
    readingMinutes: 6,
    sections: [
      {
        type: 'p',
        text: 'Sooner or later every curious reader asks the same question: is numerology real? The most honest answer is that it depends entirely on what you mean by real. As a cultural tradition rich with symbolism, numerology is very real indeed. As a method for predicting events, it has no scientific standing. Both of those things can be true, and understanding the difference is what lets you enjoy numerology in a healthy way.',
      },
      { type: 'h2', text: 'What numerology actually is' },
      {
        type: 'p',
        text: 'Numerology is a set of traditions that assign symbolic meaning to numbers and use simple arithmetic on names and dates to produce those numbers. It has roots that wind back through early mathematics and mysticism, and it has been reinvented many times since. What all versions share is a belief that numbers can serve as a mirror for human experience.',
      },
      {
        type: 'p',
        text: 'That is a poetic proposition, not a scientific one. Numerological systems were not built to be tested, falsified, or used to make predictions you could check against reality. They were built to offer language for reflection — a way of talking about personality, purpose and change.',
      },
      { type: 'h2', text: 'What science would require of a predictive system' },
      {
        type: 'p',
        text: 'For a claim to be scientific, it generally needs to make specific predictions that could turn out to be wrong, and those predictions need to survive repeated testing by independent researchers. A useful test would be something like: do people with a given personal number actually share measurable traits at a rate better than chance?',
      },
      {
        type: 'p',
        text: 'When such claims have been tested, numerology has not performed better than chance. That is not a scandal — it simply reflects that numerology was never designed as a predictive instrument. Asking numerology to predict your future is a bit like asking a poem to forecast the weather: it can be beautiful and meaningful, but that is not what it is for.',
      },
      { type: 'h2', text: 'Why it still feels meaningful anyway' },
      {
        type: 'p',
        text: 'If numerology is not predictive, why do so many people find it genuinely useful? Psychology offers a few good reasons. The first is that all of us are meaning-making creatures; a symbol invites us to reflect, and reflection is where real insight often begins. The second is that simple, slightly ambiguous descriptions feel remarkably accurate — a well-documented effect that has nothing to do with the numbers and everything to do with how our minds work.',
      },
      {
        type: 'ul',
        items: [
          'Symbols give us a structured way to pause and think about our lives.',
          'A gentle prompt can surface a feeling or goal we had been ignoring.',
          'Rituals — even tiny ones — can create a helpful sense of calm and focus.',
          'Shared meanings connect us to other people and to tradition.',
        ],
      },
      {
        type: 'p',
        text: 'None of these benefits require numerology to be literally true. You can take the reflection and leave the prediction.',
      },
      {
        type: 'callout',
        text: 'At Angelora, every reading is framed as entertainment and personal reflection. We never claim that a number decides anything, and we do not offer predictions. Symbols can inspire. They cannot choose for you.',
      },
      { type: 'h2', text: 'How to keep a healthy relationship with numerology' },
      {
        type: 'p',
        text: 'The healthiest approach is to treat numerology the way you might treat a good question or a favourite song: something that helps you think and feel, without demanding authority over your decisions. A few practical habits help:',
      },
      {
        type: 'ul',
        items: [
          'Use readings as prompts for reflection, not as instructions to follow.',
          'Never make important life decisions — money, health, relationships — based on a number.',
          'Hold the symbolism loosely and let go of anything that does not resonate.',
          'Enjoy the tradition for what it is: a rich, human way of storytelling.',
        ],
      },
      { type: 'h2', text: 'The bottom line' },
      {
        type: 'p',
        text: 'Numerology is a symbolic tradition, not a science, and that is perfectly fine. Its value lies in reflection, ritual and meaning — the same territory as poetry, journaling or a moment of quiet attention. Approached honestly, it can add a small and pleasant ritual to your day without pretending to know your future.',
      },
      {
        type: 'p',
        text: 'You are always the best expert on your own life. Use the symbols, then trust yourself.',
      },
    ],
  },
  {
    slug: 'color-symbolism-meaning',
    title: 'Color Symbolism Explained: What Colors Might Mean to You',
    description:
      'From lavender to midnight blue, colors carry cultural and personal associations. Learn how color symbolism works and how to use it as gentle daily inspiration.',
    excerpt:
      'Colors carry cultural and personal associations. Here is how color symbolism works and how to use a daily color as a small, pleasant prompt.',
    date: '2026-01-29',
    author: BLOG_AUTHOR,
    category: 'Colors',
    tags: ['color symbolism', 'daily color', 'meaning of colors', 'inspiration'],
    readingMinutes: 6,
    sections: [
      {
        type: 'p',
        text: 'Ask ten people what the color red means and you may get ten different answers: love, danger, luck, anger, energy. That range is the whole point. Color symbolism is not a fixed code with a single correct reading — it is a living blend of culture, memory and personal association. Understanding how it works lets you use color as a light, pleasurable kind of reflection.',
      },
      { type: 'h2', text: 'How color symbolism works' },
      {
        type: 'p',
        text: 'Colors acquire meaning in three broad ways. The first is cultural: traditions and societies assign shared meanings over time, so white signals weddings in some places and mourning in others. The second is natural: greens are associated with plants and growth, blues with sky and water, because those are the things we see. The third is personal: a color linked to a happy memory carries that warmth for you and no one else.',
      },
      {
        type: 'p',
        text: 'Because these layers overlap, color never has one universal meaning. When you read that lavender stands for calm or that gold stands for value, you are reading a widely shared association — a starting point, not a rule written in the universe.',
      },
      { type: 'h2', text: 'A quick tour of common colors' },
      {
        type: 'p',
        text: 'Different traditions emphasise different meanings, but a few associations come up again and again:',
      },
      {
        type: 'ul',
        items: [
          'Lavender — calm, clarity, gentle intuition.',
          'Rose — warmth, kindness, affection.',
          'Sky blue — openness, clarity, honest communication.',
          'Sage green — balance, renewal, steady growth.',
          'Ivory — simplicity, quiet beginnings, space to think.',
          'Gold — value, recognition, a quiet sense of worth.',
          'Coral — courage, warmth, expressive energy.',
          'Midnight blue — depth, trust, focused ambition.',
        ],
      },
      {
        type: 'p',
        text: 'Notice that most of these are qualities a person might want more of on a given day. That is exactly how a daily color is useful: not as a forecast, but as a tiny theme you can carry with you if you choose.',
      },
      { type: 'h2', text: 'Why a "color of the day" can be genuinely helpful' },
      {
        type: 'p',
        text: 'A daily color works as a kind of soft prompt. It asks nothing of you and demands no belief. It simply gives your attention something pleasant to land on. If the color resonates, you might wear it, use it as a phone wallpaper, or notice it in a favourite mug. If it does not, you lose nothing by ignoring it.',
      },
      {
        type: 'callout',
        text: 'Color symbolism is cultural and personal. There is no correct meaning, and no color can tell you what will happen today. Think of it as a small aesthetic moment — the equivalent of a friendly nudge, not a fortune.',
      },
      { type: 'h2', text: 'How Angelora picks your daily color' },
      {
        type: 'p',
        text: 'On Angelora, your color of the day is derived deterministically from your birthday and today\u2019s date. The same birthday on the same day always produces the same color, and a new date brings a fresh one. Nothing is random and nothing is stored on a server — the calculation happens entirely in your browser.',
      },
      {
        type: 'p',
        text: 'We keep the interpretation deliberately gentle. Each color page explains its traditional associations and offers a few everyday styling ideas, always framed as inspiration rather than prediction.',
      },
      { type: 'h2', text: 'Making colour part of a small ritual' },
      {
        type: 'p',
        text: 'If you enjoy the idea, try this: once a day, notice your color and ask yourself one short question that matches its theme. A lavender day might invite the question "what would help me feel calmer right now?" A coral day might ask "where could I speak up kindly today?" That is the entire practice — a color, a question, thirty seconds of reflection.',
      },
      {
        type: 'p',
        text: 'Curious what your color is today? Enter your birthday on the homepage to see your personal number, daily color, mirror moment and message all in one place.',
      },
    ],
  },
  {
    slug: 'angel-numbers-111-222-333',
    title: 'Angel Numbers Explained: 111, 222, 333 and Beyond',
    description:
      'Angel numbers are repeating sequences people notice throughout the day. Learn where the term comes from and what 111, 222, 333 and similar patterns are commonly said to symbolize.',
    excerpt:
      'Angel numbers are repeating sequences people notice in daily life. Here is what the term means and how the most common numbers are usually interpreted.',
    date: '2026-02-03',
    author: BLOG_AUTHOR,
    category: 'Number Symbolism',
    tags: ['angel numbers', '111', '222', '333', 'repeating numbers'],
    readingMinutes: 7,
    sections: [
      {
        type: 'p',
        text: 'The term "angel number" became popular in the late twentieth century as a warm, hopeful name for number patterns that seem to show up again and again — a price total, a receipt, a house number, a clock. The idea is simple: some people treat these repeated patterns as gentle signs from something larger than themselves. This article explains the term and walks through the most commonly discussed numbers.',
      },
      { type: 'h2', text: 'What is an angel number?' },
      {
        type: 'p',
        text: 'An angel number is any number pattern that repeats or stands out in a way that catches your attention — 111, 222, 333, 444 and 11:11 are classic examples. The name comes from a spiritual framing in which the numbers are understood as friendly messages. Outside that framing, they are simply patterns, and the human brain is famously good at noticing patterns.',
      },
      {
        type: 'p',
        text: 'It helps to hold the idea lightly. An angel number is meaningful if you find it meaningful — the same way a song lyric can feel written for you without literally having been written for you.',
      },
      { type: 'h2', text: 'The most common angel numbers and their meanings' },
      { type: 'h3', text: '111 — new beginnings' },
      {
        type: 'p',
        text: 'One is the number of starts, and repeated ones (111) are often read as encouragement to begin something, trust your own initiative, and pay attention to what you are thinking about. If 111 catches your eye, tradition suggests asking what you would like to start or bring into focus.',
      },
      { type: 'h3', text: '222 — balance and trust' },
      {
        type: 'p',
        text: 'Two is associated with balance, patience and partnership, so 222 is commonly interpreted as a reminder to trust the pace of things and to value cooperation. It is the sort of reading that nudges you toward patience rather than urgency.',
      },
      { type: 'h3', text: '333 — expression and support' },
      {
        type: 'p',
        text: 'Three carries themes of creativity and communication, and 333 is often framed as encouragement to express yourself and to remember that support is nearby. Read generously, it is a prompt to say the thing you have been holding in.',
      },
      { type: 'h3', text: '444 — steadiness and foundations' },
      {
        type: 'p',
        text: 'Four is the number of structure and hard work, and 444 is usually associated with stability — keeping your foundations solid and continuing with steady effort. It is the least dramatic of the readings, and often the most practical.',
      },
      { type: 'h3', text: '555 — change and movement' },
      {
        type: 'p',
        text: 'Five is linked to change and adaptation, so 555 is often read as a sign that movement is happening and flexibility will serve you. Traditions sometimes treat it as encouragement to welcome change rather than resist it.',
      },
      {
        type: 'ul',
        items: [
          '666 — often about rebalancing effort and rest (not, as pop culture suggests, anything sinister).',
          '777 — often associated with reflection, learning and good fortune.',
          '888 — frequently linked to abundance, cycles and giving and receiving.',
          '999 — commonly read as completion and moving toward what is next.',
        ],
      },
      { type: 'h2', text: 'Why people see these patterns so often' },
      {
        type: 'p',
        text: 'There are two ordinary, non-mystical reasons these numbers show up. First, repeating digits really are everywhere — in times, prices, addresses and phone numbers — so any pattern will occur regularly by chance. Second, once you decide a number is meaningful, you start noticing it and remembering it while ordinary numbers slip past. This is not a flaw; it is simply how attention works.',
      },
      {
        type: 'callout',
        text: 'At Angelora we treat angel numbers as a pleasant tradition for reflection. We do not claim they predict anything, and we never ask you to make a decision because of a number. Think of them as a friendly question, not an answer.',
      },
      { type: 'h2', text: 'Getting something useful out of angel numbers' },
      {
        type: 'p',
        text: 'The most useful way to engage with angel numbers is to turn each sighting into a short, honest question for yourself. Rather than asking "what will happen?", ask "what am I already thinking about that this could remind me of?" That small shift turns a superstition into a habit of self-reflection, which is where the real value lives.',
      },
      {
        type: 'p',
        text: 'If you enjoy these patterns, Angelora includes a mirror-moment feature alongside your personal number, daily color and message. Enter your birthday on the homepage to see your own daily combination.',
      },
    ],
  },
]

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.slug, post]),
)

export function relatedPosts(slug: string, limit = 2): BlogPost[] {
  const current = BLOG_POSTS_BY_SLUG[slug]
  if (!current) return BLOG_POSTS.slice(0, limit)
  const sameCategory = BLOG_POSTS.filter(
    (post) => post.slug !== slug && post.category === current.category,
  )
  const others = BLOG_POSTS.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}
