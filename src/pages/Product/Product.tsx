import { useNavigate, useParams } from 'react-router-dom';

import { skipToken } from '@reduxjs/toolkit/query';

import Image from '@/components/Image/Image';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

import styles from './Product.module.css';

import {
  useDeleteProductMutation,
  useGetProductByIdQuery,
} from '@/redux/services/products';

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [deleteProduct] = useDeleteProductMutation();
  const {
    data: product,
    isSuccess,
    isLoading,
    isFetching,
  } = useGetProductByIdQuery(productId ?? skipToken);
  const handleDeleteProduct = () => {
    if (product && product.id) {
      deleteProduct(product.id);
      navigate('/catalog');
    }
  };
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
      <Button
        variant={Variant.Basic}
        text="Delete"
        onClick={handleDeleteProduct}
      />
    </section>
  );
};

export default Product;
