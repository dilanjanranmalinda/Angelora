/**
 * FNV-1a style hash (64-bit variant folded to 32-bit) with extra mixing.
 * Produces a stable unsigned integer for a given set of inputs.
 */
export function hashNumbers(...values: number[]): number {
  let h = 2166136261
  for (const value of values) {
    h ^= value | 0
    h = Math.imul(h, 16777619)
  }
  h = Math.imul(h ^ (h >>> 16), 2246822507)
  h = Math.imul(h ^ (h >>> 13), 3266489909)
  h ^= h >>> 16
  return h >>> 0
}

/**
 * Derives a deterministic daily seed from a birthday and the current (local)
 * calendar date. The same birthday + same date always produces the same seed.
 */
export function generateDailySeed(birthDate: Date, currentDate: Date): number {
  return hashNumbers(
    birthDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
  )
}

/** Picks a stable index into a list using the seed, a feature salt and the personal number. */
export function pickIndex(
  seed: number,
  personalNumber: number,
  salt: number,
  length: number,
): number {
  const mixed = hashNumbers(seed, personalNumber * 7919, salt)
  return mixed % length
}