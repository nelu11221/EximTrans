import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { hero, stats } from '../../data/site'
import { child, slideRight, stagger } from '../../lib/motion'
import Button from '../ui/Button'
import Counter from '../ui/Counter'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="top" className="relative pt-20 overflow-hidden bg-ink">
      {/* Parallax background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 opacity-40 will-change-transform">
        <img src={hero.image} alt="Camion EximTrans pe autostradă" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-40 lg:pb-48 relative z-10"
      >
        <motion.div variants={stagger(0.12, 0.2)} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div
            variants={child}
            className="inline-flex items-center gap-2 bg-brand text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6"
          >
            <span className="animate-pulse">●</span> {hero.badge}
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display text-white leading-[0.9] mb-8">
            {hero.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '110%' },
                    show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className={`block ${i === 1 ? 'text-brand' : ''}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={child} className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            {hero.lead}
          </motion.p>

          <motion.div variants={child} className="flex flex-wrap gap-4">
            <Button to={hero.primaryCta.to} variant="brand">
              {hero.primaryCta.label}
            </Button>
            <Button to={hero.secondaryCta.to} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating skewed stats band */}
      <motion.div
        variants={slideRight}
        initial="hidden"
        animate="show"
        className="absolute bottom-0 right-0 w-full lg:w-1/2 bg-brand p-12 -skew-x-12 translate-x-12 translate-y-6 hidden lg:block"
      >
        <div className="flex justify-around items-center text-white skew-x-12">
          {stats.map((s, i) => (
            <div key={s.label} className="contents">
              {i > 0 && <div className="w-px h-12 bg-white/20" />}
              <div className="text-center">
                <div className="text-4xl font-black tabular-nums">
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mobile stats (band hidden < lg) */}
      <div className="lg:hidden bg-brand text-white grid grid-cols-3 divide-x divide-white/20 relative z-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-6 px-2">
            <div className="text-2xl font-black tabular-nums">
              <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
