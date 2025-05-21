import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Image from '@/components/Image/Image';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';
import SelectProduct from '@/ui/SelectProduct/SelectProduct';
import { StarRating } from '@/ui/StarRating/StarRating';

import styles from './ProductCard.module.css';

import { Product } from '@/redux/services/products';

const ProductCard: FC<Product> = ({
  id,
  mainImageBaseName,
  name,
  rating,
  price,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleNavigateTo = () => navigate(`/product/${id}`);
  return (
    <div onClick={handleNavigateTo} className={styles.card}>
      <Image
        id={mainImageBaseName}
        alt={`image for ${name} product`}
        width={153}
        height={116}
        className={styles.img}
      />
      <div className={styles.title}>
        <h3>{name}</h3>
        <h4>Sweet & salty perfection</h4>
      </div>
      <StarRating rating={rating} />
      <p className={styles.price}>{t('price', { price })}</p>
      <Button variant={Variant.Card} text="Add to cart" />
      <SelectProduct />
    </div>
  );
};

export default ProductCard;
