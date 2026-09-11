import { motion } from 'motion/react'
import { process, services } from '../data/site'
import { child, childScale, stagger, viewport } from '../lib/motion'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/sections/Services'
import CTA from '../components/sections/CTA'

export default function Servicii() {
  return (
    <>
      <PageHero
        eyebrow="Servicii"
        title={
          <>
            SOLUȚII DE TRANSPORT <br />
            <span className="text-brand">PENTRU ORICE MARFĂ.</span>
          </>
        }
        lead="De la un singur palet până la contracte de distribuție națională, avem serviciul, vehiculul și echipa potrivită."
      />

      {/* All services */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Ce facem"
            title="ȘASE SERVICII, UN SINGUR PARTENER"
            lead="Alege serviciul potrivit sau combină-le — dispecerul tău dedicat se ocupă de restul."
            className="mb-20"
          />
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-brand opacity-10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeading
            dark
            eyebrow="Cum lucrăm"
            title="DE LA CERERE LA LIVRARE ÎN 4 PAȘI"
            lead="Un proces simplu, transparent și urmăribil în fiecare etapă."
            className="mb-20"
          />
          <motion.ol
            variants={stagger(0.18)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {/* connector line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10" aria-hidden />
            {process.map(({ icon: Icon, title, text }, i) => (
              <motion.li key={title} variants={child} className="relative">
                <motion.div
                  variants={childScale}
                  className="w-16 h-16 rounded-2xl bg-brand text-white flex items-center justify-center mb-6 relative z-10"
                >
                  <Icon size={28} />
                </motion.div>
                <span className="absolute top-0 right-0 text-7xl font-display text-white/5 leading-none select-none">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </motion.li>
            ))}
          </motion.ol>
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
