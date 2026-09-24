const scripts: { id?: string; src?: string; async?: boolean; crossorigin?: string }[] = []
const head = { appendChild: (el: (typeof scripts)[number]) => scripts.push(el) }
const store = new Map<string, string>()

const fakeWindow = {
  location: { origin: 'https://angelora-two.vercel.app' },
  dataLayer: [],
  gtag: undefined as ((...args: unknown[]) => void) | undefined,
  localStorage: {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => store.set(k, v),
    removeItem: (k: string) => store.delete(k),
  },
}

const fakeDocument = {
  createElement: () => ({} as (typeof scripts)[number]),
  getElementById: (id: string) => scripts.find((s) => s.id === id) ?? null,
  head,
}

;(globalThis as Record<string, unknown>).window = fakeWindow
;(globalThis as Record<string, unknown>).document = fakeDocument

let failures = 0
function check(name: string, cond: boolean) {
  console.log(`${cond ? 'ok' : 'FAIL'}: ${name}`)
  if (!cond) failures++
}

const { getConsent, setConsent, analyticsAllowed, loadAnalytics } = await import(
  '../src/utils/consent.ts'
)

check('consent starts unknown', getConsent() === 'unknown')
check('analytics blocked before consent', analyticsAllowed() === false)

setConsent('accepted')
check('consent accepted', getConsent() === 'accepted')
check('analytics allowed after consent', analyticsAllowed() === true)

loadAnalytics()
check('gtag script injected', scripts.length === 1)
check('correct measurement id', (scripts[0].src ?? '').includes('G-90D37L4S43'))
check('script is async', scripts[0].async === true)

const cmds = fakeWindow.dataLayer as unknown[][]
check(
  'config command pushed with anonymize_ip',
  cmds.some((c) => c[0] === 'config' && (c[2] as { anonymize_ip?: boolean }).anonymize_ip === true),
)
check('js command pushed', cmds.some((c) => c[0] === 'js' && c[1] instanceof Date))

loadAnalytics()
check('script not duplicated', scripts.length === 1)

setConsent('declined')
check('analytics blocked after decline', analyticsAllowed() === false)

if (failures === 0) console.log('\nAll consent/analytics checks passed ✔')
else process.exit(1)