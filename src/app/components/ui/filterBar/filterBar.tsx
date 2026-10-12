'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const FILTERS = [
  { label: 'Alle', value: '' },
  { label: 'IT / WEB', value: 'it-web' },
  { label: 'Simracing', value: 'simracing' },
  { label: 'Gameworld', value: 'gameworld' },
  { label: 'F1', value: 'f1' },
  { label: 'GT3', value: 'gt3' },
  { label: 'GT2', value: 'gt2' },
  { label: 'LMH', value: 'lmh' },
] as const

export default function FilterBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const active = searchParams.get('cat') || ''

  const setCat = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (!value) params.delete('cat')
    else params.set('cat', value)
    router.push(`/blog?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap gap-2 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl w-fit">
      {FILTERS.map((f) => {
        const isActive = active === f.value
        return (
          <button
            key={f.value || 'all'}
            onClick={() => setCat(f.value)}
            className={`px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-[0.15em] transition
              ${
                isActive
                  ? 'bg-white text-black'
                  : 'text-fg-muted hover:text-white hover:bg-white/[0.06]'
              }`}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}
