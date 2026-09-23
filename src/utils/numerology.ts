import type { PersonalNumberResult } from '@/types/daily'

export const MASTER_NUMBERS = [11, 22, 33]

function sumDigits(n: number): number {
  return String(n)
    .split('')
    .reduce((acc, d) => acc + Number(d), 0)
}

/**
 * Calculates the personal (life path) number from a birthday.
 *
 * Example: 23/08/2002 -> 2+3+0+8+2+0+0+2 = 17 -> 1+7 = 8
 *
 * Master numbers 11, 22 and 33 are kept as-is.
 */
export function calculatePersonalNumber(birthDate: Date): PersonalNumberResult {
  const year = birthDate.getFullYear()
  const month = birthDate.getMonth() + 1
  const day = birthDate.getDate()

  let value = sumDigits(year) + sumDigits(month) + sumDigits(day)

  while (value > 9 && !MASTER_NUMBERS.includes(value)) {
    value = sumDigits(value)
  }

  return {
    value,
    isMaster: MASTER_NUMBERS.includes(value),
  }
}