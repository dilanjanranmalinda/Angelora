import type { DailyColor } from '@/types/daily'

export const colors: DailyColor[] = [
  {
    name: 'Lavender',
    hex: '#B8A1FF',
    symbolicMeaning:
      'Lavender is often associated with calm, clarity and gentle intuition. Symbolically, it may inspire a softer, more thoughtful pace to the day.',
    mood: 'Calm and contemplative',
    secondaryColors: ['White', 'Silver', 'Soft Grey'],
    styleDescription: 'Soft fabrics, relaxed silhouettes and a touch of quiet elegance.',
  },
  {
    name: 'Rose',
    hex: '#F5A8C0',
    symbolicMeaning:
      'Rose is traditionally connected to warmth, kindness and affection. It may inspire openness and a little extra gentleness today.',
    mood: 'Warm and affectionate',
    secondaryColors: ['Ivory', 'Dusty Pink', 'Cream'],
    styleDescription: 'Romantic, light layering with delicate tones that feel soft to the eye.',
  },
  {
    name: 'Sky Blue',
    hex: '#8EC0F7',
    symbolicMeaning:
      'Sky Blue is often linked to clarity, fresh perspective and open communication. It may inspire honest, unhurried conversation.',
    mood: 'Clear and open',
    secondaryColors: ['White', 'Navy', 'Silver'],
    styleDescription: 'Clean, breathable looks with a bright, airy quality.',
  },
  {
    name: 'Sage Green',
    hex: '#A8C9A7',
    symbolicMeaning:
      'Sage Green is traditionally associated with balance, renewal and steady growth. It may inspire patience with yourself and your progress.',
    mood: 'Grounded and steady',
    secondaryColors: ['Ivory', 'Cream', 'Warm Brown'],
    styleDescription: 'Natural textures and earth tones that feel grounded and easy.',
  },
  {
    name: 'Ivory',
    hex: '#F3EEDD',
    symbolicMeaning:
      'Ivory is often connected to clarity, simplicity and quiet beginnings. It may inspire you to clear away noise and start fresh.',
    mood: 'Simple and serene',
    secondaryColors: ['Gold', 'Beige', 'Soft Grey'],
    styleDescription: 'Minimal, refined styling with soft neutrals and subtle texture.',
  },
  {
    name: 'Peach',
    hex: '#F8C8A8',
    symbolicMeaning:
      'Peach is traditionally linked to warmth, optimism and gentle courage. It may inspire a friendly first step toward something or someone.',
    mood: 'Optimistic and friendly',
    secondaryColors: ['Cream', 'Coral', 'Ivory'],
    styleDescription: 'Light, sunny tones that make everyday looks feel warmer.',
  },
  {
    name: 'Gold',
    hex: '#E8C77A',
    symbolicMeaning:
      'Gold is often associated with value, recognition and inner worth. It may inspire you to acknowledge your own effort today.',
    mood: 'Warm and uplifting',
    secondaryColors: ['White', 'Navy', 'Ivory'],
    styleDescription: 'A hint of shine and considered details for a quietly confident look.',
  },
  {
    name: 'Silver',
    hex: '#C9CDE0',
    symbolicMeaning:
      'Silver is traditionally connected to reflection and intuition. It may inspire a quieter, more observant kind of day.',
    mood: 'Reflective and cool',
    secondaryColors: ['White', 'Lavender', 'Charcoal'],
    styleDescription: 'Crisp metallic accents with calm, cool neutrals.',
  },
  {
    name: 'Coral',
    hex: '#FF8FA3',
    symbolicMeaning:
      'Coral is often linked to courage, warmth and expressive energy. It may inspire you to speak up with kindness and confidence.',
    mood: 'Vibrant and brave',
    secondaryColors: ['White', 'Peach', 'Rose'],
    styleDescription: 'Punchy color with soft balance — bold, but never loud.',
  },
  {
    name: 'Midnight Blue',
    hex: '#3B4A7A',
    symbolicMeaning:
      'Midnight Blue is traditionally associated with depth, trust and quiet ambition. It may inspire focused, meaningful work.',
    mood: 'Focused and assured',
    secondaryColors: ['Gold', 'Silver', 'White'],
    styleDescription: 'Deep tones with polished structure and a dash of shine.',
  },
]

export const colorsByName: Record<string, DailyColor> = Object.fromEntries(
  colors.map((c) => [c.name.toLowerCase(), c]),
)