export const API_CONFIG = {
  baseUrl: process.env.VITE_API_BASE_URL,
  baseViteUrl: import.meta.env.VITE_API_BASE_URL,
  endpoints: {
    blogs: '/blogposts',
    users: '/users',
    blogCategories: '/blogpost-categories',
    blogsCount: '/blogposts/count',
  },
}
