import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { createSelector } from '@reduxjs/toolkit';
import {
  BaseQueryFn,
  TypedUseQueryStateResult,
} from '@reduxjs/toolkit/dist/query/react';

import Pagination from '@/modules/Pagination/Pagination';

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ProductCard from '@/components/ProductCard/ProductCard';

import styles from './Catalog.module.css';
import SeeMore from './components/SeeMore/SeeMore';
import Filters from './modules/Filters/Filters';
import ProductList from './modules/ProductList/ProductList';

import {
  ProductsList,
  useGetAllProductsInfinityInfiniteQuery,
} from '@/redux/services/products';

type ProjectsInfiniteQueryResult = TypedUseQueryStateResult<
  { pages: ProductsList[] },
  unknown,
  BaseQueryFn
>;

const selectCombinedProjects = createSelector(
  (res: ProjectsInfiniteQueryResult) => {
    return res.data;
  },
  (data) => data?.pages?.map((item) => item?.items)?.flat()
);

const Catalog = () => {
  const [isSlice, setIsSlice] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || 1;
  const categoryId = searchParams.get('CategoryId') || '';
  const sortBy = searchParams.get('SortBy') || '';
  const pageSize = searchParams.get('size') || 8;
  const sortDirection = searchParams.get('SortDirection') || '';
  const searchQuery = searchParams.get('SearchQuery') || '';
  const maxPrice = searchParams.get('MaxPrice') || '';
  const minPrice = searchParams.get('MinPrice') || '';
  const isActive = searchParams.get('IsActive') || '';

  const { combinedData, hasNextPage, data, isSuccess, fetchNextPage } =
    useGetAllProductsInfinityInfiniteQuery(
      {
        pageNumber,
        categoryId,
        sortBy,
        pageSize,
        sortDirection,
        searchQuery,
        maxPrice,
        minPrice,
        isActive,
      },
      {
        selectFromResult: (result) => {
          return {
            ...result,
            combinedData: selectCombinedProjects(result),
          };
        },
        initialPageParam: { page: Number(pageNumber), size: Number(pageSize) },
      }
    );
  const handleSeeMore = () => {
    setIsSlice(false);
    fetchNextPage();
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString());
      const lastPage = data?.pageParams?.[data.pageParams.length - 1]?.page;
      params.set('scroll', String(lastPage !== undefined ? lastPage + 1 : 2));
      return params;
    });
  };
  useEffect(() => {
    const scrollPage = searchParams.get('scroll');
    if (scrollPage) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev.toString());
        params.set('page', scrollPage);
        params.delete('scroll');
        return params;
      });
    }
  }, []);
  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles.wrapper}>
          <Breadcrumbs
            variant="crumbs_dark"
            crumbs={[{ link: '/catalog', name: 'Shop' }]}
          />
          <main>
            <Filters />
            {isSuccess && (
              <ProductList>
                {combinedData &&
                  (isSlice
                    ? combinedData
                        .slice(0, Number(pageSize))
                        .map((product) => (
                          <ProductCard key={product.id} {...product} />
                        ))
                    : combinedData.map((product) => (
                        <ProductCard key={product.id} {...product} />
                      )))}
              </ProductList>
            )}
          </main>
          {isSuccess && (
            <div className={styles.pagination}>
              {hasNextPage && (
                <SeeMore isActive={false} onClick={handleSeeMore} />
              )}
              <Pagination
                skip={data.pages[isSlice ? 0 : data.pages.length - 1].skip}
                take={data.pages[isSlice ? 0 : data.pages.length - 1].take}
                totalItems={
                  data.pages[isSlice ? 0 : data.pages.length - 1].totalItems
                }
                onClick={(arg) => setIsSlice(arg)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
