import { SectionLabel } from '@/components/section-label'
import type { LandingTeamMember } from '@/types/team'
import { useLocale } from '@/i18n/locale-provider'

const AVATARS = ['/images/avatar-2.svg', '/images/avatar-1.svg', '/images/avatar-3.svg']

interface TeamSectionProps {
  members: LandingTeamMember[]
}

function translateRole(
  role: string,
  fallbacks: {
    chairman: string
    logistics: string
    projects: string
    unitDirector: string
    boardMember: string
  },
): string {
  const normalized = role.trim().toLowerCase()

  if (
    normalized === 'chairman of the board of directors' ||
    normalized.includes('chairman') ||
    normalized.includes('رئيس مجلس الإدارة')
  ) {
    return fallbacks.chairman
  }

  if (normalized.includes('logistics') || normalized.includes('اللوجست')) {
    return fallbacks.logistics
  }

  if (normalized.includes('projects unit') || normalized.includes('وحدة المشاريع')) {
    return fallbacks.projects
  }

  if (
    normalized === 'director of an administrative unit' ||
    normalized === 'board manager'
  ) {
    return fallbacks.unitDirector
  }

  if (normalized === 'board member' || normalized === 'عضو مجلس الإدارة') {
    return fallbacks.boardMember
  }

  return role
}

export function TeamSection({ members }: TeamSectionProps) {
  const { t } = useLocale()

  const fallbackTeam: LandingTeamMember[] = [
    {
      name: 'Abdulkarim Lahmuni',
      role: t.team.roleFallback.chairman,
    },
    {
      name: 'Lilas Haroun',
      role: t.team.roleFallback.logistics,
    },
    {
      name: 'Abduallah Damash',
      role: t.team.roleFallback.projects,
    },
  ]

  const team =
    members.length > 0
      ? members.map((member) => ({
          ...member,
          role: translateRole(member.role, t.team.roleFallback),
        }))
      : fallbackTeam

  return (
    <section id="team" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.08" title={t.team.label} tone="light" />

        <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          {t.team.title}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div key={`${member.name}-${index}`} className="group">
              <div className="relative aspect-square overflow-hidden bg-navy">
                <img
                  src={AVATARS[index % AVATARS.length]}
                  alt={t.team.portraitAlt.replace('{name}', member.name)}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute start-2 top-2 h-3 w-3 border-s-2 border-t-2 border-accent" />
                <span className="absolute end-2 bottom-2 h-3 w-3 border-e-2 border-b-2 border-accent" />
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
