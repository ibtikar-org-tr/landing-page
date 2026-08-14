import { SectionLabel } from '@/components/section-label'
import type { LandingStatsResponse } from '@/types/stats'

const SUITES = [
  {
    n: '01',
    title: 'Natural Sciences Suite',
    members: '152',
    majors:
      'Human Medicine, Pharmacy, Bioengineering, Nursing, Obstetrics, Chemistry, Physical Therapy, Medical Technology, Molecular Biology & Genetics, Medical Imaging, Physics Engineering',
  },
  {
    n: '02',
    title: 'IT Suite',
    members: '248',
    majors: 'Computer Engineering, Programming, Software Engineering, Mathematics Engineering',
  },
  {
    n: '03',
    title: 'Management & Arts Suite',
    members: '68',
    majors:
      'Business Administration, Finance, Aviation Management, Information Systems, Sociology, Arabic Language, Foreign Trade, Geomatics, Visual Communications Design, Architecture, Graphic Design',
  },
  {
    n: '04',
    title: 'Industry Suite',
    members: '207',
    majors:
      'Mechatronics Engineering, Automation & Control Engineering, Electrical & Electronic Engineering, Mechanical Engineering, Aerospace Engineering',
  },
]

interface MembersSectionProps {
  stats: LandingStatsResponse | null
}

export function MembersSection({ stats }: MembersSectionProps) {
  const totalMembers = stats?.overview.totalMembers ?? 675

  return (
    <section id="members" className="border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.07" title="Members" tone="light" />

        <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          {totalMembers.toLocaleString('en-US')} students, four technical suites
        </h2>

        {stats ? (
          <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {[
              { label: 'Telegram active', value: stats.overview.telegramActive },
              { label: 'New this cycle', value: stats.overview.newMembers },
              { label: 'Universities', value: stats.overview.universitiesCount },
              { label: 'Countries', value: stats.overview.countriesCount },
            ].map((item) => (
              <div key={item.label} className="bg-card px-5 py-5">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-2 font-mono text-2xl font-bold text-foreground">
                  {item.value.toLocaleString('en-US')}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SUITES.map((suite) => (
            <div key={suite.n} className="border border-border bg-card p-7">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-accent">{suite.n}</span>
                <span className="font-mono text-2xl font-bold text-foreground">
                  {suite.members}
                  <span className="ml-1 text-sm font-normal text-muted-foreground">members</span>
                </span>
              </div>
              <h3 className="mt-3 font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                {suite.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{suite.majors}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
