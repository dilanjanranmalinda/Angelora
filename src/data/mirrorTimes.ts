import type { MirrorTime } from '@/types/daily'

export const mirrorTimes: MirrorTime[] = [
  {
    time: '01:01',
    display: '01:01',
    title: 'A Fresh Start',
    symbolicMeaning:
      'In mirror-time traditions, 01:01 is often seen as a gentle nudge toward new beginnings — a reminder that small fresh starts are always available.',
    reflectionPrompt: 'What tiny new beginning could you allow yourself today?',
  },
  {
    time: '02:02',
    display: '02:02',
    title: 'Trust Your Path',
    symbolicMeaning:
      'Mirror-hour interpretations often connect 02:02 with balance and trust — a quiet sign to keep moving at your own steady pace.',
    reflectionPrompt: 'Where could a little more patience serve you right now?',
  },
  {
    time: '03:03',
    display: '03:03',
    title: 'Express Yourself',
    symbolicMeaning:
      'In spiritual traditions, 03:03 is frequently linked to creativity and expression — an invitation to share what you have been holding in.',
    reflectionPrompt: 'What have you been wanting to say that deserves to be spoken?',
  },
  {
    time: '10:10',
    display: '10:10',
    title: 'Clarity Ahead',
    symbolicMeaning:
      'Mirror-time followers often read 10:10 as a moment of clarity — things coming into focus, one honest step at a time.',
    reflectionPrompt: 'What are you finally seeing more clearly than before?',
  },
  {
    time: '11:11',
    display: '11:11',
    title: 'A Moment of Intention',
    symbolicMeaning:
      '11:11 is the most widely recognized mirror time. Many people treat it as a quiet invitation to pause and make a wish, set an intention or simply breathe.',
    reflectionPrompt: 'If you could set one gentle intention for today, what would it be?',
  },
  {
    time: '12:12',
    display: '12:12',
    title: 'Balance & Harmony',
    symbolicMeaning:
      'Mirror-hour traditions often associate 12:12 with harmony — a reminder to seek balance between effort and rest, giving and receiving.',
    reflectionPrompt: 'Where is your energy out of balance today, and what could restore it?',
  },
  {
    time: '20:20',
    display: '20:20',
    title: 'A Second Perspective',
    symbolicMeaning:
      'In numerology-inspired readings, 20:20 is a repeating pattern linked to awareness — a nudge to see the moment with fresh eyes.',
    reflectionPrompt: 'What would change if you looked at this situation from someone else\u2019s view?',
  },
  {
    time: '21:21',
    display: '21:21',
    title: 'Next Step Forward',
    symbolicMeaning:
      '21:21 is often read as encouragement toward progress — a repeating reminder that one thoughtful step is still forward motion.',
    reflectionPrompt: 'What is the next small step you keep knowing you should take?',
  },
  {
    time: '22:22',
    display: '22:22',
    title: 'Alignment',
    symbolicMeaning:
      'Many consider 22:22 a powerful repeating number associated with building something steady and true — a quiet sign of alignment.',
    reflectionPrompt: 'What are you building that feels quietly in alignment?',
  },
]

export const mirrorTimesByTime: Record<string, MirrorTime> = Object.fromEntries(
  mirrorTimes.map((t) => [t.time, t]),
)