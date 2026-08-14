import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'
import { cn } from '@/lib/utils'

export function JourneyTimeline() {
  const { t, dir } = useLocale()

  return (
    <section id="journey" className="relative overflow-hidden bg-navy py-24 text-navy-foreground md:py-32">
      <div
        aria-hidden="true"
        className={cn(
          'absolute bottom-0 h-[380px] w-[520px] bg-[url("/images/journey-schematic.svg")] bg-contain bg-no-repeat opacity-70',
          dir === 'rtl' ? '-right-32 bg-right' : '-left-32 bg-left',
        )}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.03" title={t.journey.label} />

        <h2 className="mt-6 max-w-2xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
          {t.journey.title}
        </h2>

        <ol
          className={cn(
            'mt-16 space-y-0 md:ms-2',
            dir === 'rtl' ? 'border-e border-navy-foreground/20' : 'border-s border-navy-foreground/20',
          )}
        >
          {t.journey.milestones.map((m, i) => (
            <li
              key={m.title}
              className={cn('relative pb-12 last:pb-0', dir === 'rtl' ? 'pe-8 md:pe-12' : 'ps-8 md:ps-12')}
            >
              <span
                className={cn(
                  'absolute top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-navy',
                  dir === 'rtl' ? '-end-[5px]' : '-start-[5px]',
                )}
              />
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-navy-foreground/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{m.date}</span>
                </div>
                <span className="font-mono text-xs font-bold text-navy-foreground/60">{m.metric}</span>
              </div>
              <h3 className="mt-3 font-mono text-xl font-bold uppercase tracking-tight text-navy-foreground md:text-2xl">
                {m.title}
              </h3>
              <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-navy-foreground/70">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
