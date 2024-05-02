import { z } from 'zod'

export function createCategorySchema(input: any) {
  const schema = z.object({
    value: z.string(),
  })
  return schema.parse(input)
}
