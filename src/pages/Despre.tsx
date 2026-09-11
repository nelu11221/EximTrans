import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { timeline, values } from '../data/site'
import { child, childScale, stagger, viewport } from '../lib/motion'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Mission from '../components/sections/Mission'
import CTA from '../components/sections/CTA'

function Timeline() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <ol ref={ref} className="relative max-w-3xl mx-auto">
      {/* progress line drawn by scroll */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" aria-hidden />
      <motion.div
        style={{ scaleY: lineScale }}
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand -translate-x-1/2 origin-top"
        aria-hidden
      />
      {timeline.map((t, i) => {
        const left = i % 2 === 0
        return (
          <motion.li
            key={t.year}
            initial={{ opacity: 0, x: left ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`relative pl-16 md:pl-0 pb-14 last:pb-0 md:w-1/2 ${left ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}
          >
            <span
              className={`absolute top-1 left-6 md:left-auto w-4 h-4 rounded-full bg-brand ring-4 ring-white -translate-x-1/2 ${
                left ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
              }`}
              aria-hidden
            />
            <span className="text-brand font-display text-4xl leading-none block mb-2">{t.year}</span>
            <h3 className="text-xl font-bold mb-2">{t.title}</h3>
            <p className="text-gray-600">{t.text}</p>
          </motion.li>
        )
      })}
    </ol>
  )
}

export default function Despre() {
  return (
    <>
      <PageHero
        eyebrow="Despre noi"
        title={
          <>
            17 ANI PE DRUMURILE <br />
            <span className="text-brand">EUROPEI.</span>
          </>
        }
        lead="EximTrans este o companie românească de transport și logistică, crescută de la 3 camioane la o flotă de peste 150 de vehicule — cu aceeași obsesie pentru punctualitate."
      />

      <Mission />

      {/* Values */}
      <section id="valori" className="py-24 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Valorile noastre"
            title="CE NE GHIDEAZĂ ÎN FIECARE ZI"
            align="center"
            className="mb-20"
          />
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={child}
                className="group bg-gray-50 border border-gray-100 hover:border-brand rounded-3xl p-8 transition-all hover:-translate-y-2"
              >
                <motion.div
                  variants={childScale}
                  className="w-14 h-14 rounded-2xl bg-ink text-white flex items-center justify-center mb-6 group-hover:bg-brand transition-colors"
                >
                  <Icon size={26} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Istoric" title="DRUMUL NOSTRU PÂNĂ AICI" align="center" className="mb-20" />
          <Timeline />
        </div>
      </section>

      <section className="pt-24 lg:pt-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <CTA />
        </div>
      </section>
    </>
  )
}
