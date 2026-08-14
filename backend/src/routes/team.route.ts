import { Hono } from 'hono'
import { getBoardTeamMembers } from '../repositories/team.repository'
import type { AppBindings } from '../types/bindings'
import { parseBoardProjectId } from '../utils/project-id'

export const teamRoute = new Hono<{ Bindings: AppBindings }>()

teamRoute.get('/team', async (c) => {
  const projectId = parseBoardProjectId(c.env.BOARD_PROJECT_ID)

  if (!projectId) {
    console.error('BOARD_PROJECT_ID is missing or invalid')
    return c.json({ error: 'Team is not configured.' }, 500)
  }

  try {
    const members = await getBoardTeamMembers(c.env.VMS_DB, c.env.MEMBERS_DB, projectId)

    if (!members) {
      return c.json({ error: 'Board project was not found.' }, 404)
    }

    return c.json({ members })
  } catch (error) {
    console.error('Failed to fetch board team', error)
    return c.json({ error: 'Could not fetch board team.' }, 500)
  }
})
