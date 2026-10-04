import TrackCard from '../../ui/trackCard/trackCard'
import ItVektor from '../../../../../public/icons/itVektor'
import SimRacingVektor from '../../../../../public/icons/simracingVektor'
import IRLVektor from '../../../../../public/icons/irlVektor'

const tracks = [
  {
    num: '01',
    icon: <ItVektor className="h-12 w-12" />,
    label: '01 / IT · WEB',
    title: 'Wie ich mein Design System mit Velite & pnpm baue',
    count: '12',
    href: '/blog/it-web',
    className: 'bg-accent-dev-primary',
    numColor: 'text-accent-dev-secondary',
    iconColor: 'text-accent-dev-secondary',
  },
  {
    num: '02',
    icon: <SimRacingVektor className="h-12 w-12" />,
    label: '02 / SIMRACING',
    title: '50 km/h Limiter: Warum Monza Pit-Entry ein Horror ist',
    count: '8',
    href: '/blog/simracing',
    className: 'bg-accent-sim-primary',
    numColor: 'text-accent-sim-secondary',
    iconColor: 'text-accent-sim-secondary',
  },
  {
    num: '03',
    icon: <IRLVektor className="h-12 w-12" />,
    label: '03 / IRL',
    title: 'Heusenstamm, B2 und Ausbildung 2027',
    count: '5',
    href: '/blog/irl',
    className: 'bg-accent-irl', // #fdfbf7
    numColor: 'text-fg-muted', // #fdfbf7
    iconColor: 'text-fg-muted', // #fdfbf7
  },
]

export default function TracksSection() {
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
          {tracks.map((t) => (
            <TrackCard key={t.num} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
