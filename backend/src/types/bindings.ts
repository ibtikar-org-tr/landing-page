export interface D1PreparedStatementResultLike {
  first<T = Record<string, unknown>>(): Promise<T | null>
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>
  run(): Promise<unknown>
}

export interface D1PreparedStatementLike {
  bind(...values: unknown[]): D1PreparedStatementResultLike
}

export interface D1DatabaseLike {
  prepare(query: string): D1PreparedStatementLike
}

export interface AppBindings {
  VMS_LOGS_DB: D1DatabaseLike
  MEMBERS_DB: D1DatabaseLike
  VMS_DB: D1DatabaseLike
  FRONTEND_BASE_URL: string
  BOARD_PROJECT_ID: string
}
