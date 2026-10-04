'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, Search } from 'lucide-react'
import Sidebar from './sidebar/sidebar'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky border-b border-border top-0 z-40 bg-bg text-white">
      <div className="flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex p-2 items-center justify-center rounded-full border border-zinc-700 text-zinc-200 hover:border-border-muted hover:bg-zinc-900 transition"
        >
          <Menu className="size-4 md:size-5" />
        </button>

        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <Image
          className="h-6 w-auto md:h-8 lg:h-8"
          src="/image/logo.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
        <button className="flex p-2 items-center justify-center rounded-full border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900 transition">
          <Search className="size-4 md:size-5" />
        </button>
      </div>
    </header>
  )
}

export default Header
