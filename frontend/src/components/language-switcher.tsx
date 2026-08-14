import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Languages } from 'lucide-react'
import { useLocale } from '@/i18n/locale-provider'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
  align?: 'start' | 'end'
  /** When true, header sits over the dark hero — use light chrome. */
  onDark?: boolean
}

export function LanguageSwitcher({ className, align = 'end', onDark = false }: LanguageSwitcherProps) {
  const { lang, setLang, langs } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()
  const current = langs.find((item) => item.code === lang) ?? langs[0]

  useEffect(() => {
    if (!open) return

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          'inline-flex items-center gap-1.5 border px-3 py-2 font-mono text-[13px] uppercase tracking-[0.1em] transition-colors',
          onDark
            ? 'border-navy-foreground/30 text-navy-foreground hover:border-navy-foreground/70'
            : 'border-border text-foreground hover:border-foreground',
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
      >
        <Languages className="size-3.5" aria-hidden="true" />
        <span>{current.label}</span>
        <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
      </button>

      {open ? (
        <ul
          id={menuId}
          role="listbox"
          aria-label="Language"
          className={cn(
            'absolute top-full z-50 mt-2 min-w-full border py-1 shadow-sm',
            align === 'start' ? 'start-0' : 'end-0',
            onDark
              ? 'border-navy-foreground/20 bg-navy text-navy-foreground'
              : 'border-border bg-background text-foreground',
          )}
        >
          {langs.map((item) => (
            <li key={item.code} role="option" aria-selected={lang === item.code}>
              <button
                type="button"
                onClick={() => {
                  setLang(item.code)
                  setOpen(false)
                }}
                className={cn(
                  'flex w-full items-center px-3 py-2 text-start font-mono text-[13px] tracking-[0.08em] transition-colors',
                  lang === item.code
                    ? onDark
                      ? 'bg-navy-foreground text-navy'
                      : 'bg-foreground text-primary-foreground'
                    : onDark
                      ? 'text-navy-foreground hover:bg-navy-foreground/10'
                      : 'text-foreground hover:bg-secondary',
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
