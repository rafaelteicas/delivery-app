import { z } from 'zod'

export function getUserSchema(input: any) {
  const schema = z.object({
    id: z.string(),
  })

  return schema.parse(input)
}
