import { useEffect, useRef, useState } from 'react'

type Option = { value: string; label: string }

type CustomSelectProps = {
  options: Option[]
  value: string
  onChange: (value: string) => void
  label: string
  'aria-label': string
  placeholder?: string
}

const triggerClass =
  'w-full rounded-lg px-3 py-2 text-left bg-white/50 dark:bg-white/10 border border-white/50 dark:border-white/20 text-neutral-900 dark:text-white focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 outline-none min-w-[140px]'

export function CustomSelect({
  options,
  value,
  onChange,
  label,
  'aria-label': ariaLabel,
  placeholder = '選択',
}: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selectedLabel = value ? options.find((o) => o.value === value)?.label ?? value : placeholder

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div ref={ref} className="relative flex flex-col gap-1">
      <span className="text-xs text-neutral-500 dark:text-neutral-400">{label}</span>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((prev) => !prev)}
        className={triggerClass + ' flex items-center justify-between gap-2'}
      >
        <span>{selectedLabel}</span>
        <span className="text-neutral-500 dark:text-neutral-400" aria-hidden>
          {open ? '▲' : '▼'}
        </span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 top-full z-50 mt-1 max-h-60 overflow-auto rounded-lg border border-white/30 dark:border-white/20 bg-slate-100 dark:bg-slate-800 text-neutral-900 dark:text-white shadow-lg py-1 min-w-[160px]"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              className={
                'px-3 py-2 cursor-pointer hover:bg-white/60 dark:hover:bg-white/15 ' +
                (value === opt.value ? 'bg-indigo-100 dark:bg-indigo-900/50' : '')
              }
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
