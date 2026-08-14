export interface LandingStatsOverview {
  totalMembers: number
  cycleGrowthPercentage: number
  telegramActive: number
  newMembers: number
  countriesCount: number
  universitiesCount: number
}

export interface LandingStatsGenderDistribution {
  maleCount: number
  femaleCount: number
  malePercentage: number
  femalePercentage: number
}

export interface LandingStatsAgeDistributionItem {
  group: string
  count: number
}

export interface LandingStatsResponse {
  overview: LandingStatsOverview
  genderDistribution: LandingStatsGenderDistribution
  ageDistribution: LandingStatsAgeDistributionItem[]
}
