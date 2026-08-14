import { useEffect, useState } from 'react'
import type { LandingStatsResponse } from '@/types/stats'

const API_BASE_URL = (import.meta.env.VITE_API_URL as string | undefined)?.trim()
const STATS_ENDPOINT = API_BASE_URL
  ? `${API_BASE_URL.replace(/\/+$/, '')}/api/stats`
  : '/api/stats'

interface UseStatsResult {
  stats: LandingStatsResponse | null
  isLoading: boolean
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value)
}

function parseStatsResponse(payload: unknown): LandingStatsResponse | null {
  if (!payload || typeof payload !== 'object') {
    return null
  }

  const candidate = payload as Record<string, unknown>
  const overview = candidate.overview as Record<string, unknown> | undefined
  const genderDistribution = candidate.genderDistribution as Record<string, unknown> | undefined
  const ageDistribution = candidate.ageDistribution

  if (!overview || !genderDistribution || !Array.isArray(ageDistribution)) {
    return null
  }

  const parsedAgeDistribution = ageDistribution
    .map((item) => {
      if (!item || typeof item !== 'object') {
        return null
      }

      const ageItem = item as Record<string, unknown>
      if (typeof ageItem.group !== 'string' || !ageItem.group.trim() || !isFiniteNumber(ageItem.count)) {
        return null
      }

      return {
        group: ageItem.group,
        count: ageItem.count,
      }
    })
    .filter((item): item is { group: string; count: number } => item !== null)

  return {
    overview: {
      totalMembers: isFiniteNumber(overview.totalMembers) ? overview.totalMembers : 0,
      cycleGrowthPercentage: isFiniteNumber(overview.cycleGrowthPercentage)
        ? overview.cycleGrowthPercentage
        : 0,
      telegramActive: isFiniteNumber(overview.telegramActive) ? overview.telegramActive : 0,
      newMembers: isFiniteNumber(overview.newMembers) ? overview.newMembers : 0,
      countriesCount: isFiniteNumber(overview.countriesCount) ? overview.countriesCount : 0,
      universitiesCount: isFiniteNumber(overview.universitiesCount) ? overview.universitiesCount : 0,
    },
    genderDistribution: {
      maleCount: isFiniteNumber(genderDistribution.maleCount) ? genderDistribution.maleCount : 0,
      femaleCount: isFiniteNumber(genderDistribution.femaleCount) ? genderDistribution.femaleCount : 0,
      malePercentage: isFiniteNumber(genderDistribution.malePercentage)
        ? genderDistribution.malePercentage
        : 0,
      femalePercentage: isFiniteNumber(genderDistribution.femalePercentage)
        ? genderDistribution.femalePercentage
        : 0,
    },
    ageDistribution: parsedAgeDistribution,
  }
}

export function useStats(): UseStatsResult {
  const [stats, setStats] = useState<LandingStatsResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function loadStats() {
      try {
        const response = await fetch(STATS_ENDPOINT, {
          method: 'GET',
          signal: controller.signal,
        })

        if (!response.ok) {
          return
        }

        const payload = (await response.json()) as unknown
        const parsed = parseStatsResponse(payload)
        if (parsed) {
          setStats(parsed)
        }
      } catch {
        // Keep UI defaults when stats request fails.
      } finally {
        setIsLoading(false)
      }
    }

    loadStats()

    return () => {
      controller.abort()
    }
  }, [])

  return { stats, isLoading }
}
