import { Truck } from 'lucide-react'
import { Link } from 'react-router'
import { brand } from '../../data/site'

export default function Logo({ size = 'md' }: { size?: 'md' | 'sm' }) {
  const box = size === 'md' ? 'w-10 h-10' : 'w-8 h-8'
  const icon = size === 'md' ? 24 : 20
  const text = size === 'md' ? 'text-2xl' : 'text-xl'
  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label={`${brand.name} – acasă`}>
      <div
        className={`${box} bg-brand flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-300`}
      >
        <Truck size={icon} className="text-white" strokeWidth={2.25} />
      </div>
      <span className={`${text} font-display uppercase`}>
        {brand.logo[0]}
        <span className="text-brand">{brand.logo[1]}</span>
      </span>
    </Link>
  )
}
