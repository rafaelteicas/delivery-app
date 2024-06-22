import React from 'react'

import { Heading } from '@/components'

type HeaderProps = {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <Heading as="h1" size="2xl">
        {children}
      </Heading>
    </header>
  )
}
