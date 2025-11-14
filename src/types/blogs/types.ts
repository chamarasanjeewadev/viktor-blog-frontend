type BlogPost = {
  id: number
  title: string
  excerpt: string
  body: string
  intro: string
  slug: string
  publication_date: string
  author: {
    id: number
    full_name: string
    avatar?: {
      url: string
    }
  }
  cover?: {
    url: string
    alternativeText?: string
    formats?: {
      medium?: { url: string }
      small?: { url: string }
    }
  }
  blogpost_categories?: Array<{ id: number; name: string }>
}

type BlogCategory = {
  id: number
  name: string
}

type LoaderData = {
  categories: Array<BlogCategory>
}

export type { BlogPost, BlogCategory,LoaderData }
