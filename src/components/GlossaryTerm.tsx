import { useState, useId, type ReactNode } from 'react'
import { GLOSSARY } from '../data/glossary'
import { useGlossaryNavigation } from '../contexts/GlossaryNavigationContext'

type GlossaryTermProps = {
  /** 用語のキー（glossary.ts の GLOSSARY のキー） */
  name: string
  children: ReactNode
}

export function GlossaryTerm({ name, children }: GlossaryTermProps) {
  const [visible, setVisible] = useState(false)
  const baseId = useId()
  const nav = useGlossaryNavigation()
  const text = GLOSSARY[name]

  if (!text) {
    return <>{children}</>
  }

  const id = `glossary-${name}-${baseId.replace(/:/g, '')}`

  const handleClick = () => {
    if (nav?.navigateToTerm) nav.navigateToTerm(name)
  }

  return (
    <span className="relative inline">
      <span
        id={id}
        role={nav?.navigateToTerm ? 'button' : undefined}
        tabIndex={0}
        aria-describedby={visible ? `${id}-tip` : undefined}
        className={`border-b border-dotted border-neutral-500 dark:border-neutral-400 border-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:focus-visible:ring-indigo-500 rounded px-0.5 ${nav?.navigateToTerm ? 'cursor-pointer hover:bg-white/20 dark:hover:bg-white/10' : 'cursor-help'}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        onClick={handleClick}
      >
        {children}
      </span>
      {visible && (
        <span
          id={`${id}-tip`}
          role="tooltip"
          className="absolute left-0 bottom-full z-50 mb-1.5 min-w-[16rem] max-w-sm w-max px-3 py-2 text-sm rounded-lg bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800 shadow-lg border border-neutral-600 dark:border-neutral-300 pointer-events-none whitespace-normal"
        >
          {text}
        </span>
      )}
    </span>
  )
}
