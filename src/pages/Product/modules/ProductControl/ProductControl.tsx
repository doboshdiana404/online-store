import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';
import VolumeButton from '@/ui/VolumeButton/VolumeButton';

import styles from './ProductControl.module.css';
import { ProductControlProps } from './types';

import useCart from '@/hooks/useCart';

const ProductControl: FC<ProductControlProps> = ({
  name,
  price,
  id,
  mainImageBaseName,
  stockQuantity,
}) => {
  const { isInCart, toggleItem, decrease, increase, getQuantity } = useCart();

  const handleToggleSetInCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleItem({ id, mainImageBaseName, name, price });
  };
  const { t } = useTranslation();
  const handleDecreaseItem = () => decrease(id);
  const handleIncreaseItem = () => increase(id);
  return (
    <section className={styles.section}>
      <h1>{name}</h1>
      <p className={styles.price}>{t('price', { price })}</p>
      <MediaQuery minWidth={767}>
        <div className={styles.amount}>
          <p>Amount</p>
          <div className={styles.control}>
            <VolumeButton
              typeIcon="minus"
              onClick={handleDecreaseItem}
              type="button"
            />
            <span>{getQuantity(id)}</span>
            <VolumeButton
              typeIcon="plus"
              onClick={handleIncreaseItem}
              type="button"
            />
          </div>
        </div>
      </MediaQuery>
      <div className={styles.btns}>
        <Button variant={Variant.Shop} text="Shop now" />
        <>
          {isInCart(id) ? (
            <Button
              variant={Variant.ProductInCart}
              onClick={handleToggleSetInCart}
              icon={
                <>
                  <p>In cart</p>
                  <svg>
                    <use href="/sprite.svg#cart" />
                  </svg>
                </>
              }
            />
          ) : (
            <Button
              variant={Variant.ProductCart}
              onClick={handleToggleSetInCart}
              disabled={stockQuantity ? false : true}
              icon={
                <>
                  <p>Add to cart</p>
                  <svg>
                    <use href="/sprite.svg#cart" />
                  </svg>
                </>
              }
            />
          )}
        </>
      </div>
      <div className={styles.control}></div>
    </section>
  );
};

export default ProductControl;
