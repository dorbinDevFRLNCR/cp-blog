import TrackCard from '../../ui/trackCard/trackCard'
import { DOORS_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import { Terminal, Gauge, Gamepad2 } from 'lucide-react'

const DOORS_CONFIG = [
  {
    num: '01',
    icon: <Terminal className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32" />,
    label: '01 DIgital / IT · WEB',
    title: 'Wie ich mein Design System mit Velite & pnpm baue',
    count: '12',
    slug: 'it-web',
    className: 'bg-accent-dev-primary',
    numColor: 'text-accent-dev-secondary',
    iconColor: 'text-accent-dev-secondary',
  },
  {
    num: '02',
    icon: <Gauge className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32" />,
    label: '02 Motorsport / GT3',
    title: 'GT3 auf der Nordschleife: 25 Kilometer, null Fehler erlaubt',
    slug: 'gt3',
    count: '8',
    className: 'bg-accent-motorsport-primary',
    numColor: 'text-accent-motorsport-secondary',
    iconColor: 'text-accent-motorsport-secondary',
  },
  {
    num: '03',
    icon: <Gamepad2 className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32" />,
    label: '03 DIgital / Gaming',
    title: 'Day-One-Patch: Wann ein Spiel wirklich fertig ist',
    count: '6',
    slug: 'gameworld',
    className: 'bg-accent-irl', // #fdfbf7
    numColor: 'text-fg-muted', // #fdfbf7
    iconColor: 'text-fg-muted', // #fdfbf7
  },
]

type DoorStat = { slug: string; count: number; latestPost?: string }

export default async function TracksSection() {
  const categories = await client.fetch<DoorStat[]>(DOORS_QUERY)

  return (
    <section className="w-full bg-bg px-6 py-10 md:py-20">
      <div className="">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.2em] text-fg-muted">
            WÄHLE DEINE SPUR
          </h2>
          <div className="h-px w-full bg-border" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DOORS_CONFIG.map((config) => {
            const cat = categories.find((c) => c.slug === config.slug)

            return (
              <TrackCard
                key={config.num}
                num={config.num}
                icon={config.icon}
                label={config.label}
                title={cat?.latestPost || config.title}
                count={cat?.count ?? 0}
                slug={config.slug}
                className={config.className}
                numColor={config.numColor}
                iconColor={config.iconColor}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
