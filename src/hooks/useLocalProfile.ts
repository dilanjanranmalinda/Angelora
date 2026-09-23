import { useCallback, useState } from 'react'

const STORAGE_KEY = 'angelora:profile'
const PREFERENCE_KEY = 'angelora:preferences'

export interface LocalProfile {
  birthday?: string
  name?: string
}

export interface LocalPreferences {
  lastGeneratedDate?: string
}

function readProfile(): LocalProfile {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as LocalProfile) : {}
  } catch {
    return {}
  }
}

function readPreferences(): LocalPreferences {
  try {
    const raw = window.localStorage.getItem(PREFERENCE_KEY)
    return raw ? (JSON.parse(raw) as LocalPreferences) : {}
  } catch {
    return {}
  }
}

/**
 * Lightweight localStorage-backed profile. Stores only birthday and optional
 * name — no account, no server, no tracking.
 */
export function useLocalProfile() {
  const [profile, setProfile] = useState<LocalProfile>(readProfile)
  const [preferences, setPreferences] = useState<LocalPreferences>(readPreferences)

  const saveProfile = useCallback((next: LocalProfile) => {
    setProfile(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // storage unavailable — keep working in memory only
    }
  }, [])

  const savePreferences = useCallback((next: LocalPreferences) => {
    setPreferences((prev) => {
      const merged = { ...prev, ...next }
      try {
        window.localStorage.setItem(PREFERENCE_KEY, JSON.stringify(merged))
      } catch {
        // ignore
      }
      return merged
    })
  }, [])

  const noteGeneratedToday = useCallback(() => {
    const today = new Date()
    const key = today.toISOString().slice(0, 10)
    savePreferences({ lastGeneratedDate: key })
  }, [savePreferences])

  const hasGeneratedToday = useCallback((): boolean => {
    const today = new Date()
    const key = today.toISOString().slice(0, 10)
    return preferences.lastGeneratedDate === key
  }, [preferences.lastGeneratedDate])

  const clearData = useCallback(() => {
    setProfile({})
    setPreferences({})
    try {
      window.localStorage.removeItem(STORAGE_KEY)
      window.localStorage.removeItem(PREFERENCE_KEY)
    } catch {
      // ignore
    }
  }, [])

  const clearConsentChoice = useCallback(() => {
    try {
      window.localStorage.removeItem('angelora:consent')
    } catch {
      // ignore
    }
  }, [])

  return {
    profile,
    preferences,
    saveProfile,
    savePreferences,
    noteGeneratedToday,
    hasGeneratedToday,
    clearData,
    clearConsentChoice,
  }
}