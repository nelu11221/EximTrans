import { motion } from 'motion/react'
import { fleet, fleetHighlights, type Vehicle } from '../data/site'
import { child, EASE, stagger, viewport } from '../lib/motion'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Counter from '../components/ui/Counter'
import Button from '../components/ui/Button'
import CTA from '../components/sections/CTA'

function VehicleCard({ name, type, image, specs, tags }: Vehicle) {
  return (
    <motion.article
      variants={child}
      className="group grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 hover:border-brand transition-colors"
    >
      <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[320px]">
        <motion.img
          src={image}
          alt={`${name} – ${type}`}
          loading="lazy"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={viewport}
          transition={{ duration: 1.2, ease: EASE }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {tags.map((t) => (
            <span key={t} className="bg-ink/80 backdrop-blur text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-8 lg:p-10 flex flex-col">
        <span className="text-brand font-black uppercase tracking-widest text-sm mb-2">{type}</span>
        <h3 className="text-3xl font-display mb-6">{name}</h3>
        <dl className="space-y-3 mb-8">
          {specs.map((s) => (
            <div key={s.label} className="flex justify-between border-b border-gray-200 pb-3">
              <dt className="text-gray-500 font-medium">{s.label}</dt>
              <dd className="font-bold text-right">{s.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto">
          <Button to="/contact" variant="ink" size="sm">
            Rezervă acest vehicul
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Flota() {
  return (
    <>
      <PageHero
        eyebrow="Flotă"
        title={
          <>
            PESTE 150 DE VEHICULE, <br />
            <span className="text-brand">UN SINGUR STANDARD.</span>
          </>
        }
        lead="Flotă proprie, Euro 6, cu vârstă medie sub 4 ani. Fiecare camion este echipat cu GPS, telemetrie și monitorizare a temperaturii acolo unde e cazul."
      />

      {/* Highlights */}
      <section className="bg-brand text-white">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:divide-x divide-white/20"
        >
          {fleetHighlights.map(({ icon: Icon, value, decimals, suffix, label }) => (
            <motion.div key={label} variants={child} className="flex items-center gap-5 sm:justify-center">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                <Icon size={26} />
              </div>
              <div>
                <div className="text-4xl font-black tabular-nums leading-none mb-1">
                  <Counter value={value} decimals={decimals} suffix={suffix} />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Vehicles */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Vehicule"
            title="ALEGE CAPACITATEA POTRIVITĂ"
            lead="Patru tipuri principale de vehicule acoperă peste 95% din cererile clienților noștri."
            className="mb-20"
          />
          <motion.div
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {fleet.map((v) => (
              <VehicleCard key={v.name} {...v} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pt-8 lg:pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <CTA />
        </div>
      </section>
    </>
  )
}
