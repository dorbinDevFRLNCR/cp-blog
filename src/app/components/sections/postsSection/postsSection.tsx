import PostCard from '@/app/components/ui/post/postCard/postCard'
import FeaturedPostCard from '../../ui/post/featuredPostCard/featuredPostCard'
import { getKWFromPosts, RawPost, toPost } from '@/sanity/lib/mappers'
import { POSTS_LIST_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'

export const dynamic = 'force-dynamic'

async function PostsSection() {
  const raw: RawPost[] = await client.fetch(POSTS_LIST_QUERY)
  if (!raw.length) return null

  const { kw, year } = getKWFromPosts(raw) ?? { kw: null, year: null }
  const featured = raw.find((p) => p.featured) ?? raw[0]
  const rest = raw.filter((p) => p._id !== featured?._id)

  return (
    <section className="py-20 px-4 md:px-5">
      <div className="mb-8 flex items-center gap-4">
        <h3 className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.2em] text-fg-muted">
          Neueste Ausgabe
        </h3>
        <div className="h-px w-full bg-border" />
        <p className="shrink-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.1em] text-fg-muted">
          KW {kw} / {year}
        </p>
      </div>
      <div>{featured && <FeaturedPostCard post={toPost(featured)} />}</div>

      {rest.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <PostCard key={p._id} post={toPost(p)} />
          ))}
        </div>
      )}

      {raw.length === 0 && (
        <p className="mt-10 text-fg-muted">Hier ist noch Leerlauf. Bald mehr.</p>
      )}
    </section>
  )
}

export default PostsSection
