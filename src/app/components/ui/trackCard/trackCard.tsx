import { MoveRight, MoveUpRight } from 'lucide-react'

type Props = {
  num: string
  icon: React.ReactNode
  iconColor?: string
  label: string
  title: string
  count: number
  slug: string
  className: string
  numColor: string
}

export default function TrackCard({
  num,
  icon,
  label,
  title,
  count,
  slug,
  className,
  numColor,
  iconColor,
}: Props) {
  return (
    <a
      href={`/blog?cat=${slug}`}
      className={`group relative flex min-h-[300px] flex-col justify-between rounded-[32px] p-7 md:p-8 transition-transform duration-300 hover:-translate-y-1 ${className} md:min-h-[360px] lg:min-h-[480px]`}
    >
      <div className="flex items-start justify-between">
        <span className="text-[12px] font-bold text-fg-subtle tracking-[0.14em]">{label}</span>
        <MoveUpRight
          size={14}
          color="black"
          className="flex items-center justify-center rounded-full border border-black/10 transition-transform duration-300 group-hover:rotate-45"
        />
      </div>

      <span
        className={`pointer-events-none absolute right-6 top-1/3 md:top-1/2 -translate-y-1/2 text-[80px] md:text-[110px] font-black leading-none tracking-tighter opacity-[0.5] md:opacity-[0] transition-all duration-400 group-hover:opacity-[0.5] ${numColor}`}
      >
        {num}
      </span>

      <div
        className={`${iconColor ? iconColor : ''} pr-[164px] pointer-events-none opacity-[0.5] md:opacity-[0] transition-all duration-400 group-hover:opacity-[0.5]`}
      >
        {icon}
      </div>

      <div>
        <h3 className="text-[20px] font-black leading-[0.95] tracking-tight text-black md:text-[24px] lg:text-[32px]">
          {title}
        </h3>
        <div className="mt-6 inline-flex items-center justify-center gap-2 text-[13px] font-medium text-black">
          <span>{count} Artikel</span>
          <MoveRight
            className="transition-transform duration-200 group-hover:translate-x-1"
            size={12}
          />
        </div>
      </div>
    </a>
  )
}
