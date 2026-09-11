import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

type CounterProps = {
  value: number
  decimals?: number
  suffix?: string
  duration?: number
  className?: string
}

/** Counts from 0 to `value` once it scrolls into view. */
export default function Counter({ value, decimals = 0, suffix = '', duration = 1.8, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !inView) return
    if (reduced) {
      el.textContent = value.toFixed(decimals)
      return
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = v.toFixed(decimals)
      },
      onComplete: () => {
        el.textContent = value.toFixed(decimals)
      },
    })
    return () => controls.stop()
  }, [inView, value, decimals, duration, reduced])

  return (
    <span className={className}>
      <span ref={ref}>{reduced ? value.toFixed(decimals) : (0).toFixed(decimals)}</span>
      {suffix}
    </span>
  )
}
