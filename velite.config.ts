// velite.config.ts
import { defineConfig, defineCollection, s } from 'velite'

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s.object({
    title: s.string(),
    date: s.isodate(),
    description: s.string(),
    slug: s.path(),
    content: s.mdx(),
  }),
})

export default defineConfig({
  collections: { posts },
})
