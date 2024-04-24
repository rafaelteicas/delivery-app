import { z } from 'zod'

export function createEnvSchema() {
  const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'production', 'test']).default('dev'),
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string(),
  })
  const _env = envSchema.safeParse(process.env)

  if (!_env.success) {
    throw new Error('Could not parse.env file')
  }

  return _env.data
}
