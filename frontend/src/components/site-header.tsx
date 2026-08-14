import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logomark } from '@/components/logomark'
import { useLocale } from '@/i18n/locale-provider'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t, lang, setLang, langs, dir } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
          <Logomark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.nav.primaryNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 font-mono text-[13px] tracking-[0.12em]">
            {langs.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLang(item.code)}
                className={cn(
                  'px-1.5 py-1 uppercase transition-colors',
                  lang === item.code
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
                aria-pressed={lang === item.code}
              >
                {item.label}
              </button>
            ))}
          </div>
          <a
            href="https://vms.ibtikar.tr/registration"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 border border-foreground bg-foreground px-4 py-2 font-mono text-[13px] uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-accent hover:border-accent"
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

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center border border-border p-2 lg:hidden"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label={t.nav.mobileNav} className="border-t border-border bg-background px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.12em] text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex flex-wrap gap-2 pt-2">
              {langs.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLang(item.code)}
                  className={cn(
                    'border px-3 py-1.5 font-mono text-[13px] uppercase tracking-[0.1em]',
                    lang === item.code
                      ? 'border-foreground bg-foreground text-primary-foreground'
                      : 'border-border text-foreground',
                  )}
                >
                  {item.label}
                </button>
              ))}
            </li>
            <li className="pt-2">
              <a
                href="https://vms.ibtikar.tr/registration"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 border border-foreground bg-foreground px-4 py-2 font-mono text-[13px] uppercase tracking-[0.1em] text-primary-foreground"
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
