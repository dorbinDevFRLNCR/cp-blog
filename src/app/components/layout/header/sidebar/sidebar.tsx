'use client'

import Link from 'next/dist/client/link'
import Image from 'next/image'
import { CarFront, Code, Flag, Gamepad2, Gauge, Trophy, X, Zap } from 'lucide-react'
import { useEffect } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion'

const menu = [
  {
    id: 'digital',
    title: 'Digital',
    links: [
      { name: 'IT / WEB', href: '/blog?cat=it-web', icon: <Code size={14} /> },
      { name: 'Simracing', href: '/blog?cat=simracing', icon: <Gauge size={14} /> },
      { name: 'Gameworld', href: '/blog?cat=gameworld', icon: <Gamepad2 size={14} /> },
    ],
  },
  {
    id: 'motorsport',
    title: 'Motorsport',
    links: [
      { name: 'F1', href: '/blog?cat=f1', icon: <Flag size={14} /> },
      { name: 'GT3', href: '/blog?cat=gt3', icon: <Trophy size={14} /> },
      { name: 'GT2', href: '/blog?cat=gt2', icon: <CarFront size={14} /> },
      { name: 'LMH', href: '/blog?cat=lmh', icon: <Zap size={14} /> },
    ],
  },
]

const SIDEBAR_FOOTER_LINKS = [
  {
    id: 1,
    title: 'Impressum',
    href: '/impressum',
  },
  {
    id: 2,
    title: 'Datenschutz',
    href: '/datenschutz',
  },
  {
    id: 3,
    title: 'About',
    href: '/about',
  },
]

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

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

        <Accordion
          type="multiple"
          defaultValue={['digital', 'motorsport']}
          className="w-full flex flex-col text-fg-muted gap-4 mt-4 border-none"
        >
          {menu.map((cat) => (
            <AccordionItem
              key={cat.id}
              value={cat.id}
              className="border border-border hover:border-border-muted rounded-2xl px-2 bg-white/[0.02] overflow-hidden"
            >
              <AccordionTrigger className="text-xs cursor-pointer font-bold uppercase tracking-[0.2em] hover:no-underline px-2 py-5">
                {cat.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  {cat.links.map((l) => (
                    <Link
                      key={l.name}
                      href={l.href}
                      onClick={onClose}
                      className="py-3 flex gap-2 items-center text-[15px] text-fg-muted hover:text-fg-subtle transition"
                    >
                      {l.icon}
                      {l.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

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
