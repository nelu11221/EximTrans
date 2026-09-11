import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Maximize2 } from 'lucide-react'
import { Link } from 'react-router'
import { mission } from '../../data/site'
import { child, childScale, EASE, stagger, viewport } from '../../lib/motion'
import Reveal from '../ui/Reveal'

export default function Mission() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const ghostX = useTransform(scrollYProgress, [0, 1], [-60, 60])
  const decorY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0])

  return (
    <section ref={ref} id="mission" className="py-20 lg:py-28 bg-ink text-white relative overflow-hidden">
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute right-0 top-0 w-1/3 h-full bg-brand blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Copy */}
        <div className="relative">
          <motion.div
            style={{ x: ghostX }}
            aria-hidden
            className="absolute -left-10 -top-10 text-[140px] lg:text-[200px] font-display text-white/5 select-none leading-none pointer-events-none"
          >
            {mission.ghost}
          </motion.div>

          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-display mb-8 leading-tight">
              {mission.headline[0]} <br />
              <span className="text-brand">{mission.headline[1]}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">{mission.lead}</p>
          </Reveal>

          <motion.div
            variants={stagger(0.18)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-8"
          >
            {mission.points.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} variants={child} className="flex gap-6">
                <motion.div
                  variants={childScale}
                  className="shrink-0 w-12 h-12 rounded-full border border-brand flex items-center justify-center text-brand"
                >
                  <Icon size={22} />
                </motion.div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{title}</h4>
                  <p className="text-gray-500">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fleet image */}
        <div id="fleet" className="relative scroll-mt-32">
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={viewport}
            transition={{ duration: 1.1, ease: EASE }}
            className="relative z-10 rounded-3xl overflow-hidden border border-white/10 group"
          >
            <img
              src={mission.fleet.image}
              alt="Flota modernă EximTrans"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent opacity-60" />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-brand font-black uppercase tracking-widest text-sm">{mission.fleet.eyebrow}</span>
                  <h5 className="text-2xl font-bold">{mission.fleet.model}</h5>
                </div>
                <Link
                  to="/flota"
                  aria-label="Vezi detalii flotă"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink cursor-pointer hover:bg-brand hover:text-white transition-colors"
                >
                  <Maximize2 size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Decor block */}
          <motion.div
            style={{ y: decorY }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand -z-10 rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}
