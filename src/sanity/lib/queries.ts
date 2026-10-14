import { groq } from 'next-sanity'

export const POSTS_LIST_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  featured,
  mainImage{
    alt,
    asset->{
      _id,
      url,
      metadata { lqip }
    }
  },
  "label": categories[0]->title,
  "words": length(string::split(pt::text(body), " ")),
  categories[]->{
    title,
    "slug": slug.current
  }
}`

export const DOORS_QUERY = groq`*[_type == "category"]{
  _id,
  "slug": slug.current,
  "latestPost": *[_type == "post" && references(^._id)] | order(date desc)[0].title,
  "count": count(*[_type == "post" && references(^._id)])
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url,
        metadata { dimensions }
      }
    },
    _type == "code" => {
      ...,
      language,
      code,
      filename
    }
  },
  featured,
  mainImage{
    alt,
    asset->{
      _id,
      url
    }
  },
  "label": categories[0]->title,
  "words": length(string::split(pt::text(body), " ")),
  categories[]->{
    title,
    "slug": slug.current
  }
}`

export const POSTS_QUERY = POSTS_LIST_QUERY
