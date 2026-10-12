export const POSTS_LIST_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  featured,
  mainImage,
  "label": categories[0]->title,
  "words": length(string::split(pt::text(body), " ")),
  categories[]->{
    title,
    "slug": slug.current
  }
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  body,
  featured,
  mainImage,
  "label": categories[0]->title,
  "words": length(string::split(pt::text(body), " ")),
  categories[]->{
    title,
    "slug": slug.current
  }
}`

export const POSTS_QUERY = POSTS_LIST_QUERY
