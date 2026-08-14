import type { D1DatabaseLike } from '../types/bindings'

const TEAM_MEMBER_LIMIT = 24

interface ProjectRow {
  id: string
  owner: string
}

interface ProjectMemberRow {
  membership_number: string
  role: string
}

interface MemberNameRow {
  membership_number: string
  en_name: string | null
  ar_name: string | null
}

interface PositionTitleRow {
  membership_number: string
  name: string | null
}

export interface PublicTeamMember {
  name: string
  role: string
}

function roleLabel(role: string, isOwner: boolean, positionName?: string): string {
  const title = positionName?.trim()
  if (title) {
    return title
  }

  if (isOwner) {
    return 'Chairman of the Board of Directors'
  }

  if (role === 'manager') {
    return 'Board Manager'
  }

  return 'Board Member'
}

function publicName(enName: string | null, arName: string | null): string | null {
  const english = enName?.trim()
  if (english) {
    return english
  }

  const arabic = arName?.trim()
  if (arabic) {
    return arabic
  }

  return null
}

export async function getBoardTeamMembers(
  vmsDb: D1DatabaseLike,
  membersDb: D1DatabaseLike,
  projectId: string,
): Promise<PublicTeamMember[] | null> {
  const project = await vmsDb
    .prepare('SELECT id, owner FROM projects WHERE id = ?')
    .bind(projectId)
    .first<ProjectRow>()

  if (!project) {
    return null
  }

  const memberRows = await vmsDb
    .prepare(
      `SELECT membership_number, role
       FROM project_members
       WHERE project_id = ?
       ORDER BY CASE role WHEN 'manager' THEN 0 WHEN 'member' THEN 1 ELSE 2 END, membership_number ASC
       LIMIT ?`,
    )
    .bind(projectId, TEAM_MEMBER_LIMIT)
    .all<ProjectMemberRow>()

  const members = new Map<string, string>()

  if (project.owner.trim()) {
    members.set(project.owner, 'owner')
  }

  for (const row of memberRows.results) {
    const membershipNumber = row.membership_number.trim()
    if (!membershipNumber || members.has(membershipNumber)) {
      continue
    }

    members.set(membershipNumber, row.role)
  }

  const membershipNumbers = [...members.keys()]
  if (membershipNumbers.length === 0) {
    return []
  }

  const namePlaceholders = membershipNumbers.map(() => '?').join(', ')
  const nameRows = await membersDb
    .prepare(
      `SELECT membership_number, en_name, ar_name
       FROM user_info
       WHERE membership_number IN (${namePlaceholders})`,
    )
    .bind(...membershipNumbers)
    .all<MemberNameRow>()

  const names = new Map(
    nameRows.results.map((row) => [row.membership_number, publicName(row.en_name, row.ar_name)]),
  )

  const positionRows = await vmsDb
    .prepare(
      `SELECT pa.membership_number, pos.name
       FROM position_applications pa
       INNER JOIN positions pos ON pos.id = pa.position_id
       WHERE pos.project_id = ?
         AND pa.status = 'accepted'
         AND pa.membership_number IN (${namePlaceholders})`,
    )
    .bind(projectId, ...membershipNumbers)
    .all<PositionTitleRow>()

  const positionTitles = new Map<string, string>()
  for (const row of positionRows.results) {
    const title = row.name?.trim()
    if (title && !positionTitles.has(row.membership_number)) {
      positionTitles.set(row.membership_number, title)
    }
  }

  return membershipNumbers
    .map((membershipNumber) => {
      const name = names.get(membershipNumber)
      if (!name) {
        return null
      }

      return {
        name,
        role: roleLabel(
          members.get(membershipNumber) ?? 'member',
          membershipNumber === project.owner,
          positionTitles.get(membershipNumber),
        ),
      }
    })
    .filter((member): member is PublicTeamMember => member !== null)
}
