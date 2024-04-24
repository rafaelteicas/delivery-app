import { z } from 'zod'

export function createCategorySchema(input: any) {
  const schema = z.object({
    name: z.string(),
  })
  return schema.parse(input)
}
