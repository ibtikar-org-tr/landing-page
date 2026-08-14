import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Logomark } from '@/components/logomark'
import { useLocale } from '@/i18n/locale-provider'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t, dir } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const onDark = !scrolled

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#journey', label: t.nav.journey },
    { href: '#projects', label: t.nav.projects },
    { href: '#clubs', label: t.nav.clubs },
    { href: '#members', label: t.nav.members },
    { href: '#team', label: t.nav.team },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label={t.nav.homeAria}>
          <Logomark dark={onDark} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.nav.primaryNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'font-mono text-[13px] uppercase tracking-[0.12em] transition-colors',
                onDark
                  ? 'text-navy-foreground/70 hover:text-navy-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher onDark={onDark} />
          <a
            href="https://vms.ibtikar.tr/registration"
            target="_blank"
            rel="noreferrer"
            className={cn(
              'group inline-flex items-center gap-1.5 border px-4 py-2 font-mono text-[13px] uppercase tracking-[0.1em] transition-colors',
              onDark
                ? 'border-navy-foreground/30 bg-transparent text-navy-foreground hover:border-accent hover:text-accent'
                : 'border-foreground bg-foreground text-primary-foreground hover:bg-accent hover:border-accent',
            )}
          >
            {t.nav.joinUs}
            <ArrowUpRight
              className={cn(
                'size-3.5 transition-transform',
                dir === 'rtl'
                  ? 'group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 -scale-x-100'
                  : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
              )}
            />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher onDark={onDark} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex items-center justify-center border p-2 transition-colors',
              onDark
                ? 'border-navy-foreground/30 text-navy-foreground'
                : 'border-border text-foreground',
            )}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label={t.nav.mobileNav}
          className={cn(
            'border-t px-5 py-6 lg:hidden',
            onDark
              ? 'border-navy-foreground/15 bg-navy text-navy-foreground'
              : 'border-border bg-background text-foreground',
          )}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'font-mono text-sm uppercase tracking-[0.12em]',
                    onDark ? 'text-navy-foreground' : 'text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://vms.ibtikar.tr/registration"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className={cn(
                  'inline-flex items-center gap-1.5 border px-4 py-2 font-mono text-[13px] uppercase tracking-[0.1em]',
                  onDark
                    ? 'border-navy-foreground/30 text-navy-foreground'
                    : 'border-foreground bg-foreground text-primary-foreground',
                )}
              >
                {t.nav.joinUs}
                <ArrowUpRight className={cn('size-3.5', dir === 'rtl' && '-scale-x-100')} />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
