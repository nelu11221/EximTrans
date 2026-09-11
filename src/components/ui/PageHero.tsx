import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { child, stagger } from '../../lib/motion'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  lead?: string
  children?: ReactNode
}

/** Compact dark hero used on inner pages. */
export default function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative pt-20 bg-ink text-white overflow-hidden">
      <div className="absolute -right-24 top-0 w-1/2 h-full bg-brand opacity-10 blur-[120px] pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <motion.div
        variants={stagger(0.12, 0.1)}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 pt-20 pb-20 lg:pt-28 lg:pb-28 relative z-10"
      >
        <motion.div
          variants={child}
          className="inline-flex items-center gap-2 bg-brand text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6"
        >
          {eyebrow}
        </motion.div>
        <motion.h1 variants={child} className="text-5xl sm:text-6xl lg:text-7xl font-display leading-[0.95] mb-6 max-w-4xl">
          {title}
        </motion.h1>
        {lead && (
          <motion.p variants={child} className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            {lead}
          </motion.p>
        )}
        {children && (
          <motion.div variants={child} className="mt-10">
            {children}
          </motion.div>
        )}
      </motion.div>
      <div className="h-6 bg-brand -skew-y-1 origin-left translate-y-3" aria-hidden />
    </section>
  )
}
