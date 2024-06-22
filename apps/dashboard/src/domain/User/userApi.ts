import { api } from '@/api'

import { UserInfoResponseDataType } from './userTypes'

async function getUserInfo(userId?: string): Promise<UserInfoResponseDataType> {
  const response = await api.get(`/user/${userId}`)
  return response.data
}

export const userApi = {
  getUserInfo,
}
