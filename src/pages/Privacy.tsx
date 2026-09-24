import { useEffect } from 'react'
import StaticPage, { ProseHeading, ProseText } from '@/components/StaticPage'
import { applySeoMeta } from '@/utils/seo'

export default function Privacy() {
  useEffect(() => {
    applySeoMeta({
      title: 'Privacy Policy | Angelora',
      description:
        'Angelora is a frontend-only app — your birthday and name never leave your browser. We use Google Analytics to understand how visitors use the site.',
      path: '/privacy',
    })
  }, [])

  return (
    <StaticPage
      title="Privacy Policy"
      intro="The simplest version: we have no servers, no database and no accounts. Your birthday and name never leave your device — analytics tell us, in aggregate, how the site is used."
    >
      <ProseHeading>What we collect</ProseHeading>
      <ProseText>
        Angelora is a fully client-side application. When you enter your birthday
        and optional name, they are used only to generate your personalized daily
        experience in your browser. That content is never sent to us or to any
        third party.
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
        We use two privacy-focused analytics tools to understand how Angelora is
        used around the world &mdash; for example which pages are viewed, how long
        the site is used, which devices and browsers visitors use, and approximate
        location at country/city level. Analytics data is aggregated and cannot be
        used to identify you personally.
      </ProseText>
      <ProseText>
        <strong>Vercel Analytics</strong> (which powers our realtime visitor
        dashboard) is cookieless and collects only pseudonymous usage counts from
        the site itself. It runs for every visitor and does not require a consent
        decision, because it does not place cookies or store personal data.
      </ProseText>
      <ProseText>
        <strong>Google Analytics</strong> (with IP anonymization enabled)
        additionally measures visits in more detail. We ask for your consent with
        a short banner before loading Google Analytics: if you accept, an
        anonymous identifier cookie is placed and analytics loads; if you decline,
        no Google Analytics script runs. You can change your mind at any time by
        using the &ldquo;Clear My Data&rdquo; button in the footer, which removes
        your stored choice so the banner appears again.
      </ProseText>
      <ProseText>
        No personal identity is involved in either tool: your name, birthday and
        the content of your daily experience are never sent to any analytics
        service. We do not sell, rent or trade your information.
      </ProseText>
      <ProseText>
        Some visitors, primarily in the UK and EU, are entitled to additional
        rights under data protection law: the right to access, correct, erase or
        restrict processing of your personal data, and to withdraw consent. You can
        exercise these at any time by contacting us via the Contact page.
      </ProseText>

      <ProseHeading>Cookies</ProseHeading>
      <ProseText>
        We do not set our own cookies. Google Analytics may store small, first-party
        cookies (such as <em>_ga</em> and <em>_gid</em>) to distinguish visitors and
        count return visits. These cookies contain an anonymous identifier and do not
        store your birthday, name or any content you generate.
      </ProseText>
      <ProseText>
        You can refuse or delete cookies in your browser settings, or install the
        official Google Analytics Opt-out Browser Add-on to stop Google Analytics
        cookie-based measurement entirely. Turning off analytics does not affect
        your daily experience on Angelora.
      </ProseText>

      <ProseHeading>Advertising</ProseHeading>
      <ProseText>
        Angelora does not currently run advertising. If we add an advertising
        provider (such as Google AdSense) in the future, this policy will be
        updated to describe the tools used and any choices available to you before
        that happens. Advertisements will only be shown after the same consent
        banner has been accepted, and ads never interrupt or replace your daily
        experience.
      </ProseText>

      <ProseHeading>Compliance</ProseHeading>
      <ProseText>
        We follow the principles of transparency and privacy by design. Our consent
        banner honors UK GDPR and EU GDPR expectations, and for visitors in the
        United States we respect the transparency requirements of state laws such as
        the California Consumer Privacy Act — including that personal information is
        never sold. As Angelora grows, the specific rights and controls described in
        those laws will be kept current on this page.
      </ProseText>

      <ProseHeading>Changes</ProseHeading>
      <ProseText>
        If Angelora grows to include a backend or additional services, this policy
        will be revised accordingly and published on this page with its date of
        last update.
      </ProseText>
    </StaticPage>
  )
}