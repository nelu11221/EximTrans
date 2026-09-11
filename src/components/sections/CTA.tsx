import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Truck } from 'lucide-react'
import { cta } from '../../data/site'
import { EASE, viewport } from '../../lib/motion'
import Button from '../ui/Button'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const truckRotate = useTransform(scrollYProgress, [0, 1], [-30, 0])
  const truckX = useTransform(scrollYProgress, [0, 1], [80, -40])

  return (
    <motion.div
      ref={ref}
      id="contact"
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 1, ease: EASE }}
      className="bg-brand rounded-[40px] p-10 sm:p-12 lg:p-24 relative overflow-hidden mb-24 lg:mb-32 scroll-mt-32"
    >
      <motion.div
        style={{ rotate: truckRotate, x: truckX }}
        aria-hidden
        className="absolute -right-32 -bottom-32 text-white opacity-20 pointer-events-none"
      >
        <Truck size={400} strokeWidth={1.5} />
      </motion.div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display text-white leading-tight mb-8">
          {cta.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="text-xl text-white/90 mb-10">{cta.lead}</p>
        <div className="flex flex-wrap gap-4">
          <Button to={cta.primary.to} variant="white">
            {cta.primary.label}
          </Button>
          <Button to={cta.secondary.to} variant="ink" className="hover:bg-white hover:text-ink">
            {cta.secondary.label}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
