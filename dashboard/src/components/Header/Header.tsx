'use client'

import React from 'react'

import { useUserInfo } from '@/domain'

export function Header() {
  const { data } = useUserInfo()

  return (
    <div className="flex flex-row sticky top-0 h-10 border-b bg-zinc-900 text-white">
      {data?.fullName}
    </div>
  )
}
