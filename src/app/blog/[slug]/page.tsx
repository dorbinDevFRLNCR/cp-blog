import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  publishedAt,
  mainImage
}`

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let post
  try {
    post = await client.fetch(POST_QUERY, { slug }, { cache: 'no-store' })
  } catch (e) {
    console.error('Sanity fetch failed at build:', e)
    return notFound()
  }

  if (!post) return notFound()

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
      <p className="opacity-60 mb-8">
        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('de-DE') : ''}
      </p>
      <div className="prose prose-invert max-w-none">
        <PortableText value={post.body} />
      </div>
    </div>
  )
}
