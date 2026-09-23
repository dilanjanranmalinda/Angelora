import { useEffect } from 'react'
import StaticPage, { ProseHeading, ProseText } from '@/components/StaticPage'
import { applySeoMeta } from '@/utils/seo'

export default function Terms() {
  useEffect(() => {
    applySeoMeta({
      title: 'Terms of Use | Angelora',
      description:
        'Angelora offers numerology-inspired content for entertainment and reflection. Read the terms of using the site.',
      path: '/terms',
    })
  }, [])

  return (
    <StaticPage
      title="Terms of Use"
      intro="A few simple ground rules for enjoying Angelora. Nothing clever, nothing hidden."
    >
      <ProseHeading>Entertainment and reflection only</ProseHeading>
      <ProseText>
        Angelora provides numerology-inspired and spiritual content for
        entertainment, reflection and personal inspiration. Interpretations are
        symbolic and are not scientifically proven predictions, guarantees, or
        professional advice of any kind — financial, medical, legal or otherwise.
      </ProseText>

      <ProseHeading>Use responsibly</ProseHeading>
      <ProseText>
        You agree to use the service for its intended purpose. Do not rely on daily
        readings for important life decisions. Make your own choices with your own
        judgment.
      </ProseText>

      <ProseHeading>Your content</ProseHeading>
      <ProseText>
        Content you generate through the tool — such as share images and copied
        text — is yours to share. We do not host, store, or claim ownership of your
        personalized results during the MVP.
      </ProseText>

      <ProseHeading>Availability</ProseHeading>
      <ProseText>
        The service is provided &ldquo;as is&rdquo; and may change, be updated, or be
        temporarily unavailable at any time. We aim to keep the experience reliable
        and fast, but we make no guarantees.
      </ProseText>

      <ProseHeading>Contact</ProseHeading>
      <ProseText>
        Questions about these terms can be sent through the contact page on this
        site.
      </ProseText>
    </StaticPage>
  )
}