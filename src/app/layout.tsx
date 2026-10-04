import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CP Blog | Cuper Blog',
  description: 'A blog about web development and programming',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
