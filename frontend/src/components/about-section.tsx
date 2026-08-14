import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'

export function AboutSection() {
  const { t } = useLocale()

  const panels = [
    { tag: t.about.vision, body: t.about.visionBody },
    { tag: t.about.mission, body: t.about.missionBody },
  ]

  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.01" title={t.about.label} tone="light" />

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <h2 className="text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {t.about.body}
            </p>
          </div>

          <div className="grid gap-px border border-border bg-border md:col-span-6 md:grid-cols-1">
            {panels.map((panel) => (
              <div key={panel.tag} className="relative bg-card p-8">
                <span className="absolute start-0 top-0 h-3 w-3 border-s-2 border-t-2 border-accent" />
                <span className="absolute end-0 bottom-0 h-3 w-3 border-e-2 border-b-2 border-accent" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  {panel.tag}
                </span>
                <p className="mt-4 text-pretty leading-relaxed text-foreground/85">
                  &ldquo;{panel.body}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
