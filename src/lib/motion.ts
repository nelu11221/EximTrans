import type { Transition, Variants } from 'motion/react'

export const EASE = [0.22, 1, 0.36, 1] as const

export const viewport = { once: true, margin: '-80px 0px' } as const

export const spring: Transition = { type: 'spring', stiffness: 260, damping: 22 }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 160 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: EASE, delay: 0.5 } },
}

export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const child: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

export const childScale: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: spring },
}
