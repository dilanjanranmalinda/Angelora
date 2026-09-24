import type { LuckyNumber } from '@/types/daily'

/**
 * Today's Lucky Number — a fresh, daily-changing digit that intentionally
 * ignores the personal numerology number. It is the same playful draw for
 * everyone on a given day, which is what makes it easy to share and talk
 * about ("today's lucky number is…"). Tone stays light: fortune, not fate.
 */
export const luckyNumbers: readonly LuckyNumber[] = [
  {
    number: 1,
    omen: 'Fresh-Start Fortune',
    meaning: 'One opens the day wide open — a signal that a small, bold start carries extra spark today.',
    hint: 'A good digit for beginnings, single straight bets and first attempts.',
  },
  {
    number: 2,
    omen: 'Gentle Pairs Luck',
    meaning: 'Two leans in with harmony — quiet luck that prefers teams, partnerships and doubled chances.',
    hint: 'Pairs, doubles and “choose again” moments feel especially kind today.',
  },
  {
    number: 3,
    omen: 'Joyful Third Charm',
    meaning: 'Three hums with creative electricity — the number of chances, third tries and happy surprises.',
    hint: 'A lucky number for playful pick-me-ups and anything taken lightly.',
  },
  {
    number: 4,
    omen: 'Four-Leaf Fortune',
    meaning: 'Four stands on the clover — steady, dependable luck that favors practical wins and grounded choices.',
    hint: 'The classic lucky digit; strong for confident, everyday plays.',
  },
  {
    number: 5,
    omen: 'Wildcard Five',
    meaning: 'Five waltzes in as the wildcard — luck that loves change, risk-taking and one wild new idea.',
    hint: 'Toss a curveball today; variation is the gift.',
  },
  {
    number: 6,
    omen: 'Golden Six Serenity',
    meaning: 'Six brings calm, balanced fortune — steady wins that arrive softly rather than loudly.',
    hint: 'A number for patience, harmony and letting good things settle.',
  },
  {
    number: 7,
    omen: 'Lucky Seven Grace',
    meaning: 'Seven is the timeless favourite — playful, mystical luck that smiles on the hopeful.',
    hint: 'The crowd-pleaser. When lucky seven shows up, people pay attention.',
  },
  {
    number: 8,
    omen: 'Prosperous Eight',
    meaning: 'Eight hums with abundance energy — fortune with a wealth-and-growth flavour for the ambitious.',
    hint: 'A strong digit for money-minded moves and long-game decisions.',
  },
  {
    number: 9,
    omen: 'Completion Circle',
    meaning: 'Nine closes a circle — luck that arrives through finishing, letting go and welcoming what comes next.',
    hint: 'Endings look like beginnings today; a great number for fresh turns.',
  },
]

/** Quick lookup of today's lucky number by value (1–9). */
export const luckyNumberByValue: Record<number, LuckyNumber> = objectFromArray(luckyNumbers)

function objectFromArray<T extends { number: number }>(arr: readonly T[]): Record<number, T> {
  const out: Record<number, T> = {}
  for (const item of arr) out[item.number] = item
  return out
}