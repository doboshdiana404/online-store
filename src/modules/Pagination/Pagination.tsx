import { FC, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import PaginationButton from './Components/PaginationButton';

export interface PaginationProps {
  totalItems: number;
  skip: number;
  take: number;
}

const calculatePagination = (
  totalItems: number,
  skip: number,
  take: number
) => {
  const currentPage = Math.floor(skip / take) + 1;
  const totalPages = Math.ceil(totalItems / take);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  return {
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    nextPage: hasNextPage ? currentPage + 1 : null,
    previousPage: hasPreviousPage ? currentPage - 1 : null,
  };
};

const Pagination: FC<PaginationProps> = ({ skip, take, totalItems }) => {
  const [, setSearchParams] = useSearchParams();
  const {
    currentPage,
    nextPage,
    previousPage,
    hasNextPage,
    hasPreviousPage,
    totalPages,
  } = calculatePagination(totalItems, skip, take);

  const setNewSearchParams = useCallback(
    (newPage: string) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev.toString());
        params.set('page', newPage);
        return params;
      });
    },
    [setSearchParams]
  );

  const handlePageChange = (newPage: number) => {
    setNewSearchParams(String(newPage));
  };

  return (
    <nav aria-label="Pagination">
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPreviousPage}
        pageNumber="Prev"
      />
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
        pageNumber={1}
      />
      {previousPage && (
        <PaginationButton
          onClick={() => handlePageChange(previousPage)}
          pageNumber={previousPage}
        />
      )}
      <PaginationButton disabled pageNumber={currentPage} />
      {nextPage && (
        <PaginationButton
          onClick={() => handlePageChange(nextPage)}
          pageNumber={nextPage}
        />
      )}
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
        pageNumber={totalPages}
      />
      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNextPage}
        pageNumber="Next"
      />
    </nav>
  );
};

export default Pagination;
