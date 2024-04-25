import { z } from 'zod'

export function getAllCategoriesSchema(input: any) {
  const schema = z.object({
    page: z.coerce.number().default(1),
    perPage: z.coerce.number().default(10),
  })

  return schema.parse(input)
}
