import { ArrowUpRight, Share2, Send, Mail, MessageCircle, GitBranch, FileText } from 'lucide-react'
import { Logomark } from '@/components/logomark'
import { useLocale } from '@/i18n/locale-provider'
import { cn } from '@/lib/utils'

const CONNECT_HREFS = [
  { href: 'https://www.instagram.com/ibtikar.org.tr', key: 'instagram' as const, icon: Share2 },
  { href: 'https://www.linkedin.com/company/ibtikar-org-tr', key: 'linkedin' as const, icon: Send },
  { href: 'https://wa.me/905078222022', key: 'whatsapp' as const, icon: MessageCircle },
  { href: 'mailto:relations@ibtikar.org.tr', key: 'email' as const, icon: Mail },
  { href: 'https://github.com/ibtikar-org-tr', key: 'github' as const, icon: GitBranch },
  { href: 'https://github.com/ibtikar-org-tr/bylaws', key: 'bylaws' as const, icon: FileText },
]

export function SiteFooter() {
  const { t, dir } = useLocale()

  return (
    <footer id="contact" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logomark dark />
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-navy-foreground/70">
              {t.footer.blurb}
            </p>
            <a
              href="mailto:relations@ibtikar.org.tr"
              className="mt-8 inline-flex items-center gap-2 border border-navy-foreground/30 px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] transition-colors hover:border-accent hover:text-accent"
            >
              {t.footer.getInTouch}
              <ArrowUpRight className={cn('size-4', dir === 'rtl' && '-scale-x-100')} />
            </a>
          </div>

          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-navy-foreground/50">
              {t.footer.connect}
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {CONNECT_HREFS.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="inline-flex items-center gap-2 text-navy-foreground/80 hover:text-accent"
                  >
                    <item.icon className="size-4" /> {t.footer[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-navy-foreground/50">
              {t.footer.partners}
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {t.footer.partnerNames.map((partner) => (
                <li key={partner} className="font-mono text-sm tracking-tight text-navy-foreground/80">
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-navy-foreground/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs tracking-[0.05em] text-navy-foreground/50">{t.footer.rights}</p>
          <p className="font-mono text-xs tracking-[0.05em] text-navy-foreground/50">
            {t.footer.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
