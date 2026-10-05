import { client } from '@/sanity/lib/client'

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  categories[]->{title}
}`

type PostCard = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  categories?: { title: string }[]
}

export default async function BlogPage() {
  const posts: PostCard[] = await client.fetch(POSTS_QUERY)

  return (
    <div className="w-full min-h-[calc(100dvh-180px)] max-w-7xl flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Hier entsteht etwas</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <a
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="border p-4 rounded hover:bg-zinc-900 transition"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-sm opacity-60">
              {new Date(post.publishedAt).toLocaleDateString()} • {post.categories?.[0]?.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
