// sections/blogHero/blogHero.tsx
type Props = { kicker: string; title: string; accent: string; subline: string }

export default function BlogHero({ kicker, title, accent, subline }: Props) {
  return (
    <section className="">
      <p className="text-fg uppercase tracking-[0.1em]">{kicker}</p>
      <h1 className="text-md font-extrabold text-accent-dev-primary leading-[.9] uppercase lg:text-7xl mt-2 mb-4">
        {title}
        <br />
        <span className="text-accent-motorsport-primary">{accent}</span>
      </h1>
      <p className="max-w-xl text-fg-muted">{subline}</p>
    </section>
  )
}
