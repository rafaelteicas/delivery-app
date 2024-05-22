import axios from 'axios'
import { parseCookies } from 'nookies'

import { env } from '@/infra'

export const api = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

const { token } = parseCookies()

api.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
