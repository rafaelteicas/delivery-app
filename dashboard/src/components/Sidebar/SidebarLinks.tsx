import Link from 'next/link'
import React from 'react'

interface SidebarLinksProps {
  title: string
  path: string
}

export function SidebarLinks({ title, path }: SidebarLinksProps) {
  return (
    <Link
      href={`/dashboard/${path}`}
      className="px-4 py-2 rounded-md bg-zinc-300 font-medium flex-row flex items-center gap-2 hover:bg-zinc-400"
    >
      <div className="w-5 h-5 bg-zinc-50" />
      {title}
    </Link>
  )
}
