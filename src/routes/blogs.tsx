import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { parseAsInteger, useQueryState } from 'nuqs'
import type { BlogCategory, LoaderData } from '@/types/blogs/types'
import { API_CONFIG } from '@/lib/config'
import { Suspense } from 'react'
import { BlogLoader } from '@/components/common/BlogLoader'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { BlogPosts } from '@/components/BlogPosts'

const fetchBlogCategories = createServerFn({ method: 'GET' }).handler(
  async (): Promise<Array<BlogCategory>> => {
    const response = await fetch(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.blogCategories}`,
    )
    if (!response.ok) throw new Error('Failed to fetch categories')
    return response.json()
  },
)

export const Route = createFileRoute('/blogs')({
  loader: async (): Promise<LoaderData> => {
    const categories = await fetchBlogCategories()
    return { categories }
  },

  component: BlogList,
})
function BlogList() {
  const { categories } = Route.useLoaderData()
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  const [category, setCategory] = useQueryState(
    'category',
    parseAsInteger
      .withDefault(categories?.[0]?.id ?? 1)
      .withOptions({ clearOnDefault: false }),
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Posts</h1>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories?.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          setPage(1)
                          setCategory(cat.id)
                        }}
                        className={`w-full text-left px-4 py-2 rounded-md ${
                          category === cat.id
                            ? 'bg-blue-100 text-blue-800'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className=' md:col-span-3' >
            <Suspense fallback={<BlogLoader />}>
              <BlogPosts page={page} setPage={setPage} category={category} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
