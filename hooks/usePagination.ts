export function usePagination(total: number, page: number, perPage: number = 10) {
  const totalPages = Math.ceil(total / perPage);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return { totalPages, hasPrev, hasNext };
}