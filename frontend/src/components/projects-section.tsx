import { Satellite, Pickaxe, Snowflake, Users, CalendarDays, MessageSquare } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'

const PROJECT_META = [
  { icon: Satellite, href: 'https://linktr.ee/ibtikar.org.tr' },
  { icon: Pickaxe, href: 'https://linktr.ee/ibtikar.org.tr' },
  { icon: Snowflake, href: 'https://lms.ibtikar.org.tr' },
  { icon: Users },
  { icon: CalendarDays },
  { icon: MessageSquare },
]

export function ProjectsSection() {
  const { t } = useLocale()

  return (
    <section id="projects" className="border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="N.05" title={t.projects.label} tone="light" />
            <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
              {t.projects.title}
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, index) => {
            const meta = PROJECT_META[index]
            const Icon = meta?.icon ?? Users

            return (
              <div key={project.title} className="flex flex-col bg-card p-7">
                <Icon className="size-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 font-mono text-lg font-bold uppercase leading-snug tracking-tight text-foreground">
                  {meta?.href ? (
                    <a href={meta.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
