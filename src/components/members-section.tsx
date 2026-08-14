import { SectionLabel } from '@/components/section-label'

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

export function MembersSection() {
  return (
    <section id="members" className="border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.07" title="Members" tone="light" />

        <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          675 students, four technical suites
        </h2>

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
