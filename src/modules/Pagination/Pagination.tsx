import { FC, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import PaginationButton from './Components/PaginationButton';
import styles from './Pagination.module.css';
import { PaginationProps } from './types';

import { usePagination } from '@/hooks/usePagination';

const Pagination: FC<PaginationProps> = ({ skip, take, totalItems }) => {
  const [, setSearchParams] = useSearchParams();
  const { currentPage, hasNextPage, hasPreviousPage, paginationRange } =
    usePagination(totalItems, skip, take);

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
    <nav aria-label="Pagination" className={styles.pagination}>
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPreviousPage}
        variant="arrow"
        arrow={
          <svg className={styles.icon}>
            <use href="/sprite.svg#icon-arrow" />
          </svg>
        }
      />
      <div>
        {paginationRange.map((page) => (
          <PaginationButton
            key={page}
            onClick={() => handlePageChange(page)}
            pageNumber={page}
            disabled={page === currentPage}
            variant={page === currentPage ? 'active' : 'number'}
          />
        ))}
      </div>
      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNextPage}
        variant="arrow"
        arrow={
          <svg className={`${styles.icon} ${styles.next}`}>
            <use href="/sprite.svg#icon-arrow" />
          </svg>
        }
      />
    </nav>
  );
};

export default Pagination;
