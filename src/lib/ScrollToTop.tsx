import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Scrolls to top on route change, or to the hash target if present. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        // wait for page entrance animation to lay out
        const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150)
        return () => clearTimeout(t)
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}
