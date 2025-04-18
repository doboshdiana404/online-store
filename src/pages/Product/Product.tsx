import { useParams } from 'react-router-dom';

import { skipToken } from '@reduxjs/toolkit/query';

import Image from '@/components/Image/Image';

import styles from './Product.module.css';

import { useGetProductByIdQuery } from '@/redux/services/products';

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const {
    data: product,
    isSuccess,
    isLoading,
    isFetching,
  } = useGetProductByIdQuery(productId ?? skipToken);
  return (
    <section className={styles.product}>
      <h2>Product</h2>
      {isSuccess && (
        <>
          <Image
            alt={`Image for ${product.name}`}
            id={product.mainProductImage}
            width={300}
            height={250}
          />
          <div className={styles.images}>
            {!!product.productImages &&
              product.productImages.map((image) => (
                <Image
                  key={image}
                  id={image}
                  alt={`Image for ${product.name}`}
                  width={200}
                  height={200}
                />
              ))}
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}$</p>
          <p>IsActive: {String(product.isActive)}</p>
          <p>StockQuantity: {product.stockQuantity}</p>
          <p>Sku: {product.sku}</p>
          <p>Id: {product.id}</p>
        </>
      )}
      {(isLoading || isFetching) && <p>Loading...</p>}
    </section>
  );
};

export default Product;
