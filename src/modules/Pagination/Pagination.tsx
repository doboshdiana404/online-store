import { FC, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import PaginationButton from './Components/PaginationButton';
import styles from './Pagination.module.css';
import { PaginationProps } from './types';

import { usePagination } from '@/hooks/usePagination';

const Pagination: FC<PaginationProps> = ({
  skip,
  take,
  totalItems,
  onClick,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentPage, hasNextPage, hasPreviousPage, paginationRange } =
    usePagination(totalItems, skip, take);

  const setNewSearchParams = useCallback(
    (newPage: string) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev.toString());
        params.set('page', newPage);
        params.delete('scroll');
        return params;
      });
    },
    [setSearchParams]
  );

  const handlePageChange = (newPage: number) => {
    const currentSearchPage = searchParams.get('page') ?? '1';
    const isSamePage = currentSearchPage === String(newPage);
    const searchScroll = searchParams.get('scroll');

    setNewSearchParams(String(newPage));

    if (isSamePage && searchScroll) {
      onClick(true);
    } else {
      onClick(false);
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
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
