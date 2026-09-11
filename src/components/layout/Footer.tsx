import { motion } from 'motion/react'
import { Link } from 'react-router'
import { brand, footer } from '../../data/site'
import { child, stagger, viewport } from '../../lib/motion'
import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-100"
        >
          <motion.div variants={child}>
            <div className="mb-8">
              <Logo size="sm" />
            </div>
            <p className="text-gray-500 mb-6">{brand.tagline}</p>
            <div className="flex gap-4">
              {footer.socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {footer.columns.map((col) => (
            <motion.div key={col.title} variants={child}>
              <h5 className="font-black uppercase tracking-widest text-sm mb-6">{col.title}</h5>
              <ul className="space-y-4 text-gray-500 font-medium">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="hover:text-brand transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-medium">
          <p>{footer.copyright}</p>
          <div className="flex gap-8">
            {footer.legal.map((l) => (
              <Link key={l.label} to={l.to} className="hover:text-brand transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
