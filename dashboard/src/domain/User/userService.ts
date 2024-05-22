import { userApi } from './userApi'

async function getUserInfo(userId?: string) {
  const data = await userApi.getUserInfo(userId)
  return data
}

export const userService = {
  getUserInfo,
}
