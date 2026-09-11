import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router'
import { nav } from '../../data/site'
import { EASE } from '../../lib/motion'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

const linkBase =
  'relative font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand after:transition-all'

export default function Header() {
  const { scrollY } = useScroll()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // close drawer on navigation (derive during render instead of an effect)
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  // lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`fixed top-0 w-full z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-gray-100'
          : 'bg-white border-transparent shadow-sm'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <Logo />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigare principală">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'text-brand after:w-full' : 'hover:text-brand after:w-0 hover:after:w-full'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button to="/contact" variant="ink" size="sm">
              Cere ofertă
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
            className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2" aria-label="Navigare mobil">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease: EASE }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block text-2xl font-display uppercase py-3 border-b border-gray-100 transition-colors ${
                        isActive ? 'text-brand' : 'hover:text-brand'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <Button to="/contact" variant="brand" size="lg" className="mt-4">
                Cere ofertă
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
