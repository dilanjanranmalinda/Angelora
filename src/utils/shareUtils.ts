import type { DailyExperience } from '@/types/daily'
import { siteUrl, SITE_CONFIG } from '@/config'

export function canUseWebShare(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function'
}

export function buildShareText(experience: DailyExperience): string {
  const greeting = experience.name
    ? experience.name.toUpperCase()
    : 'YOUR DAY'
  return [
    `✨ ${greeting}`,
    `🔢 Personal Number: ${experience.personalNumber.value}`,
    `🎨 Today's Color: ${experience.color.name}`,
    `⏰ Your Moment: ${experience.moment.display}`,
    `💗 Energy: ${experience.energy.title}`,
    ``,
    `"${experience.message}"`,
    ``,
    `${SITE_CONFIG.brand} — ${SITE_CONFIG.tagline}`,
    siteUrl(),
  ].join('\n')
}

export function buildShareUrl(): string {
  return siteUrl('/')
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(textarea)
      return ok
    } catch {
      return false
    }
  }
}

export async function shareViaWebShare(experience: DailyExperience): Promise<void> {
  if (!canUseWebShare()) return
  await navigator.share({
    title: `My ${SITE_CONFIG.brand} Day — ${experience.personalNumber.value}`,
    text: buildShareText(experience),
    url: buildShareUrl(),
  })
}