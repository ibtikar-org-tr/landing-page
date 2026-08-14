export type Lang = 'ar' | 'en' | 'tr'
export type Dir = 'rtl' | 'ltr'

export const LANGS: { code: Lang; label: string; dir: Dir }[] = [
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'tr', label: 'TR', dir: 'ltr' },
]

export const DEFAULT_LANG: Lang = 'en'
export const STORAGE_KEY = 'ibtikar-landing-lang'

export type Dictionary = {
  dir: Dir
  locale: string
  brand: string
  nav: {
    about: string
    journey: string
    projects: string
    clubs: string
    members: string
    team: string
    joinUs: string
    homeAria: string
    primaryNav: string
    mobileNav: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    eyebrow: string
    titleLine1: string
    titleLine2Before: string
    titleLine2Accent: string
    body: string
    exploreProjects: string
    ourStory: string
    years: string
    members: string
    universities: string
    countries: string
    studentsTrained: string
    communityReach: string
  }
  about: {
    label: string
    title: string
    body: string
    vision: string
    visionBody: string
    mission: string
    missionBody: string
  }
  values: {
    label: string
    items: { title: string }[]
  }
  journey: {
    label: string
    title: string
    milestones: { date: string; metric: string; title: string; body: string }[]
  }
  aims: {
    label: string
    items: { title: string; body: string }[]
  }
  projects: {
    label: string
    title: string
    items: { title: string; body: string; tags: string[] }[]
  }
  clubs: {
    label: string
    title: string
    items: string[]
  }
  members: {
    label: string
    title: string
    telegramActive: string
    newThisCycle: string
    universities: string
    countries: string
    membersUnit: string
    suites: { title: string; members: string; majors: string }[]
  }
  team: {
    label: string
    title: string
    portraitAlt: string
    roleFallback: {
      chairman: string
      logistics: string
      projects: string
      unitDirector: string
      boardMember: string
    }
  }
  footer: {
    blurb: string
    getInTouch: string
    connect: string
    partners: string
    rights: string
    location: string
    instagram: string
    linkedin: string
    whatsapp: string
    email: string
    github: string
    bylaws: string
  }
}

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'ar' || value === 'en' || value === 'tr'
}
