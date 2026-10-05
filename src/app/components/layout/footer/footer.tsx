import Image from 'next/image'
import Link from 'next/link'

const FOOTER_LINKS = [
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
    id: 3,
    title: 'RSS',
    href: '/rss.xml',
  },
  {
    id: 4,
    title: 'Impressum',
    href: '/impressum',
  },
  {
    id: 5,
    title: 'Datenschutzerklärung',
    href: '/datenschutzerklarung',
  },
]

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="flex lg:flex-row lg:justify-between font-[300] px-8 py-10 flex-col gap-4 lg:items-center">
        <div className="flex flex-col gap-4 md:flex-row lg:gap-4">
          <Link href="/">
            <Image src="/image/logo.png" alt="Logo" width={100} height={50} />
          </Link>
          <span className="text-fg-muted">
            ©{new Date().getFullYear()} | CUPER-BLOG - All rights reserved.
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-4">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-fg-muted hover:text-fg transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
