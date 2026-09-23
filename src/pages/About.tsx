import { useEffect } from 'react'
import StaticPage, { ProseHeading, ProseText } from '@/components/StaticPage'
import { applySeoMeta } from '@/utils/seo'

export default function About() {
  useEffect(() => {
    applySeoMeta({
      title: 'About | Angelora',
      description:
        'Angelora turns your birthday and today\u2019s date into a personal daily moment — a number, a color, a mirror time, an energy and a message. For entertainment and reflection.',
      path: '/about',
    })
  }, [])

  return (
    <StaticPage
      title="About Angelora"
      intro="A little inspiration for every day — built from your birthday and today's date."
    >
      <ProseHeading>What is Angelora?</ProseHeading>
      <ProseText>
        Angelora is a daily spiritual-inspired lifestyle experience. You enter your
        birthday, and we shape a personalized moment around it: your personal
        number, today's color, your mirror moment, a daily energy, a focus, a style
        suggestion, and a gentle message. One birthday → one personalized day.
      </ProseText>

      <ProseHeading>Where do the meanings come from?</ProseHeading>
      <ProseText>
        Our content draws from centuries-old numerology traditions and popular
        symbolic practices around numbers, mirror times and colors. The
        interpretations are original, written in simple international English, and
        offered warmly — as reflection, never as fact or prediction.
      </ProseText>

      <ProseHeading>What makes every day feel new?</ProseHeading>
      <ProseText>
        Your daily result is deterministic. The exact combination of your birthday
        and today's local date produces a stable seed, which selects your color,
        moment, energy, focus and message. Tomorrow changes the seed — so the same
        birthday naturally yields a fresh experience each day.
      </ProseText>

      <ProseHeading>Do I need an account?</ProseHeading>
      <ProseText>
        No. There is no sign-up, no email, no password. Your birthday and optional
        name are remembered only in your own browser's local storage, and you can
        clear them at any time. We don't require (or currently have) a backend.
      </ProseText>

      <ProseHeading>Is this for real predictions?</ProseHeading>
      <ProseText>
        No. Angelora is entertainment and gentle reflection. Symbols inspire, but
        they never decide. You are the best expert on your own life — enjoy the
        pause, then trust yourself.
      </ProseText>
    </StaticPage>
  )
}