import { Target, Users2, Rocket, Lightbulb, HeartHandshake } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'

const ICONS = [Users2, Lightbulb, HeartHandshake, Target, Rocket]

export function AimsSection() {
  const { t } = useLocale()

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.04" title={t.aims.label} tone="light" />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.aims.items.map((aim, index) => {
            const Icon = ICONS[index] ?? Target
            return (
              <div key={aim.title} className="border-t-2 border-accent pt-6">
                <Icon className="size-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 font-mono text-base font-bold uppercase leading-snug tracking-tight text-foreground">
                  {aim.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{aim.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
