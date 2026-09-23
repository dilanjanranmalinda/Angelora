import { useCallback, useMemo, useState } from 'react'
import type { DailyExperience } from '@/types/daily'
import { generateDailyExperience } from '@/utils/dailyGenerator'
import { formatDateTime } from '@/utils/dateUtils'

export interface GenerateArgs {
  birthDate: Date
  name?: string
}

/**
 * Holds the personalized daily experience for the current local calendar day.
 * Regeneration for the same birthday + date returns a deterministic result,
 * so the hook returns a stable reference during a given day.
 */
export function useDailyExperience() {
  const [experience, setExperience] = useState<DailyExperience | null>(null)
  const [generatedKey, setGeneratedKey] = useState<string | null>(null)

  const generate = useCallback(
    (args: GenerateArgs): DailyExperience => {
      const date = new Date()
      const result = generateDailyExperience({
        birthDate: args.birthDate,
        name: args.name,
        date,
      })
      setExperience(result)
      setGeneratedKey(formatDateTime(date))
      return result
    },
    [],
  )

  const reset = useCallback(() => {
    setExperience(null)
    setGeneratedKey(null)
  }, [])

  const todayKey = useMemo(() => formatDateTime(new Date()), [])

  const isForToday = useCallback(
    () => generatedKey === todayKey,
    [generatedKey, todayKey],
  )

  return {
    experience,
    generatedKey,
    generate,
    reset,
    todayKey,
    isForToday,
  }
}