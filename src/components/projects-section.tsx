import { Satellite, Pickaxe, Snowflake, Users, CalendarDays, MessageSquare } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

const PROJECTS = [
  {
    icon: Satellite,
    title: 'TEKNOFEST Arabic Platform',
    body: 'A student platform that attracts Arab students eager to work on TEKNOFEST projects — forming and supervising work teams.',
    tags: ['Innovation', 'Experiences', 'Technology'],
  },
  {
    icon: Pickaxe,
    title: 'Ibtikar Mines',
    body: 'An organizational project guiding Arab students in Turkey toward useful technical programs, local or virtual.',
    tags: ['Empowerment', 'Employment'],
  },
  {
    icon: Snowflake,
    title: 'Freezcamps',
    body: 'A different, unique course experience — starting as a normal course, then turning into a practical, interactive one.',
    tags: ['Educational', 'Skills', 'Development'],
  },
  {
    icon: Users,
    title: 'Student Clubs',
    body: 'A gathering of students interested in a specific field, aiming to benefit members in that field in various ways.',
    tags: ['Development', 'Experiences', 'Technology'],
  },
  {
    icon: CalendarDays,
    title: 'Student Activities',
    body: 'Educational trips, cultural events, sports competitions and volunteer activities that enrich student life.',
    tags: ['Experiences', 'Empowerment', 'Development'],
  },
  {
    icon: MessageSquare,
    title: 'Student Forums',
    body: 'Programs and conferences outside the formal academic environment, enhancing communication and breaking the fear barrier.',
    tags: ['Network', 'Communication', 'Innovation'],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="N.05" title="Projects" tone="light" />
            <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
              Six programs. One mission.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.title} className="flex flex-col bg-card p-7">
              <project.icon className="size-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 font-mono text-lg font-bold uppercase leading-snug tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{project.body}</p>
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
          ))}
        </div>
      </div>
    </section>
  )
}
