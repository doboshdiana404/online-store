import { FC, ReactNode } from 'react';

import styles from './ProductList.module.css';

interface ProductListProps {
  children: ReactNode;
}

const ProductList: FC<ProductListProps> = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};

export default ProductList;
