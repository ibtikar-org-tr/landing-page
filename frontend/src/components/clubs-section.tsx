import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'

export function ClubsSection() {
  const { t } = useLocale()

  return (
    <section id="clubs" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.06" title={t.clubs.label} tone="light" />

        <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          {t.clubs.title}
        </h2>

        <ul className="mt-12 grid divide-y divide-border border-t border-b border-border sm:grid-cols-2 sm:divide-x rtl:sm:divide-x-reverse">
          {t.clubs.items.map((club, i) => (
            <li key={club} className="flex items-center justify-between gap-4 py-5 sm:px-8">
              <span className="font-mono text-lg font-medium tracking-tight text-foreground">{club}</span>
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
