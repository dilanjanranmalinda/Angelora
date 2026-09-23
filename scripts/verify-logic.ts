import { calculatePersonalNumber } from '@/utils/numerology'
import { generateDailySeed } from '@/utils/dailySeed'
import { generateDailyExperience } from '@/utils/dailyGenerator'
import { buildDateFromParts, isValidDateInput } from '@/utils/dateUtils'
import { numbersByValue } from '@/data/numbers'
import { mirrorTimesByTime } from '@/data/mirrorTimes'
import type { DailyExperience } from '@/types/daily'

let failures = 0
function check(name: string, cond: boolean) {
  if (!cond) {
    failures += 1
    console.error('FAIL:', name)
  } else {
    console.log('ok:', name)
  }
}

const b = (d: number, m: number, y: number) => new Date(y, m - 1, d)
const parts = (d: number, m: number, y: number) => ({
  day: String(d),
  month: String(m),
  year: String(y),
})

// 1. Numerology
check('23/08/2002 -> 8', calculatePersonalNumber(b(23, 8, 2002)).value === 8)
check('11/11/1999 -> 5 (reduces)', calculatePersonalNumber(b(11, 11, 1999)).value === 5)
check('07/02/2000 -> 11 (master)', calculatePersonalNumber(b(7, 2, 2000)).value === 11)
check('22/12/2000 sum -> 9', calculatePersonalNumber(b(22, 12, 2000)).value === 9)
check('01/01/2000 -> 4', calculatePersonalNumber(b(1, 1, 2000)).value === 4)
check('master flagged', calculatePersonalNumber(b(7, 2, 2000)).isMaster === true)
check('non-master not flagged', calculatePersonalNumber(b(1, 1, 2000)).isMaster === false)

// 2. Date validation
check('valid date', buildDateFromParts(parts(23, 8, 2002)) !== null)
check('invalid day 32', buildDateFromParts(parts(32, 8, 2002)) === null)
check('invalid month 13', buildDateFromParts(parts(1, 13, 2002)) === null)
check('leap 29/02/2000 valid', buildDateFromParts(parts(29, 2, 2000)) !== null)
check('non-leap 29/02/2001 invalid', buildDateFromParts(parts(29, 2, 2001)) === null)
check('future year invalid', buildDateFromParts(parts(1, 1, 2099)) === null)
check('too-old year invalid', buildDateFromParts(parts(1, 1, 1899)) === null)
check('empty invalid', isValidDateInput({ day: '', month: '', year: '' }) === false)

// 3. Determinism: same birthday + same date = same result
const inputs = [
  { birthDate: b(1, 1, 2000), date: new Date(2026, 0, 15) },
  { birthDate: b(11, 11, 1999), date: new Date(2026, 0, 15) },
  { birthDate: b(23, 8, 2002), date: new Date(2026, 0, 15) },
  { birthDate: b(29, 2, 2000), date: new Date(2026, 0, 15) },
  { birthDate: b(31, 12, 1995), date: new Date(2026, 0, 15) },
]
for (const input of inputs) {
  const a = generateDailyExperience(input)
  const bOut = generateDailyExperience(input)
  check(
    `deterministic ${input.birthDate.toISOString().slice(0, 10)}`,
    JSON.stringify(a) === JSON.stringify(bOut),
  )
}

// 4. Different day -> seed changes and (very likely) different result
const base = b(23, 8, 2002)
const day1 = generateDailySeed(base, new Date(2026, 0, 15))
const day2 = generateDailySeed(base, new Date(2026, 0, 16))
check('seed changes day to day', day1 !== day2)

// 5. Same birthday but different personal numbers produce different picks
const genA = generateDailyExperience({ birthDate: b(1, 1, 2000), date: new Date(2026, 0, 15) })
const genB = generateDailyExperience({ birthDate: b(2, 1, 2000), date: new Date(2026, 0, 15) })
check(
  'different birthdays vary colors',
  genA.color.name !== genB.color.name || genA.moment.time !== genB.moment.time,
)

// 6. Experience has all expected fields
const exp = generateDailyExperience({ birthDate: b(23, 8, 2002), name: 'Emma', date: new Date(2026, 0, 15) })
check('has personalNumber', typeof exp.personalNumber.value === 'number')
check('has color', typeof exp.color.name === 'string')
check('has moment', mirrorTimesByTime[exp.moment.time] !== undefined)
check('has energy', exp.energy.title.length > 0)
check('has focus', exp.focus.title.length > 0)
check('has style', exp.style.palette.length >= 2)
check('has message', exp.message.length > 0)
check('has love', exp.love.length > 0)
check('has career', exp.career.length > 0)
check('has growth', exp.growth.length > 0)
check('has affirmation', exp.affirmation.length > 0)
check('has name', exp.name === 'Emma')
check('number meaning exists', numbersByValue[exp.personalNumber.value] !== undefined)

// 7. Full-run valid inputs across spec test list
const dr = (
  d: number,
  m: number,
  y: number,
): DailyExperience => generateDailyExperience({ birthDate: b(d, m, y), date: new Date(2026, 0, 15) })
for (const [d, m, y] of [[1, 1, 2000], [11, 11, 1999], [23, 8, 2002], [29, 2, 2000], [31, 12, 1995]]) {
  const result = dr(d, m, y)
  check(`full run ${d}/${m}/${y} (number=${result.personalNumber.value})`, result.message.length > 5)
}

if (failures > 0) {
  console.error(`\n${failures} failure(s)`)
  process.exit(1)
}
console.log('\nAll logic checks passed ✔')