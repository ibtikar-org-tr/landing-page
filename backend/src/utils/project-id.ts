const PROJECT_ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export function parseBoardProjectId(value: string | undefined): string | null {
  const projectId = value?.trim() ?? ''

  if (!PROJECT_ID_PATTERN.test(projectId)) {
    return null
  }

  return projectId
}
