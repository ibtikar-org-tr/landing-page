import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { PrinciplesSection } from '@/components/principles-section'
import { JourneyTimeline } from '@/components/journey-timeline'
import { AimsSection } from '@/components/aims-section'
import { ProjectsSection } from '@/components/projects-section'
import { ClubsSection } from '@/components/clubs-section'
import { MembersSection } from '@/components/members-section'
import { TeamSection } from '@/components/team-section'
import { SiteFooter } from '@/components/site-footer'

function App() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <PrinciplesSection />
      <JourneyTimeline />
      <AimsSection />
      <ProjectsSection />
      <ClubsSection />
      <MembersSection />
      <TeamSection />
      <SiteFooter />
    </main>
  )
}

export default App
