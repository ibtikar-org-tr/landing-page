import { Hono } from 'hono'
import { statsRoute } from './routes/stats.route'
import type { AppBindings } from './types/bindings'
import { landingPageCors } from './utils/cors'

const app = new Hono<{ Bindings: AppBindings }>()
const service = new Hono<{ Bindings: AppBindings }>()

service.use('*', landingPageCors())

service.get('/', (c) => {
  return c.json({ ok: true, service: 'ia-landing-page-be' })
})

service.get('/health', (c) => {
  return c.json({ ok: true })
})

service.route('/api', statsRoute)

app.route('/ms/landing-page', service)

export default app
