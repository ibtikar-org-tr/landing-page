import { ArrowUpRight, Share2, Send, Mail } from 'lucide-react'
import { Logomark } from '@/components/logomark'

const PARTNERS = ['TEKNOFEST', 'T3 Foundation', 'Ensar Foundation', 'Türkiye Youth Foundation']

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logomark dark />
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-navy-foreground/70">
              A volunteer assembly of Arabic-speaking university students building technical skills
              and innovation projects across Turkey.
            </p>
            <a
              href="mailto:info@ibtikar.org.tr"
              className="mt-8 inline-flex items-center gap-2 border border-navy-foreground/30 px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-navy-foreground/50">
              Connect
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-navy-foreground/80 hover:text-accent">
                  <Share2 className="size-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-navy-foreground/80 hover:text-accent">
                  <Send className="size-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ibtikar.org.tr"
                  className="inline-flex items-center gap-2 text-navy-foreground/80 hover:text-accent"
                >
                  <Mail className="size-4" /> Email
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-navy-foreground/50">
              Success Partners
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {PARTNERS.map((partner) => (
                <li key={partner} className="font-mono text-sm tracking-tight text-navy-foreground/80">
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-navy-foreground/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs tracking-[0.05em] text-navy-foreground/50">
            © 2026 IBTIKAR Assembly. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-[0.05em] text-navy-foreground/50">Istanbul, Türkiye</p>
        </div>
      </div>
    </footer>
  )
}
