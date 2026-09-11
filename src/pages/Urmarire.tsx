import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, Circle, PackageSearch, Truck } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import { EASE } from '../lib/motion'

type Step = { label: string; place: string; time: string; done: boolean; current?: boolean }

/** Demo only – replace with a real API call. */
function mockLookup(code: string): Step[] | null {
  if (!/^EX[A-Z0-9]{6,}$/i.test(code.trim())) return null
  return [
    { label: 'Comandă preluată', place: 'București, RO', time: 'Luni 08:15', done: true },
    { label: 'Încărcat', place: 'Depozit EximTrans, Ilfov', time: 'Luni 11:40', done: true },
    { label: 'În tranzit', place: 'Autostrada M1, HU', time: 'Marți 06:20', done: true, current: true },
    { label: 'Vămuire / punct control', place: 'Nickelsdorf, AT', time: 'estimat Marți 14:00', done: false },
    { label: 'Livrat', place: 'München, DE', time: 'estimat Miercuri 09:00', done: false },
  ]
}

export default function Urmarire() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState<Step[] | null | undefined>(undefined)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setResult(mockLookup(code))
  }

  return (
    <>
      <PageHero
        eyebrow="Urmărire expediere"
        title={
          <>
            UNDE E <span className="text-brand">MARFA TA?</span>
          </>
        }
        lead="Introdu codul expedierii (ex. EX123456) și vezi în timp real fiecare etapă a transportului."
      >
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
          <label className="sr-only" htmlFor="tracking-code">
            Cod expediere
          </label>
          <input
            id="tracking-code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="EX123456"
            autoComplete="off"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-6 py-5 font-bold uppercase tracking-widest focus:outline-none focus:border-brand focus:bg-white/15 transition-colors"
          />
          <Button type="submit" variant="brand">
            <PackageSearch size={20} /> Caută
          </Button>
        </form>
      </PageHero>

      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {result === undefined && (
              <motion.p key="idle" exit={{ opacity: 0 }} className="text-center text-gray-500 text-lg">
                Nu ai un cod la îndemână? Sună dispeceratul non-stop și îți spunem imediat statusul.
              </motion.p>
            )}

            {result === null && (
              <motion.div
                key="err"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-10 text-center"
              >
                <h2 className="text-2xl font-bold mb-2">Cod negăsit</h2>
                <p className="text-gray-600">
                  Verifică formatul codului (începe cu <strong>EX</strong>) sau contactează dispeceratul.
                </p>
              </motion.div>
            )}

            {result && (
              <motion.div
                key="ok"
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
              >
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <span className="text-brand font-black uppercase tracking-widest text-sm">Expediere</span>
                    <h2 className="text-3xl font-display uppercase">{code.toUpperCase()}</h2>
                  </div>
                  <div className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-full font-bold text-sm">
                    <Truck size={16} /> În tranzit
                  </div>
                </div>

                <ol className="relative border-l-2 border-gray-200 ml-3">
                  {result.map((s) => (
                    <motion.li
                      key={s.label}
                      variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { ease: EASE, duration: 0.6 } } }}
                      className="pl-10 pb-10 last:pb-0 relative"
                    >
                      <span
                        className={`absolute -left-[13px] top-0 w-6 h-6 rounded-full flex items-center justify-center bg-white ${
                          s.done ? 'text-brand' : 'text-gray-300'
                        }`}
                      >
                        {s.done ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                        {s.current && (
                          <span className="absolute inset-0 rounded-full bg-brand/30 animate-ping" aria-hidden />
                        )}
                      </span>
                      <h3 className={`text-lg font-bold ${s.done ? '' : 'text-gray-400'}`}>{s.label}</h3>
                      <p className="text-gray-500">
                        {s.place} · {s.time}
                      </p>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
