import { ArrowUpRight } from 'lucide-react'
import type { LandingStatsResponse } from '@/types/stats'
import { useLocale } from '@/i18n/locale-provider'
import { cn } from '@/lib/utils'

function formatCount(value: number, locale: string): string {
  return value.toLocaleString(locale)
}

interface HeroProps {
  stats: LandingStatsResponse | null
}

export function Hero({ stats }: HeroProps) {
  const { t, dir } = useLocale()

  const displayStats = stats
    ? [
        { value: '4+', label: t.hero.years },
        { value: formatCount(stats.overview.totalMembers, t.locale), label: t.hero.members },
        {
          value: formatCount(stats.overview.universitiesCount, t.locale),
          label: t.hero.universities,
        },
        { value: formatCount(stats.overview.countriesCount, t.locale), label: t.hero.countries },
      ]
    : [
        { value: '4+', label: t.hero.years },
        { value: '650+', label: t.hero.members },
        { value: '1000+', label: t.hero.studentsTrained },
        { value: '2100+', label: t.hero.communityReach },
      ]

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-32 pb-16 text-navy-foreground md:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#F5F5F7_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F7_1px,transparent_1px)] bg-size-[44px_44px] opacity-[0.15]"
      />
      <div
        aria-hidden="true"
        className={cn(
          'absolute top-24 h-[420px] w-[560px] bg-[url("/images/hero-schematic.svg")] bg-contain bg-no-repeat opacity-90 md:top-16',
          dir === 'rtl'
            ? '-left-40 bg-left md:left-[-120px]'
            : '-right-40 bg-right md:right-[-120px]',
        )}
      />
      <div
        className={cn(
          'absolute inset-0 to-transparent',
          dir === 'rtl'
            ? 'bg-gradient-to-l from-navy via-navy/95'
            : 'bg-gradient-to-r from-navy via-navy/95',
        )}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-navy-foreground/70">
            {t.hero.eyebrow}
          </span>
        </div>

        <h1 className="mt-8 max-w-3xl text-balance font-mono text-5xl font-bold uppercase leading-[1.05] tracking-tight md:text-7xl">
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2Before ? `${t.hero.titleLine2Before} ` : null}
          <span className="text-accent">{t.hero.titleLine2Accent}</span>_
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-navy-foreground/80">
          {t.hero.body}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.1em] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            {t.hero.exploreProjects}
            <ArrowUpRight
              className={cn(
                'size-4 transition-transform',
                dir === 'rtl'
                  ? 'group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 -scale-x-100'
                  : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
              )}
            />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-navy-foreground/30 px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-navy-foreground transition-colors hover:border-navy-foreground/70"
          >
            {t.hero.ourStory}
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px border border-navy-foreground/15 bg-navy-foreground/15 sm:grid-cols-4">
          {displayStats.map((stat) => (
            <div key={stat.label} className="bg-navy px-5 py-6">
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-navy-foreground/60">
                {stat.label}
              </dt>
              <dd className="mt-2 font-mono text-3xl font-bold text-navy-foreground md:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
