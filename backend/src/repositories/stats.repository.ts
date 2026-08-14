import type { D1DatabaseLike } from '../types/bindings'

const MEMBER_STATS_KEY = 'member_stats'

interface StatsCacheRow {
  updated_at: string
  content_json: string
}

export interface AgeDistributionItem {
  group: string
  count: number
}

export interface MemberStats {
  totalMembers: number
  cycleGrowthPercentage: number
  telegramActive: number
  newMembers: number
  countriesCount: number
  universitiesCount: number
  maleCount: number
  femaleCount: number
  malePercentage: number
  femalePercentage: number
  ageDistribution: AgeDistributionItem[]
}

function toSafeNumber(value: unknown): number {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return 0
  }

  return value
}

function parseAgeDistributionItems(value: unknown): AgeDistributionItem[] | null {
  if (!Array.isArray(value)) {
    return null
  }

  const items = value
    .map((item) => {
      if (!item || typeof item !== 'object') {
        return null
      }

      const record = item as Record<string, unknown>
      const group = typeof record.group === 'string' ? record.group.trim() : ''
      const count = typeof record.count === 'number' ? record.count : Number(record.count)

      if (!group || !Number.isFinite(count) || count < 0) {
        return null
      }

      return { group, count }
    })
    .filter((item): item is AgeDistributionItem => item !== null)

  return items
}

function parseMemberStatsCache(raw: string | null): MemberStats | null {
  if (!raw) {
    return null
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>
    if (!parsed || typeof parsed !== 'object') {
      return null
    }

    const ageDistribution = parseAgeDistributionItems(parsed.ageDistribution)
    if (!ageDistribution) {
      return null
    }

    return {
      totalMembers: toSafeNumber(parsed.totalMembers),
      cycleGrowthPercentage: toSafeNumber(parsed.cycleGrowthPercentage),
      telegramActive: toSafeNumber(parsed.telegramActive),
      newMembers: toSafeNumber(parsed.newMembers),
      countriesCount: toSafeNumber(parsed.countriesCount),
      universitiesCount: toSafeNumber(parsed.universitiesCount),
      maleCount: toSafeNumber(parsed.maleCount),
      femaleCount: toSafeNumber(parsed.femaleCount),
      malePercentage: toSafeNumber(parsed.malePercentage),
      femalePercentage: toSafeNumber(parsed.femalePercentage),
      ageDistribution,
    }
  } catch {
    return null
  }
}

export async function getCachedMemberStats(logsDb: D1DatabaseLike): Promise<MemberStats | null> {
  const row = await logsDb
    .prepare('SELECT updated_at, content_json FROM stats WHERE key = ?')
    .bind(MEMBER_STATS_KEY)
    .first<StatsCacheRow>()

  return parseMemberStatsCache(row?.content_json ?? null)
}
