import { Sidebar, Header } from '@/components'
import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col bg-zinc-50 text-zinc-800 min-h-screen">
      <Header />
      <div className="grid grid-cols-app flex-1">
        <Sidebar />
        <div className="px-10 py-8">{children}</div>
      </div>
    </main>
  )
}
