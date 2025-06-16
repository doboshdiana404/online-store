import { useMemo } from 'react';

export const usePagination = (
  totalItems: number,
  skip: number,
  take: number
) => {
  const currentPage = useMemo(() => Math.floor(skip / take) + 1, [skip, take]);
  const totalPages = useMemo(
    () => Math.ceil(totalItems / take),
    [totalItems, take]
  );

  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;
  const nextPage = hasNextPage ? currentPage + 1 : null;
  const previousPage = hasPreviousPage ? currentPage - 1 : null;

  const paginationRange = useMemo(() => {
    const pages = new Set<number>();
    pages.add(1);
    pages.add(totalPages);

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.add(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.add(2);
        pages.add(3);
        pages.add(4);
      } else if (currentPage >= totalPages - 1) {
        pages.add(totalPages - 3);
        pages.add(totalPages - 2);
        pages.add(totalPages - 1);
      } else {
        pages.add(currentPage - 1);
        pages.add(currentPage);
        pages.add(currentPage + 1);
      }
    }

    return Array.from(pages)
      .filter((page) => page >= 1 && page <= totalPages)
      .sort((a, b) => a - b)
      .slice(0, 5);
  }, [currentPage, totalPages]);

  return {
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage,
    paginationRange,
  };
};
