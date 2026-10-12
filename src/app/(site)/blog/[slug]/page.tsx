import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import { POST_BY_SLUG_QUERY } from '@/sanity/lib/queries'

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug })

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
