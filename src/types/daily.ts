export interface DailyColor {
  name: string
  hex: string
  symbolicMeaning: string
  mood: string
  secondaryColors: string[]
  styleDescription: string
}

export interface MirrorTime {
  time: string
  display: string
  title: string
  symbolicMeaning: string
  reflectionPrompt: string
}

export interface DailyEnergy {
  title: string
  description: string
  affirmation: string
}

export interface DailyFocus {
  title: string
  description: string
}

export interface StyleTheme {
  title: string
  palette: string[]
  description: string
  category: string
}

export interface NumberMeaning {
  number: number
  title: string
  essence: string
  traits: string[]
  strength: string
  love: string
  career: string
  colors: string[]
  reflection: string
}

export interface PersonalNumberResult {
  value: number
  isMaster: boolean
}

export interface DailyExperience {
  personalNumber: PersonalNumberResult
  numberMeaning: NumberMeaning
  color: DailyColor
  moment: MirrorTime
  energy: DailyEnergy
  focus: DailyFocus
  style: StyleTheme
  message: string
  love: string
  career: string
  growth: string
  affirmation: string
  name?: string
  date: string
  seed: number
}

export interface DailyInput {
  birthDate: Date
  name?: string
  date?: Date
}

export type ShareFormat = 'story' | 'post'