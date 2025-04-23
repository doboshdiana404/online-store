import { useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import styles from './PriceRangeFilter.module.css';

const PriceRangeFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialMinPrice = searchParams.get('MinPrice') || '';
  const initialMaxPrice = searchParams.get('MaxPrice') || '';

  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const handleFilter = () => {
    const minPrice = minPriceRef.current?.value || '';
    const maxPrice = maxPriceRef.current?.value || '';

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString());
      if (!minPrice || !maxPrice) {
        params.delete('MinPrice');
        params.delete('MaxPrice');
      } else {
        params.set('MinPrice', minPrice);
        params.set('MaxPrice', maxPrice);
      }
      params.set('page', '1');
      return params;
    });
  };

  return (
    <div className={styles['price-filter']}>
      <div className={styles['inputs-wrapper']}>
        <div className={styles.box}>
          <label htmlFor="min-price">Min Price:</label>
          <input
            id="min-price"
            type="number"
            ref={minPriceRef}
            defaultValue={initialMinPrice}
            placeholder="Enter minimum price"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="max-price">Max Price:</label>
          <input
            id="max-price"
            type="number"
            ref={maxPriceRef}
            defaultValue={initialMaxPrice}
            placeholder="Enter maximum price"
          />
        </div>
      </div>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default PriceRangeFilter;
