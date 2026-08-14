import { SectionLabel } from '@/components/section-label'

const PANELS = [
  {
    tag: 'VISION',
    body: 'Leader community in building conscious youth, innovative solutions, and social impact.',
  },
  {
    tag: 'MESSAGE',
    body: 'Investing and coordinating efforts among students to develop their technical skills, stimulate their innovation and creativity, and enhance their effectiveness in serving and advancing society.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.01" title="About Ibtikar" tone="light" />

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <h2 className="text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
              Empowering Arab students to build, research and lead in technology
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              IBTIKAR Assembly is a volunteer team that brings together Arabic-speaking university
              students interested in innovation, technology, research and development. We empower
              them and enrich their technical expertise through activities and projects that touch
              student life — from university years, through technical and community skill
              development, to professional planning and project management.
            </p>
          </div>

          <div className="grid gap-px border border-border bg-border md:col-span-6 md:grid-cols-1">
            {PANELS.map((panel) => (
              <div key={panel.tag} className="relative bg-card p-8">
                <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-accent" />
                <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-accent" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  {panel.tag}
                </span>
                <p className="mt-4 text-pretty leading-relaxed text-foreground/85">
                  &ldquo;{panel.body}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
