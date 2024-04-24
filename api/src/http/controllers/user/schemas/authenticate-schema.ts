import { z } from 'zod'

export function authenticateSchema(input: any) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  })

  return schema.parse(input)
}
