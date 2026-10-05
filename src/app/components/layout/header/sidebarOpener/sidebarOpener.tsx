'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from '../sidebar/sidebar'

export default function SidebarOpener() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex p-2 items-center justify-center rounded-full border border-zinc-700 text-zinc-200 hover:border-border-muted hover:bg-zinc-900 transition"
      >
        <Menu className="size-4 md:size-5" />
      </button>

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
