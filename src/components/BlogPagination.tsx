import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface BlogPaginationProps {
  page: number
  setPage: (page: number | ((old: number) => number)) => void
  totalCount: number
  postsPerPage: number
}

export function BlogPagination({
  page,
  setPage,
  totalCount,
  postsPerPage,
}: BlogPaginationProps) {
  const totalPages = Math.ceil(totalCount / postsPerPage)

  if (totalPages <= 1) {
    return null
  }

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setPage(Math.max(1, page - 1))
            }}
            className={page <= 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setPage(i + 1)
              }}
              isActive={page === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setPage(Math.min(totalPages, page + 1))
            }}
            className={page >= totalPages ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
