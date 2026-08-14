import { ArrowUpRight } from 'lucide-react'
import type { LandingStatsResponse } from '@/types/stats'

const FALLBACK_STATS = [
  { value: '4+', label: 'Years' },
  { value: '650+', label: 'Members' },
  { value: '1000+', label: 'Students Trained' },
  { value: '2100+', label: 'Community Reach' },
]

function formatCount(value: number): string {
  return value.toLocaleString('en-US')
}

function buildHeroStats(stats: LandingStatsResponse | null) {
  if (!stats) {
    return FALLBACK_STATS
  }

  return [
    { value: '4+', label: 'Years' },
    { value: formatCount(stats.overview.totalMembers), label: 'Members' },
    { value: formatCount(stats.overview.universitiesCount), label: 'Universities' },
    { value: formatCount(stats.overview.countriesCount), label: 'Countries' },
  ]
}

interface HeroProps {
  stats: LandingStatsResponse | null
}

export function Hero({ stats }: HeroProps) {
  const displayStats = buildHeroStats(stats)
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
        className="absolute -right-40 top-24 h-[420px] w-[560px] bg-[url('/images/hero-schematic.svg')] bg-contain bg-right bg-no-repeat opacity-90 md:right-[-120px] md:top-16"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-navy-foreground/70">
            Est. Oct 2022 — Turkey & Syria
          </span>
        </div>

        <h1 className="mt-8 max-w-3xl text-balance font-mono text-5xl font-bold uppercase leading-[1.05] tracking-tight md:text-7xl">
          A Generation
          <br />
          That <span className="text-accent">Innovates</span>_
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-navy-foreground/80">
          Ibtikar Volunteer Assembly is a volunteer team of Arabic-speaking university students in
          Turkey and Syria, building technical skills through research, innovation projects and
          community-led development — from campus life to TEKNOFEST.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.1em] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Explore Projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-navy-foreground/30 px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-navy-foreground transition-colors hover:border-navy-foreground/70"
          >
            Our Story
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
