import React from 'react'
import { SidebarLinks } from './SidebarLinks'

export function Sidebar() {
  return (
    <nav className="flex flex-col min-h-full bg-zinc-200 p-4 space-y-2">
      <SidebarLinks path="/" title="Home" />
      <SidebarLinks path="/categories" title="Categorias" />
    </nav>
  )
}
