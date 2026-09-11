import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

type Variant = 'brand' | 'ink' | 'white' | 'outline'
type Size = 'sm' | 'lg'

const variants: Record<Variant, string> = {
  brand: 'bg-brand text-white hover:bg-white hover:text-brand',
  ink: 'bg-ink text-white hover:bg-brand',
  white: 'bg-white text-brand hover:bg-ink hover:text-white',
  outline: 'border-2 border-white/20 text-white backdrop-blur-md hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  sm: 'px-8 py-3 rounded-full font-bold',
  lg: 'px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-black uppercase tracking-wider text-base sm:text-lg',
}

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  variant?: Variant
  size?: Size
  children: ReactNode
  /** Internal route (react-router Link) */
  to?: string
  /** External / anchor href */
  href?: string
  type?: 'button' | 'submit'
}

export default function Button({
  variant = 'brand',
  size = 'lg',
  className = '',
  children,
  to,
  href,
  type,
  ...rest
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type ?? 'button'} className={cls} {...(rest as object)}>
      {children}
    </button>
  )
}
