import Link from 'next/link'
import PostMeta from '../postMeta/postMeta'
import { Post } from '@/app/types/post'

export default function FeaturedPostCard({ post }: { post: Post }) {
  const imageUrl = post.mainImage?.asset?.url || post.image

  return (
    <Link
      key={post.id}
      data-new={post.isNew}
      href={post.href}
      className="group relative flex overflow-hidden rounded-[32px] z-0 border border-border bg-bg text-fg min-h-[360px] hover:border-border-muted transition-all"
    >
      {imageUrl && (
        <>
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center center' }}
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r backdrop-blur-[2px] from-black via-black/80 to-black/40 md:from-black md:via-black/60 md:to-black/20" />
        </>
      )}

      <div className="p-5 md:p-8 lg:p-10">
        <PostMeta {...post} />
        <h2 className="text-2xl py-4 font-black leading-[0.9] tracking-tighter group-hover:text-accent-dev-primary transition-colors md:text-3xl lg:text-5xl">
          {post.title}
        </h2>
        <p className="text-md text-balance text-fg-muted max-w-[600px] lg:text-lg">
          {post.description}
        </p>
        <div className="group pt-4 flex items-center gap-3 text-[13px] font-medium">
          <span className="h-px w-8 bg-white/40 transition-all duration-300 group-hover:w-12 group-hover:bg-accent-dev-primary" />
          <span>Artikel lesen</span>
        </div>
      </div>
    </Link>
  )
}
