import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logomark } from '@/components/logomark'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#clubs', label: 'Clubs' },
  { href: '#members', label: 'Members' },
  { href: '#team', label: 'Team' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
        <a href="#top" aria-label="IBTIKAR Assembly home">
          <Logomark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
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
          <span className="font-mono text-[13px] tracking-[0.12em] text-muted-foreground">EN</span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 border border-foreground bg-foreground px-4 py-2 font-mono text-[13px] uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-accent hover:border-accent"
          >
            Join Us
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center border border-border p-2 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
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
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 border border-foreground bg-foreground px-4 py-2 font-mono text-[13px] uppercase tracking-[0.1em] text-primary-foreground"
              >
                Join Us
                <ArrowUpRight className="size-3.5" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
