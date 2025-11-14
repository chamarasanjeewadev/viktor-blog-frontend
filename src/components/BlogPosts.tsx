import { useSuspenseQuery } from '@tanstack/react-query'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { API_CONFIG } from '@/lib/config'
import { POSTS_PER_PAGE } from '@/lib/consts'
import type { BlogPost } from '@/types/blogs/types'
import { BlogPagination } from './BlogPagination'

interface BlogPostsProps {
  page: number
  setPage: (page: number | ((old: number) => number)) => void
  category: number
}

export function BlogPosts({ page, setPage, category }: BlogPostsProps) {
  const { data: posts } = useSuspenseQuery({
    queryKey: ['blogs', page, category],
    queryFn: (): Promise<BlogPost[]> =>
      fetch(
        `${API_CONFIG.baseViteUrl}${
          API_CONFIG.endpoints.blogs
        }?_limit=${POSTS_PER_PAGE}&_start=${(page - 1) * POSTS_PER_PAGE}` +
          (category ? `&blogpost_categories.id=${category}` : ''),
      ).then((res) => res.json()),
  })

  const { data: totalCount } = useSuspenseQuery({
    queryKey: ['blogs-count', page, category],
    queryFn: async (): Promise<number> => {
      const res = await fetch(
        `${API_CONFIG.baseViteUrl}${API_CONFIG.endpoints.blogs}/count` +
          (category ? `?blogpost_categories.id=${category}` : ''),
      )
      const data = await res.json()
      return data
    },
  })

  return (
    <div className="md:col-span-3">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts?.map((blog) => (
          <Card
            key={blog.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            {blog.cover && (
              <img
                src={`${API_CONFIG.baseViteUrl}${
                  blog.cover.formats?.medium?.url || blog.cover.url
                }`}
                alt={blog.cover.alternativeText || blog.title}
                className="w-full h-48 object-cover"
              />
            )}

            <CardHeader>
              <div className="flex items-center gap-2 mb-3">
                {blog.blogpost_categories?.map((cat) => (
                  <span
                    key={cat.id}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600">{blog.excerpt}</p>
            </CardContent>

            <CardFooter className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                {blog.author?.avatar && (
                  <img
                    src={`${API_CONFIG.baseViteUrl}${blog.author.avatar.url}`}
                    alt={blog.author.full_name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span>By {blog.author?.full_name}</span>
              </div>

              <span>
                {new Date(blog.publication_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalCount ? (
        <BlogPagination
          page={page}
          setPage={setPage}
          totalCount={totalCount}
          postsPerPage={POSTS_PER_PAGE}
        />
      ) : null}
    </div>
  )
}

