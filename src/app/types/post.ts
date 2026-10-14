export type Post = {
  id: string
  isNew?: boolean
  label: string
  date: string
  mainImage?: {
    alt?: string
    asset?: {
      url: string
    }
  }
  howMuchToRead: string
  href: string
  title: string
  description: string
  image: string
}
