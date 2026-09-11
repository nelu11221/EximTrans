import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router'
import { services, type Service } from '../../data/site'
import { child, stagger, viewport } from '../../lib/motion'
import Reveal from '../ui/Reveal'

export function ServiceCard({ slug, icon: Icon, title, description, features, featured }: Service) {
  const base = 'group p-10 rounded-3xl relative overflow-hidden transition-all duration-300 scroll-mt-28'
  const style = featured
    ? 'bg-white border-2 border-ink shadow-hard hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg'
    : 'bg-gray-50 border border-gray-100 hover:border-brand hover:-translate-y-2'

  return (
    <motion.article id={slug} variants={child} className={`${base} ${style}`}>
      {!featured && <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-bl-full" />}
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 transition-transform duration-300 ${
          featured ? 'bg-brand' : 'bg-ink group-hover:scale-110'
        }`}
      >
        <Icon size={30} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-8">{description}</p>
      <ul className="space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 font-semibold text-sm">
            <CheckCircle2 size={16} className="text-brand shrink-0" /> {f}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

/** Home page preview: first three services. Full list lives on /servicii. */
export default function Services() {
  const preview = services.slice(0, 3)
  return (
    <section className="py-24 lg:py-32 bg-white" id="servicii">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-display mb-6">
              CAPABILITĂȚI LOGISTICE <br className="hidden sm:block" />
              FĂRĂ EGAL
            </h2>
            <p className="text-xl text-gray-600">
              Nu mutăm doar cutii; orchestrăm lanțuri de aprovizionare. Serviciile noastre specializate sunt construite
              pentru fiabilitate și viteză.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/servicii"
              className="text-brand font-black uppercase tracking-widest flex items-center gap-2 group whitespace-nowrap"
            >
              Toate serviciile
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {preview.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
