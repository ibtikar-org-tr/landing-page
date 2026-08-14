import { SectionLabel } from '@/components/section-label'
import type { LandingStatsResponse } from '@/types/stats'
import { useLocale } from '@/i18n/locale-provider'

interface MembersSectionProps {
  stats: LandingStatsResponse | null
}

export function MembersSection({ stats }: MembersSectionProps) {
  const { t } = useLocale()
  const totalMembers = stats?.overview.totalMembers ?? 675
  const title = t.members.title.replace('{count}', totalMembers.toLocaleString(t.locale))

  return (
    <section id="members" className="border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.07" title={t.members.label} tone="light" />

        <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>

        {stats ? (
          <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {[
              { label: t.members.telegramActive, value: stats.overview.telegramActive },
              { label: t.members.newThisCycle, value: stats.overview.newMembers },
              { label: t.members.universities, value: stats.overview.universitiesCount },
              { label: t.members.countries, value: stats.overview.countriesCount },
            ].map((item) => (
              <div key={item.label} className="bg-card px-5 py-5">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-2 font-mono text-2xl font-bold text-foreground">
                  {item.value.toLocaleString(t.locale)}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.members.suites.map((suite, index) => (
            <div key={suite.title} className="border border-border bg-card p-7">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-2xl font-bold text-foreground">
                  {suite.members}
                  <span className="ms-1 text-sm font-normal text-muted-foreground">
                    {t.members.membersUnit}
                  </span>
                </span>
              </div>
              <h3 className="mt-3 font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                {suite.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {suite.majors}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
