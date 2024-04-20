import { z } from 'zod'

export function createUserSchema(data: any) {
  const schema = z
    .object({
      email: z.string().email(),
      fullName: z.string(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Password not match',
    })

  return schema.parse(data)
}
