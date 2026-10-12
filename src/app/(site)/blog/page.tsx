import { client } from '@/sanity/lib/client'
import BlogHero from '../../components/sections/blogHero/blogHero'
import FeaturedPostCard from '../../components/ui/post/featuredPostCard/featuredPostCard'
import PostCard from '../../components/ui/post/postCard/postCard'
import { POSTS_LIST_QUERY } from '@/sanity/lib/queries'
import { RawPost, toPost } from '@/sanity/lib/mappers'
import FilterBar from '@/app/components/ui/filterBar/filterBar'

export const dynamic = 'force-dynamic'

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/\s*\/\s*/g, '-')
    .replace(/\s+/g, '-')
    .trim()

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>
}) {
  const { cat } = await searchParams
  const raw: RawPost[] = await client.fetch(POSTS_LIST_QUERY)

  if (!raw.length) {
    return (
      <div className="w-full min-h-[calc(100dvh-180px)] max-w-7xl mx-auto p-8">
        <p className="text-fg-muted">Hier ist noch Leerlauf. Bald mehr.</p>
      </div>
    )
  }

  const filtered = cat ? raw.filter((p) => p.categories?.some((c) => c.slug === cat)) : raw

  const featured = filtered.find((p) => p.featured) ?? filtered[0] ?? null
  const rest = filtered.filter((p) => p._id !== featured?._id)

  return (
    <div className="w-full min-h-[calc(100dvh-180px)] max-w-7xl mx-auto p-8">
      <BlogHero
        kicker="Digital · Motorsport"
        title="Zwei Welten."
        accent="Eine Haltung."
        subline="Digital und Motorsport, ohne Umwege."
      />
      <div className="mt-10 flex flex-col gap-6">
        <FilterBar />
        {cat && (
          <span className="text-xs text-fg-muted uppercase tracking-widest">
            {filtered.length} Beiträge · {cat}
          </span>
        )}
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <p className="mt-10 text-fg-muted">Kein Beitrag für &quot;{cat}&quot; gefunden.</p>
        ) : (
          <>
            {featured && <FeaturedPostCard post={toPost(featured)} />}
            {rest.length > 0 && (
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <PostCard key={p._id} post={toPost(p)} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
