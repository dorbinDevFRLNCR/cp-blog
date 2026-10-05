export default function HeroTerminal() {
  return (
    <div className="relative max-w-[560px] w-full lg:shrink-0">
      <div className="border border-zinc-800 rounded-2xl bg-zinc-900/50 p-4 md:p-6 backdrop-blur overflow-hidden">
        <div className="flex gap-2 mb-4">
          <div className="size-3 rounded-full bg-red-500" />
          <div className="size-3 rounded-full bg-yellow-500" />
          <div className="size-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-2 font-mono text-[12px] md:text-sm md:space-y-3">
          <div className="text-zinc-500">{`// latest.push()`}</div>
          <div className="text-[#00FF88]">GT3: P1 — Nordschleife</div>
          <div className="text-white">lap_time: 6:47.342</div>
          <div className="text-zinc-400">fuel: 12% | tyres: soft</div>
          <div className="h-px bg-zinc-800 my-4" />
          <div className="text-[#D6FF00]">CODE: shipping fix @ 02:14</div>
          <div className="text-zinc-300">&quot;commit: fix hydration&quot;</div>
          <div className="text-zinc-500">status: deployed ✓</div>
        </div>

        <div className="absolute -bottom-20 -right-20 size-[300px] bg-[#00FF88]/20 blur-[80px] rounded-full pointer-events-none" />
      </div>
    </div>
  )
}
