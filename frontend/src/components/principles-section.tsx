import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'

export function PrinciplesSection() {
  const { t } = useLocale()

  return (
    <section className="border-y border-border bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.02" title={t.values.label} tone="light" />

        <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-5">
          {t.values.items.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between gap-6 bg-card p-6 transition-colors hover:bg-background"
            >
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-base font-bold uppercase tracking-tight text-foreground">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
