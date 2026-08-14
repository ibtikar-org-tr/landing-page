import { SectionLabel } from '@/components/section-label'
import type { LandingTeamMember } from '@/types/team'

const FALLBACK_TEAM: LandingTeamMember[] = [
  {
    name: 'Abdulkarim Lahmuni',
    role: 'Chairman of the Board of Directors',
  },
  {
    name: 'Lilas Haroun',
    role: 'Director of the Logistics Unit',
  },
  {
    name: 'Abduallah Damash',
    role: 'Director of the Projects Unit',
  },
]

const AVATARS = ['/images/avatar-2.svg', '/images/avatar-1.svg', '/images/avatar-3.svg']

interface TeamSectionProps {
  members: LandingTeamMember[]
}

export function TeamSection({ members }: TeamSectionProps) {
  const team = members.length > 0 ? members : FALLBACK_TEAM

  return (
    <section id="team" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.08" title="Board of Directors" tone="light" />

        <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          Run by students, for students
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div key={`${member.name}-${index}`} className="group">
              <div className="relative aspect-square overflow-hidden bg-navy">
                <img
                  src={AVATARS[index % AVATARS.length]}
                  alt={`Portrait illustration of ${member.name}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-accent" />
                <span className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-accent" />
              </div>
              <h3 className="mt-4 font-mono text-base font-bold uppercase tracking-tight text-foreground">
                {member.name}
              </h3>
              {member.role ? <p className="mt-1 text-sm text-muted-foreground">{member.role}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
