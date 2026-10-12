import { urlFor } from '@/sanity/lib/image'
import { Post } from '../../app/types/post'
import { getISOWeek, getISOWeekYear } from 'date-fns'

export type RawPost = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  mainImage?: { asset?: { _ref: string } }
  featured?: boolean
  label?: string
  words?: number
  publishedAt: string
  categories?: { title: string; slug: string }[]
}

export function toPost(p: RawPost): Post {
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

export function getKWFromPosts(posts: RawPost[]) {
  if (!posts.length) return null
  const latest = posts.reduce((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? a : b))
  const d = new Date(latest.publishedAt)
  return { kw: getISOWeek(d), year: getISOWeekYear(d), date: d }
}
