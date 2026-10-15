import { client } from '@/sanity/lib/client'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POST_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import Image from 'next/image'
import { readTimeFromChars } from '@/sanity/lib/mappers'

export const dynamic = 'force-dynamic'

const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-12 mb-6 text-white tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-2xl text-white font-bold mt-8 mb-4">{children}</h3>,
    normal: ({ children }) => <p className="leading-6 text-zinc-300 mb-3">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-white/20 pl-6 py-2 my-8 italic text-zinc-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2 text-fg-muted">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2 text-fg-muted">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-6">{children}</li>,
    number: ({ children }) => <li className="leading-6">{children}</li>,
  },
  marks: {
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">{children}</code>
    ),
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href
      return (
        <a
          href={href}
          target="_blank"
          className="underline decoration-white/20 hover:decoration-white transition"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      const v = value as { asset?: { url: string }; alt?: string; caption?: string; _key?: string }
      const url = v.asset?.url
      if (!url) return null

      return (
        <div className="my-10">
          <Image
            src={url}
            alt={v.alt || ''}
            width={1200}
            height={675}
            className="w-full rounded-2xl border border-white/10"
          />
          {v.caption && <p className="text-sm text-zinc-500 mt-3 text-center">{v.caption}</p>}
        </div>
      )
    },
    code: ({ value }) => {
      const v = value as { code: string }
      return (
        <pre className="my-8 p-6 rounded-2xl bg-zinc-900 border border-white/10 overflow-x-auto">
          <code className="text-sm font-mono text-zinc-200">{v.code}</code>
        </pre>
      )
    },
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug })

  if (!post) return notFound()

  const readTime = readTimeFromChars(post.chars)

  const mainImageUrl = (post.mainImage?.asset?.url || post.image?.asset?.url) as string | undefined

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-3xl mx-auto px-6 md:px-0 py-4 md:py-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-white transition mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </Link>

        <div className="flex items-center gap-4 flex-wrap text-sm text-zinc-500 mb-6">
          {post.categories?.[0] && (
            <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-zinc-300 text-xs">
              {post.categories[0].title}
            </span>
          )}
          {post.publishedAt && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {readTime} min read
          </span>
        </div>

        {mainImageUrl && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={mainImageUrl}
              alt={post.mainImage?.alt || post.title}
              width={1200}
              height={675}
              priority
              className="w-full h-auto object-cover aspect-[16/9]"
            />
          </div>
        )}

        <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
          {post.title}
        </h1>

        <div className="prose prose-invert text-fg-subtle max-w-none">
          <PortableText value={post.body} components={ptComponents} />
        </div>
      </div>
    </div>
  )
}
