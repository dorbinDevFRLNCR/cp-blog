import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  publishedAt,
  mainImage
}`

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await client.fetch(POST_QUERY, { slug: (await params).slug })

  if (!post) return <div>Post not found</div>

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
      <p className="opacity-60 mb-8">{new Date(post.publishedAt).toLocaleDateString()}</p>
      <div className="prose prose-invert">
        <PortableText value={post.body} />
      </div>
    </div>
  )
}
