'use server'

import { cookies, headers } from 'next/headers'

export async function saveAuthToken(token: string) {
  cookies().set('TOKEN', token, { httpOnly: true })
  headers().set('Authorization', 'Bearer ' + token)
}

export async function getAuthToken() {
  const token = cookies().get('TOKEN')
  return token?.value
}
