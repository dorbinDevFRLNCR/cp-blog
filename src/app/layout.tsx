import type { Metadata } from 'next'
import './globals.css'
import Header from './components/layout/header/header'
import Footer from './components/layout/footer/footer'
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("h-full antialiased", "font-sans", inter.variable)}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
