export type ConsentChoice = 'accepted' | 'declined'

const CONSENT_KEY = 'angelora:consent'
const GA_ID = 'G-90D37L4S43'

export type ConsentState = ConsentChoice | 'unknown'

export function getConsent(): ConsentState {
  if (typeof window === 'undefined') return 'unknown'
  const stored = window.localStorage.getItem(CONSENT_KEY)
  return stored === 'accepted' || stored === 'declined' ? stored : 'unknown'
}

export function setConsent(choice: ConsentChoice): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(CONSENT_KEY, choice)
}

export function clearConsent(): void {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(CONSENT_KEY)
}

export function analyticsAllowed(): boolean {
  return getConsent() === 'accepted'
}

/** Load Google Analytics (gtag) — only ever called once consent is given. */
export function loadAnalytics(): void {
  if (typeof window === 'undefined') return
  if (document.getElementById('gtag-script')) return

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }

  const script = document.createElement('script')
  script.id = 'gtag-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { anonymize_ip: true })
}

/** Delayed invocation — queues the event until analytics is loaded. */
export function gtag(...args: unknown[]): void {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}