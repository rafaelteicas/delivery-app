'use client'

import React from 'react'
import { SidebarLinks } from './SidebarLinks'
import { Home, Layers3, ShoppingCart, Users } from 'lucide-react'

export function Sidebar() {
  return (
    <nav className="flex flex-col min-h-full bg-zinc-100 border-r">
      <SidebarLinks path="/home" title="Home" icon={Home} />
      <SidebarLinks path="/categories" title="Categorias" icon={Layers3} />
      <SidebarLinks path="/products" title="Produtos" icon={ShoppingCart} />
      <SidebarLinks path="/clients" title="Clientes" icon={Users} />
    </nav>
  )
}
