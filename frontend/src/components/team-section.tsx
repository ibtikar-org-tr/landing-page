import { SectionLabel } from '@/components/section-label'

const TEAM = [
  {
    name: 'Abdulkarim Lahmuni',
    role: 'Chairman of the Board of Directors',
    image: '/images/avatar-2.svg',
  },
  {
    name: 'Lilas Haroun',
    role: 'Head of Logistics Unit',
    image: '/images/avatar-1.svg',
  },
  {
    name: 'Abduallah Damash',
    role: 'Head of Projects Unit',
    image: '/images/avatar-3.svg',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.08" title="Volunteers" tone="light" />

        <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          Run by students, for students
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {TEAM.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-square overflow-hidden bg-navy">
                <img
                  src={member.image}
                  alt={`Portrait illustration of ${member.name}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-accent" />
                <span className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-accent" />
              </div>
              <h3 className="mt-4 font-mono text-base font-bold uppercase tracking-tight text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
