import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import BirthdayForm from '@/components/BirthdayForm'
import LoadingExperience from '@/components/LoadingExperience'
import DailyDashboard from '@/components/DailyDashboard'
import NumberCard from '@/components/NumberCard'
import ColorCard from '@/components/ColorCard'
import MomentCard from '@/components/MomentCard'
import EnergyCard from '@/components/EnergyCard'
import FocusCard from '@/components/FocusCard'
import StyleCard from '@/components/StyleCard'
import MessageCard from '@/components/MessageCard'
import LoveCard from '@/components/LoveCard'
import CareerCard from '@/components/CareerCard'
import GrowthCard from '@/components/GrowthCard'
import AffirmationCard from '@/components/AffirmationCard'
import SeoContentSections from '@/components/SeoContentSections'
import FAQ from '@/components/FAQ'
import { FAQ_ITEMS } from '@/data/faq'
import Disclaimer from '@/components/Disclaimer'
import { useLocalProfile } from '@/hooks/useLocalProfile'
import { useDailyExperience } from '@/hooks/useDailyExperience'
import { birthdayLabel, storedBirthdayToDate } from '@/utils/dateUtils'
import { applySeoMeta, applyFaqStructuredData, applyOrganizationStructuredData } from '@/utils/seo'

const HOME_META = {
  title: 'Your Daily Signs & Personal Number | Angelora',
  description:
    'Discover your personal number, daily color, special time, positive message and symbolic daily inspiration based on your birthday.',
}

type Phase = 'idle' | 'loading' | 'done'

export default function Home() {
  const { profile, saveProfile, noteGeneratedToday, hasGeneratedToday } = useLocalProfile()
  const { experience, generate, reset } = useDailyExperience()

  const [phase, setPhase] = useState<Phase>('idle')
  const [pendingBirthDate, setPendingBirthDate] = useState<Date | null>(null)
  const [pendingName, setPendingName] = useState<string | undefined>(undefined)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    applySeoMeta(HOME_META)
    applyFaqStructuredData(FAQ_ITEMS.map((item) => ({ q: item.q, a: item.a })))
    applyOrganizationStructuredData()
  }, [])

  const revealFromStored = useCallback(() => {
    const stored = storedBirthdayToDate(profile.birthday)
    if (!stored) return
    if (hasGeneratedToday()) {
      generate({ birthDate: stored, name: profile.name })
      setPhase('done')
    }
  }, [profile.birthday, profile.name, hasGeneratedToday, generate])

  useEffect(() => {
    revealFromStored()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = useCallback(
    ({ birthDate, name }: { birthDate: Date; name?: string }) => {
      setPendingBirthDate(birthDate)
      setPendingName(name)
      saveProfile({ birthday: birthdayLabel(birthDate), name })
      setPhase('loading')
    },
    [saveProfile],
  )

  const handleLoadingComplete = useCallback(() => {
    if (!pendingBirthDate) {
      setPhase('idle')
      return
    }
    generate({ birthDate: pendingBirthDate, name: pendingName })
    noteGeneratedToday()
    setPhase('done')
    window.setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }, [pendingBirthDate, pendingName, generate, noteGeneratedToday])

  const restart = useCallback(() => {
    reset()
    setPhase('idle')
    setPendingBirthDate(null)
    setPendingName(undefined)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [reset])

  return (
    <div className="cosmic-bg relative min-h-screen overflow-x-clip">
      <Hero busy={phase !== 'idle'}>
        <AnimatePresence mode="wait">
          {phase === 'loading' ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingExperience onComplete={handleLoadingComplete} />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <BirthdayForm
                defaultBirthday={profile.birthday}
                defaultName={profile.name}
                busy={false}
                onSubmit={handleSubmit}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Hero>

      <div ref={resultsRef}>
        {experience && phase === 'done' && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <DailyDashboard experience={experience} />

            <section className="mx-auto w-full max-w-3xl px-4 sm:px-6" aria-labelledby="explore-heading">
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                  Explore details
                </p>
                <p className="mt-1 text-xl text-mute">
                  Take your time — every card tells a little more. ✨
                </p>
              </div>
            </section>

            <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 sm:px-6">
              <NumberCard experience={experience} />
              <ColorCard experience={experience} />
              <MomentCard experience={experience} />
              <EnergyCard experience={experience} />
              <FocusCard experience={experience} />
              <StyleCard experience={experience} />
              <MessageCard experience={experience} />
              <LoveCard experience={experience} />
              <CareerCard experience={experience} />
              <GrowthCard experience={experience} />
              <AffirmationCard experience={experience} />
            </div>

            <section className="mx-auto w-full max-w-3xl px-4 pt-10 sm:px-6">
              <div className="panel flex flex-col items-center gap-4 rounded-3xl p-8 text-center sm:p-10">
                <p className="text-3xl" aria-hidden="true">
                  🌙
                </p>
                <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Come back tomorrow ✨
                </h2>
                <p className="max-w-md text-mute">
                  Same birthday, new date — a brand-new daily experience awaits.
                  It only takes a second.
                </p>
                <button
                  type="button"
                  onClick={restart}
                  className="mt-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-mute transition-colors hover:border-accent/40 hover:text-ink"
                >
                  Generate mine again
                </button>
              </div>
            </section>
          </motion.div>
        )}
      </div>

      {phase !== 'done' && experience === null && <SeoContentSections />}

      <Disclaimer />
      <FAQ />
    </div>
  )
}