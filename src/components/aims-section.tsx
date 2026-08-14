import { Target, Users2, Rocket, Lightbulb } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

const AIMS = [
  {
    icon: Rocket,
    title: 'Successful student-led projects',
    body: 'Growing the presence of successful projects built by Arab students on the scene.',
  },
  {
    icon: Users2,
    title: 'Purposeful technical community',
    body: 'Activating meaningful communication across the youth technical community.',
  },
  {
    icon: Target,
    title: 'More opportunities to compete',
    body: 'Increasing the opportunity for Arab students to create projects and join technical competitions.',
  },
  {
    icon: Lightbulb,
    title: 'Skills that solve real problems',
    body: 'Developing technical skills and stimulating innovation in solving problems and building projects.',
  },
]

export function AimsSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.04" title="Aims to Achieve" tone="light" />

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {AIMS.map((aim) => (
            <div key={aim.title} className="border-t-2 border-accent pt-6">
              <aim.icon className="size-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 font-mono text-base font-bold uppercase leading-snug tracking-tight text-foreground">
                {aim.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{aim.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
