import type { DailyExperience, DailyInput } from '@/types/daily'
import { numbersByValue } from '@/data/numbers'
import { colors } from '@/data/colors'
import { mirrorTimes } from '@/data/mirrorTimes'
import { energies } from '@/data/energies'
import { focuses } from '@/data/focuses'
import { styles } from '@/data/styles'
import { messages } from '@/data/messages'
import { love } from '@/data/love'
import { career } from '@/data/career'
import { growth } from '@/data/growth'
import { affirmations } from '@/data/affirmations'
import { calculatePersonalNumber } from '@/utils/numerology'
import { generateDailySeed, pickIndex } from '@/utils/dailySeed'
import { formatDateHeading } from '@/utils/dateUtils'

function pick<T>(
  list: readonly T[],
  seed: number,
  personalNumber: number,
  salt: number,
): T {
  return list[pickIndex(seed, personalNumber, salt, list.length)]
}

/**
 * Central generator described in the project spec:
 * birthday -> seed -> personal number -> color -> moment -> energy -> focus
 * -> style -> message -> love -> career -> growth -> affirmation -> YOUR DAY
 */
export function generateDailyExperience(input: DailyInput): DailyExperience {
  const date = input.date ?? new Date()
  const birthDate = input.birthDate
  const seed = generateDailySeed(birthDate, date)
  const personalNumber = calculatePersonalNumber(birthDate)

  const numberMeaning = numbersByValue[personalNumber.value]
  const color = pick(colors, seed, personalNumber.value, 1)
  const moment = pick(mirrorTimes, seed, personalNumber.value, 2)
  const energy = pick(energies, seed, personalNumber.value, 3)
  const focus = pick(focuses, seed, personalNumber.value, 4)
  const style = pick(styles, seed, personalNumber.value, 5)
  const message = pick(messages, seed, personalNumber.value, 6)
  const loveNote = pick(love, seed, personalNumber.value, 7)
  const careerNote = pick(career, seed, personalNumber.value, 8)
  const growthNote = pick(growth, seed, personalNumber.value, 9)
  const affirmation = pick(affirmations, seed, personalNumber.value, 10)

  const named = input.name?.trim()

  return {
    personalNumber,
    numberMeaning,
    color,
    moment,
    energy,
    focus,
    style,
    message,
    love: loveNote,
    career: careerNote,
    growth: growthNote,
    affirmation,
    name: named || undefined,
    date: formatDateHeading(date),
    seed,
  }
}