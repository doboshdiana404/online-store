import { FC } from 'react';

import { Link } from 'react-router-dom';

import Image from '../Image/Image';

import styles from './ProductCard.module.css';

import { Product } from '@/redux/services/products';

export const Card: FC<Product> = ({
  id,
  name,
  price,
  sortDescription,
  mainImageBaseName,
}) => {
  return (
    <Link to={`/product/${id}`} key={id} className={styles.card}>
      <Image alt={name} height={250} width={250} id={mainImageBaseName} />
      <h3>{name}</h3>
      <p>{sortDescription}</p>
      <p>{price}$</p>
    </Link>
  );
};
