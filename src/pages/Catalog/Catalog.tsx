import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import Pagination from '@/modules/Pagination/Pagination';

import ProductCard from '@/components/ProductCard/ProductCard';

import styles from './Catalog.module.css';
import Filters from './modules/Filters/Filters';
import ProductList from './modules/ProductList/ProductList';

import { useGetAllProductsQuery } from '@/redux/services/products';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || 1;
  const categoryId = searchParams.get('CategoryId') || '';
  const sortBy = searchParams.get('SortBy') || '';
  const pageSize = searchParams.get('size') || 8;
  const sortDirection = searchParams.get('SortDirection') || '';
  const searchQuery = searchParams.get('SearchQuery') || '';
  const maxPrice = searchParams.get('MaxPrice') || '';
  const minPrice = searchParams.get('MinPrice') || '';
  const isActive = searchParams.get('IsActive') || '';

  const { data: products, isSuccess } = useGetAllProductsQuery({
    pageNumber,
    categoryId,
    sortBy,
    pageSize,
    sortDirection,
    searchQuery,
    maxPrice,
    minPrice,
    isActive,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [products]);
  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles.wrapper}>
          <section className={styles['bread-crams']}>Main / Shop</section>
          <main>
            <Filters />
            {isSuccess && (
              <ProductList>
                {products.items.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </ProductList>
            )}
          </main>
          {isSuccess && (
            <Pagination
              skip={products.skip}
              take={products.take}
              totalItems={products.totalItems}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
