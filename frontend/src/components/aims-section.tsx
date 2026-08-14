import { Target, Users2, Rocket, Lightbulb, HeartHandshake } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

const AIMS = [
  {
    icon: Users2,
    title: 'Purposeful technical community',
    body: 'Activate meaningful communication in the youth technical community.',
  },
  {
    icon: Lightbulb,
    title: 'Skills that solve real problems',
    body: 'Develop technical skills and stimulate innovation and creativity in solving problems and building projects.',
  },
  {
    icon: HeartHandshake,
    title: 'Students with community impact',
    body: "Strengthen students' community role in their reality.",
  },
  {
    icon: Target,
    title: 'More opportunities to compete',
    body: 'Increase opportunities for Arab students to create projects and participate in technical competitions.',
  },
  {
    icon: Rocket,
    title: 'Successful student-led projects',
    body: 'Help successful projects by Arab students emerge on the scene.',
  },
]

export function AimsSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.04" title="Aims to Achieve" tone="light" />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
