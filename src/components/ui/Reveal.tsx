import { motion, type HTMLMotionProps } from 'motion/react'
import { fadeUp, viewport } from '../../lib/motion'

type RevealProps = HTMLMotionProps<'div'> & { delay?: number }

/** Fade-up on first scroll into view. Respects prefers-reduced-motion via MotionConfig in App. */
export default function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
