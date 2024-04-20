'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarLinksProps {
  title: string
  path: string
  icon: React.ElementType
}

export function SidebarLinks({ title, path, icon: Icon }: SidebarLinksProps) {
  const pathName = usePathname()

  const selectedStyle = pathName.includes(path.split('/').join(''))
    ? 'bg-zinc-200 before:absolute before:w-0.5 before:top-0 before:bottom-0 before:bg-orange-400 before:left-0'
    : ''

  return (
    <Link
      href={`/dashboard/${path}`}
      className={`relative px-4 py-2 font-medium flex-row flex items-center gap-4 hover:bg-zinc-200 ${selectedStyle}`}
    >
      <Icon className="text-orange-500 w-5 h-5" />
      {title}
    </Link>
  )
}
