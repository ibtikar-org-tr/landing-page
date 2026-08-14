import { SectionLabel } from '@/components/section-label'

const MILESTONES = [
  {
    date: '10 / 2022',
    metric: '+10',
    title: 'Beginning',
    body: 'Founded on 5 October 2022 — the idea started with simple steps, aiming at a greater vision.',
  },
  {
    date: '05 / 2023',
    metric: '+100',
    title: 'Reality',
    body: 'Activities on the ground began, and the mission became clearer.',
  },
  {
    date: '06 / 2023',
    metric: '+150',
    title: 'First Period',
    body: 'We worked in an organized manner, developed clearer plans, and formed an administrative council.',
  },
  {
    date: '08 / 2023',
    metric: '+250',
    title: 'Integrated Team',
    body: 'We held a large forum to introduce the group — those who believed in the idea joined, and we grew stronger.',
  },
  {
    date: '11 / 2023',
    metric: '+400',
    title: 'TEKNOFEST Arabic',
    body: 'We held the TEKNOFEST Arabic conference in 2023 — students are now excited for TEKNOFEST 2024.',
  },
  {
    date: '02 / 2024',
    metric: '+400',
    title: 'Ibtikar in Syria',
    body: 'We held the TEKNOFEST Arabic seminar for the first time in north Syria (Al-Bab and Azaz).',
  },
  {
    date: '03 / 2024',
    metric: '+500',
    title: 'Emerging Technologies Conference',
    body: 'Our ambition for innovation knows no bounds — we held a conference on the newest technologies across fields.',
  },
]

export function JourneyTimeline() {
  return (
    <section id="journey" className="relative overflow-hidden bg-navy py-24 text-navy-foreground md:py-32">
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-[380px] w-[520px] bg-[url('/images/journey-schematic.svg')] bg-contain bg-left bg-no-repeat opacity-70"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.03" title="Ibtikar's Journey" />

        <h2 className="mt-6 max-w-2xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
          From a simple idea to a cross-border community
        </h2>

        <ol className="mt-16 space-y-0 border-l border-navy-foreground/20 md:ml-2">
          {MILESTONES.map((m, i) => (
            <li key={m.title} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-navy" />
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
