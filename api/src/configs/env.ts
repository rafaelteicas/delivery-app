import { createEnvSchema } from '@/schemas/env-schemas'
import 'dotenv/config'

export const env = createEnvSchema()
