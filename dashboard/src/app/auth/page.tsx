'use client'

import { FormEvent, useState } from 'react'

import { Button, Input } from '@/components'
import { useAuth } from '@/domain'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { authenticate } = useAuth()

  function handleAuth(e: FormEvent) {
    e.preventDefault()
    authenticate({
      email,
      password,
    })
  }

  return (
    <main className="m-auto flex min-h-screen max-w-screen-sm items-center justify-center ">
      <form
        method="POST"
        onSubmit={handleAuth}
        className="space-y-4 flex flex-col flex-1"
      >
        <Input
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" type="submit" />
      </form>
    </main>
  )
}
