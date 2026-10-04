import { CardMeta } from '../postMeta/postMeta'
import { Post } from '@/app/types/post'

export default function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={post.href}
      className="group flex flex-col border border-border overflow-hidden rounded-[24px] bg-bg-soft hover:border-border-muted transition-all"
    >
      <div className="p-6">
        <CardMeta {...post} />
        <h3 className="text-base pt-4 font-semibold leading-none">{post.title}</h3>
      </div>
    </a>
  )
}
