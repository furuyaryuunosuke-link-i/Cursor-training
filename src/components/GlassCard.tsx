import { type ReactNode } from 'react'

type GlassCardProps = {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={
        'rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-lg p-5 ' +
        className
      }
    >
      {children}
    </div>
  )
}
