import { Hono } from 'hono'
import { statsRoute } from './routes/stats.route'
import type { AppBindings } from './types/bindings'
import { landingPageCors } from './utils/cors'

const app = new Hono<{ Bindings: AppBindings }>()

app.use('*', landingPageCors())

app.get('/', (c) => {
  return c.json({ ok: true, service: 'landing-page-be' })
})

app.route('/api', statsRoute)

export default app
