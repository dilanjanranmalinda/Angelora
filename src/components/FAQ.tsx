import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'
import { FAQ_ITEMS } from '@/data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-center text-3xl font-bold text-ink sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-mute">
        Honest, plain-language answers — including the ways this is just for
        reflection.
      </p>

      <div className="mt-10 space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const open = openIndex === index
          return (
            <div key={item.q} className="panel overflow-hidden rounded-2xl">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-base font-semibold text-ink">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    'shrink-0 text-mute transition-transform duration-200',
                    open && 'rotate-180 text-accent',
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 leading-relaxed text-mute">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}