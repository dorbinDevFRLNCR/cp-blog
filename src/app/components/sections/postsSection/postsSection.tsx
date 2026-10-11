import PostCard from '@/app/components/ui/post/postCard/postCard'
import { Post } from '@/app/types/post'
import FeaturedPostCard from '../../ui/post/featuredPostCard/featuredPostCard'

const FEATURED_POSTS: Post[] = [
  {
    id: '1',
    label: 'IT / WEB',
    isNew: true,
    date: '15. April, 2026',
    howMuchToRead: '5 min read',
    href: '/posts/1',
    title: 'Velite + pnpm Workspaces: Mein Content-Layer für 2026',
    description:
      'Warum ich MDX gegen typisierten Content getauscht habe, wie Zod-Schemas mein Blog retten und was pnpm wirklich schneller macht. Kein Hype, nur Setup.',
    image: '',
  },
]

const POSTS: Post[] = [
  {
    id: '2',
    label: 'SIMRACING',
    isNew: false,
    date: '19. März, 2026',
    howMuchToRead: '',
    href: '/posts/2',
    title: 'iRacing Season 2: Meine Daten sagen ich bremse zu früh',
    description: '',
    image: '',
  },
  {
    id: '3',
    label: 'IRL',
    date: '12. März, 2026',
    howMuchToRead: '',
    href: '/posts/3',
    title: 'Heusenstamm Bahnhof um 5:43 — Notizen',
    description: '',
    image: '',
  },
  {
    id: '4',
    label: 'IT / WEB',
    date: '04. März, 2026',
    howMuchToRead: '',
    href: '/posts/4',
    title: 'Tailwind v4, aber ohne Magic',
    description: '',
    image: '',
  },
]

function PostsSection() {
  return (
    <section className="py-20 px-4 md:px-5">
      <div className="mb-8 flex items-center gap-4">
        <h3 className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.2em] text-fg-muted">
          Neueste Ausgabe
        </h3>
        <div className="h-px w-full bg-border" />
        <p className="shrink-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.1em] text-fg-muted">
          KW 12 / 2026
        </p>
      </div>
      <div>
        {FEATURED_POSTS.map((post) => (
          <FeaturedPostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default PostsSection
