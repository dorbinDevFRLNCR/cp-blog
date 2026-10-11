import { client } from '@/sanity/lib/client'
import BlogHero from '../../components/sections/blogHero/blogHero'
import FeaturedPostCard from '../../components/ui/post/featuredPostCard/featuredPostCard'
import PostCard from '../../components/ui/post/postCard/postCard'
import { urlFor } from '@/sanity/lib/image'
import { Post } from '../../types/post'

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  featured,
  mainImage,
  "label": categories[0]->title,
  "words": length(string::split(pt::text(body), " "))
}`

type RawPost = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  mainImage?: { asset?: { _ref: string } }
  featured?: boolean
  label?: string
  words?: number
  publishedAt: string
  categories?: { title: string }[]
}

function toPost(p: RawPost): Post {
  return {
    id: p._id,
    label: p.label ?? '',
    date: new Date(p.publishedAt).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    howMuchToRead: `${Math.max(1, Math.round((p.words ?? 0) / 200))} Min.`,
    href: `/blog/${p.slug}`,
    title: p.title,
    description: p.excerpt ?? '',
    image: p.mainImage?.asset ? urlFor(p.mainImage).width(1600).quality(70).url() : '',
  }
}

export default async function BlogPage() {
  const raw: RawPost[] = await client.fetch(POSTS_QUERY)

  const featured = raw.find((p) => p.featured) ?? raw[0]
  const rest = raw.filter((p) => p._id !== featured?._id)

  return (
    <div className="w-full min-h-[calc(100dvh-180px)] max-w-7xl mx-auto p-8">
      <BlogHero
        kicker="Digital · Motorsport"
        title="Zwei Welten."
        accent="Eine Haltung."
        subline="Digital und Motorsport, ohne Umwege."
      />

      <div className="mt-16">
        {featured && <FeaturedPostCard post={toPost(featured)} />}

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
      </div>
    </div>
  )
}
