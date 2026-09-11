import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = {
  eyebrow?: string
  title: ReactNode
  lead?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export default function SectionHeading({ eyebrow, title, lead, align = 'left', dark, className = '' }: Props) {
  return (
    <Reveal className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4">{eyebrow}</span>
      )}
      <h2 className={`text-4xl sm:text-5xl font-display mb-6 ${dark ? 'text-white' : ''}`}>{title}</h2>
      {lead && <p className={`text-xl ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{lead}</p>}
    </Reveal>
  )
}
