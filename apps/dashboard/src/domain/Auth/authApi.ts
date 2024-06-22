import { api } from '@/api'

import {
  AuthenticateRequestDataType,
  AuthenticateResponseDataType,
} from './authTypes'

async function authenticate(
  data: AuthenticateRequestDataType,
): Promise<AuthenticateResponseDataType> {
  const response = await api.post('/user/auth', data)

  return response.data
}

export const authApi = { authenticate }
