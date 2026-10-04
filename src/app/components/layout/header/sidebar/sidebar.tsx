// components/Sidebar.tsx
'use client'

import Link from 'next/dist/client/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useEffect } from 'react'

const SIDEBAR_LINKS = [
  {
    id: 1,
    title: 'IT / WEB',
    href: '/blog/it-web',
  },
  {
    id: 2,
    title: 'Simracing',
    href: '/blog/simracing',
  },
  {
    id: 3,
    title: 'IRL',
    href: '/blog/irl',
  },
  {
    id: 4,
    title: 'Archiv 2026',
    href: '/blog/archiv-2026',
  },
  {
    id: 5,
    title: 'Archiv 2025',
    href: '/blog/archiv-2025',
  },
]

const SIDEBAR_FOOTER_LINKS = [
  {
    id: 1,
    title: 'Blog',
    href: '/blog',
  },
  {
    id: 2,
    title: 'About',
    href: '/about',
  },
  {
    id: 4,
    title: 'Impressum',
    href: '/impressum',
  },
]

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // на всякий случай чистим когда компонент размонтируется
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Оверлей */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Сам сайдбар */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] md:w-[50%] lg:w-[25%] bg-[#0a0a0a] border-r border-white/10 z-50 p-4 flex flex-col transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="-mx-4 -mt-4 px-8 py-6 flex justify-between items-center border-b border-white/10">
          <Image src="/image/logo.png" alt="Logo" width={100} height={50} />
          <button
            onClick={onClose}
            className="text-white border border-border rounded-full p-2 text-2xl hover:border-border-muted transition"
          >
            <X size={14} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-6">
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-white hover:text-fg-muted transition border-b border-white/10 px-4 pb-6"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-4 py-6 border-t border-white/10">
          <nav className="flex gap-4">
            {SIDEBAR_FOOTER_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-fg-muted hover:text-fg-muted transition"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <span className="text-fg-muted block pt-2 text-sm">
            &copy; {new Date().getFullYear()} | CUPER-BLOG - All rights reserved.
          </span>
        </div>
      </aside>
    </>
  )
}
