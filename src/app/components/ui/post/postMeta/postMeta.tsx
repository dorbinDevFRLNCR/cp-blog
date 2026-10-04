type Base = { label: string; date: string; howMuchToRead: string }

export default function PostMeta({ label, date, howMuchToRead }: Base) {
  return (
    <div className={`flex flex-wrap items-center gap-1 text-[14px] font-medium `}>
      <span
        className={`rounded-full px-2 text-bg py-1 text-[12px] tracking-wide font-bold bg-accent-dev-primary`}
      >
        {label}
      </span>
      <span className="pl-2 text-fg-muted">{date}</span>
      <span className="h-1 w-1 rounded-full text-fg-muted bg-current opacity-40" />
      <span className="text-fg-muted">{howMuchToRead}</span>
    </div>
  )
}

export function CardMeta({ label, date }: Omit<Base, 'howMuchToRead'>) {
  return (
    <div className="flex w-full items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-widest text-fg-muted">
      <span>{label}</span>
      <span className="shrink-0">{date}</span>
    </div>
  )
}
