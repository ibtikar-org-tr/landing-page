import { SectionLabel } from '@/components/section-label'

const PRINCIPLES = [
  { n: '01', title: 'Excellence' },
  { n: '02', title: 'Quality' },
  { n: '03', title: 'Creativity' },
  { n: '04', title: 'Collaboration' },
  { n: '05', title: 'Independence' },
]

export function PrinciplesSection() {
  return (
    <section className="border-y border-border bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.02" title="Values" tone="light" />

        <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-5">
          {PRINCIPLES.map((item) => (
            <div
              key={item.n}
              className="flex flex-col justify-between gap-6 bg-card p-6 transition-colors hover:bg-background"
            >
              <span className="font-mono text-xs text-accent">{item.n}</span>
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
