const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export interface DateInputParts {
  day: string
  month: string
  year: string
}

export function isValidDateInput(parts: DateInputParts): boolean {
  return buildDateFromParts(parts) !== null
}

/**
 * Builds a valid local Date from DD/MM/YYYY string parts.
 * Returns null for invalid, incomplete or future birthdays.
 */
export function buildDateFromParts(parts: DateInputParts): Date | null {
  const day = Number(parts.day)
  const month = Number(parts.month)
  const year = Number(parts.year)

  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
    return null
  }
  if (day < 1 || day > 31) return null
  if (month < 1 || month > 12) return null
  if (year < 1900) return null

  const date = new Date(year, month - 1, day)
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null
  }

  const now = new Date()
  if (year > now.getFullYear()) return null
  if (year === now.getFullYear() && date.getTime() > now.getTime()) return null

  return date
}

export function formatDateHeading(date: Date): string {
  return `${WEEKDAYS[date.getDay()]} • ${MONTHS[date.getMonth()]} ${date.getDate()}`
}

export function formatDateTime(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function greetingForHour(date: Date): string {
  const hour = date.getHours()
  if (hour < 5) return 'Good night'
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export function birthdayLabel(date: Date): string {
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`
}

export function greetingForDate(date: Date): string {
  return greetingForHour(date)
}

/** Parses a stored 'DD/MM/YYYY' birthday string back into a valid local Date. */
export function storedBirthdayToDate(value: string | undefined): Date | null {
  if (!value) return null
  const parts = value.trim().split('/')
  if (parts.length !== 3) return null
  return buildDateFromParts({ day: parts[0], month: parts[1], year: parts[2] })
}