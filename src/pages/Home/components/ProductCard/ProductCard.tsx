import { FC, useState } from 'react';

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
  const [inCart, setInCart] = useState(false);
  const handleToggleSetInCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    setInCart(!inCart);
  };
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
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>{name}</h3>
          <h4>Sweet & salty perfection</h4>
        </div>
        <StarRating rating={rating} />
      </div>
      <p className={styles.price}>{t('price', { price })}</p>
      {inCart ? (
        <Button
          variant={Variant.InCard}
          onClick={handleToggleSetInCart}
          text="In cart"
        />
      ) : (
        <Button
          variant={Variant.Card}
          onClick={handleToggleSetInCart}
          text="Add to cart"
        />
      )}
      <SelectProduct />
    </div>
  );
};

export default ProductCard;
