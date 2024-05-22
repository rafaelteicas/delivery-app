'use client'

import { parseCookies, setCookie } from 'nookies'
import React, { createContext, useEffect, useState } from 'react'

import { api } from '@/api'

type AuthData = {
  token: string
}

type AuthType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  auth: any | null
  saveAuth(data: AuthData): void
}

export const AuthContext = createContext({} as AuthType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthData | null>(null)

  async function startAuth() {
    const { token } = parseCookies()

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      saveAuth({ token })
    }
  }

  async function saveAuth({ token }: AuthData) {
    setAuth({ token })
    if (token) {
      setCookie(null, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      api.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }

  useEffect(() => {
    startAuth()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        auth,
        saveAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
