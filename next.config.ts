// next.config.ts
import type { NextConfig } from 'next'

const isDev = process.argv.includes('dev')
const isBuild = process.argv.includes('build')

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  const { build } = await import('velite')
  await build({ watch: isDev, clean: !isDev })
}

const nextConfig: NextConfig = {
  // Add any Next.js configuration options here
}

export default nextConfig
