import { AnimatePresence, motion } from 'motion/react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../../lib/ScrollToTop'
import { EASE } from '../../lib/motion'

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen relative overflow-x-clip flex flex-col">
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
