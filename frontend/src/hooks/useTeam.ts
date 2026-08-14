import { useEffect, useState } from 'react'
import type { LandingTeamMember, LandingTeamResponse } from '@/types/team'

const API_BASE_URL = (import.meta.env.VITE_API_URL as string | undefined)?.trim()
const TEAM_ENDPOINT = API_BASE_URL
  ? `${API_BASE_URL.replace(/\/+$/, '')}/api/team`
  : '/ms/landing-page/api/team'

interface UseTeamResult {
  members: LandingTeamMember[]
  isLoading: boolean
}

function parseTeamResponse(payload: unknown): LandingTeamResponse | null {
  if (!payload || typeof payload !== 'object') {
    return null
  }

  const members = (payload as Record<string, unknown>).members
  if (!Array.isArray(members)) {
    return null
  }

  const parsed = members
    .map((item) => {
      if (!item || typeof item !== 'object') {
        return null
      }

      const member = item as Record<string, unknown>
      const name = typeof member.name === 'string' ? member.name.trim() : ''
      const role = typeof member.role === 'string' ? member.role.trim() : ''

      if (!name) {
        return null
      }

      return { name, role }
    })
    .filter((item): item is LandingTeamMember => item !== null)

  return { members: parsed }
}

export function useTeam(): UseTeamResult {
  const [members, setMembers] = useState<LandingTeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function loadTeam() {
      try {
        const response = await fetch(TEAM_ENDPOINT, {
          method: 'GET',
          signal: controller.signal,
        })

        if (!response.ok) {
          return
        }

        const payload = (await response.json()) as unknown
        const parsed = parseTeamResponse(payload)
        if (parsed) {
          setMembers(parsed.members)
        }
      } catch {
        // Keep the empty list when the team request fails.
      } finally {
        setIsLoading(false)
      }
    }

    loadTeam()

    return () => {
      controller.abort()
    }
  }, [])

  return { members, isLoading }
}
