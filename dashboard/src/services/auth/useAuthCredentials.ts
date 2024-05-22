import { useContext } from 'react'

import { AuthContext } from './AuthProvider'

export function useAuthCredentials() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('Missing context')
  }
  return context
}
