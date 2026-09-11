import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, Send } from 'lucide-react'
import { brand, contactInfo, services } from '../data/site'
import { child, stagger, viewport } from '../lib/motion'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'

const field =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 font-medium focus:outline-none focus:border-brand focus:bg-white transition-colors'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: wire to backend / email service
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            HAI SĂ <span className="text-brand">VORBIM.</span>
          </>
        }
        lead="Trimite-ne detaliile transportului și primești o ofertă în maxim 2 ore în timpul programului."
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Info */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-2 space-y-8"
          >
            <motion.h2 variants={child} className="text-4xl font-display">
              DATE DE CONTACT
            </motion.h2>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} variants={child} className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full border border-brand text-brand flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-sm font-black uppercase tracking-widest text-gray-400 mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="text-lg font-bold hover:text-brand transition-colors">
                      {value}
                    </a>
                  ) : (
                    <div className="text-lg font-bold">{value}</div>
                  )}
                </div>
              </motion.div>
            ))}
            <motion.div variants={child} className="bg-ink text-white rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand rounded-full blur-3xl opacity-40" />
              <h3 className="text-2xl font-display mb-2 relative">DISPECERAT 24/7</h3>
              <p className="text-gray-400 mb-4 relative">Pentru transporturi în curs și urgențe, sună oricând.</p>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="text-2xl font-black text-brand relative">
                {brand.phone}
              </a>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-3 bg-white border-2 border-ink rounded-3xl p-8 lg:p-12 shadow-hard"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle2 size={64} className="text-brand mx-auto mb-6" />
                  <h3 className="text-3xl font-display mb-3">MULȚUMIM!</h3>
                  <p className="text-gray-600 mb-8">Am primit cererea ta. Un consultant EximTrans revine în cel mai scurt timp.</p>
                  <Button variant="ink" size="sm" onClick={() => setSent(false)}>
                    Trimite altă cerere
                  </Button>
                </motion.div>
              ) : (
                <motion.form key="form" exit={{ opacity: 0 }} onSubmit={onSubmit} className="space-y-6">
                  <h3 className="text-3xl font-display mb-2">CERE OFERTĂ</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nume" className="block text-sm font-bold mb-2">Nume complet *</label>
                      <input id="nume" name="nume" required className={field} placeholder="Ion Popescu" />
                    </div>
                    <div>
                      <label htmlFor="firma" className="block text-sm font-bold mb-2">Companie</label>
                      <input id="firma" name="firma" className={field} placeholder="SC Exemplu SRL" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold mb-2">Email *</label>
                      <input id="email" name="email" type="email" required className={field} placeholder="ion@exemplu.ro" />
                    </div>
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-bold mb-2">Telefon *</label>
                      <input id="telefon" name="telefon" type="tel" required className={field} placeholder="+40 7xx xxx xxx" />
                    </div>
                    <div>
                      <label htmlFor="serviciu" className="block text-sm font-bold mb-2">Serviciu</label>
                      <select id="serviciu" name="serviciu" className={field} defaultValue="">
                        <option value="" disabled>Alege serviciul</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="ruta" className="block text-sm font-bold mb-2">Rută (de la → la)</label>
                      <input id="ruta" name="ruta" className={field} placeholder="București → München" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="mesaj" className="block text-sm font-bold mb-2">Detalii marfă *</label>
                    <textarea
                      id="mesaj"
                      name="mesaj"
                      required
                      rows={5}
                      className={field}
                      placeholder="Tip marfă, greutate, număr paleți, dată dorită de încărcare…"
                    />
                  </div>
                  <label className="flex items-start gap-3 text-sm text-gray-600">
                    <input type="checkbox" required className="mt-1 accent-brand" />
                    Sunt de acord cu prelucrarea datelor conform politicii de confidențialitate.
                  </label>
                  <Button type="submit" variant="brand" className="w-full sm:w-auto">
                    <Send size={20} /> Trimite cererea
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}
