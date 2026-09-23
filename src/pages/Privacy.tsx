import { useEffect } from 'react'
import StaticPage, { ProseHeading, ProseText } from '@/components/StaticPage'
import { applySeoMeta } from '@/utils/seo'

export default function Privacy() {
  useEffect(() => {
    applySeoMeta({
      title: 'Privacy Policy | Angelora',
      description:
        'Angelora keeps its MVP completely on the frontend. No account, no server, no tracking. Learn exactly what happens with your birthday and name.',
      path: '/privacy',
    })
  }, [])

  return (
    <StaticPage
      title="Privacy Policy"
      intro="The simplest version: we currently have no servers, no database and no accounts."
    >
      <ProseHeading>What we collect</ProseHeading>
      <ProseText>
        In the current version, Angelora is a fully client-side application. When
        you enter your birthday and optional name, they are used only to generate
        your personalized daily experience in your browser.
      </ProseText>

      <ProseHeading>Local storage</ProseHeading>
      <ProseText>
        Your birthday and name may be saved to your browser&rsquo;s localStorage so
        the form can be prefilled next time. This data never leaves your device and
        is never transmitted to us. Use the &ldquo;Clear My Data&rdquo; button in the
        footer to remove it at any time.
      </ProseText>

      <ProseHeading>Analytics</ProseHeading>
      <ProseText>
        We do not currently run analytics or collect personal data. If we later add
        analytics or advertising, this policy will be updated first to describe the
        tools used and how they comply with applicable law.
      </ProseText>

      <ProseHeading>Cookies</ProseHeading>
      <ProseText>
        We do not set our own cookies in the MVP. Third-party services (such as a
        future advertising provider) may use other mechanisms; if that happens we
        will disclose it here.
      </ProseText>

      <ProseHeading>Changes</ProseHeading>
      <ProseText>
        If this application grows to include a backend or additional services, this
        policy will be revised accordingly and published on this page.
      </ProseText>
    </StaticPage>
  )
}