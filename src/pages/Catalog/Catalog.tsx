import { Link, useSearchParams } from 'react-router-dom';

import CategoriesList from '@/modules/CategoriesList/CategoriesList';
import ResetButton from '@/modules/ClearFilters/ClearFilters';
import PageSizeSelect from '@/modules/PageSizeSelect/PageSizeSelect';
import Pagination from '@/modules/Pagination/Pagination';
import PriceRangeFilter from '@/modules/PriceRangeFilter/PriceRangeFilter';
import Search from '@/modules/Search/Search';
import SortByIsActive from '@/modules/SortByIsActive/SortByIsActive';
import SortSelect from '@/modules/SortSelect/SortSelect';

import styles from './Catalog.module.css';

import image from '@/assets/example/example.png';
import { useGetAllProductsQuery } from '@/redux/services/products';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || 1;
  const pageSize = searchParams.get('size') || 8;
  const categoryId = searchParams.get('CategoryId') || '';
  const sortBy = searchParams.get('SortBy') || '';
  const sortDirection = searchParams.get('SortDirection') || '';
  const searchQuery = searchParams.get('SearchQuery') || '';
  const maxPrice = searchParams.get('MaxPrice') || '';
  const minPrice = searchParams.get('MinPrice') || '';
  const isActive = searchParams.get('IsActive') || '';

  const {
    data: products,
    isSuccess,
    isLoading,
    isFetching,
  } = useGetAllProductsQuery({
    pageSize,
    pageNumber,
    categoryId,
    sortBy,
    sortDirection,
    searchQuery,
    maxPrice,
    minPrice,
    isActive,
  });
  return (
    <section className={styles.catalog}>
      <h2>Catalog</h2>
      <Search />
      <CategoriesList />
      <div className={styles.filters}>
        <PageSizeSelect />
        <SortSelect />
        <PriceRangeFilter />
        <SortByIsActive />
        <ResetButton />
      </div>
      <div className={styles['product-list']}>
        {isSuccess &&
          products.items.map(({ id, ...product }) => (
            <Link
              to={`/product/${id}`}
              key={id}
              className={styles['product-card']}
            >
              <img src={image} alt="" loading="lazy" width={250} height={250} />
              <h3>{product.name}</h3>
              <p>{product.sortDescription}</p>
              <p>{product.price}$</p>
            </Link>
          ))}
        {isFetching || (isLoading && <p>Loading...</p>)}
      </div>
      {isSuccess && (
        <Pagination
          skip={products.skip}
          take={products.take}
          totalItems={products.totalItems}
        />
      )}
    </section>
  );
};

export default Catalog;
