import { z } from 'zod'

export function removeCategorySchema(params: any) {
  const schema = z.object({
    id: z.string(),
  })
  return schema.parse(params)
}
