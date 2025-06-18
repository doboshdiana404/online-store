import { FC, useCallback } from 'react';

import Image from '@/components/Image/Image';

import VolumeButton from '@/ui/VolumeButton/VolumeButton';

import s from './CartItem.module.css';

import { useAppDispatch } from '@/redux/hooks';
import {
  CartItem as CartItemType,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '@/redux/slices/shoppingCartSlice';

type Props = {
  item: CartItemType;
};

const CartItem: FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleDecrease = useCallback(() => {
    dispatch(decreaseQuantity(item.id));
  }, [dispatch, item.id]);

  const handleIncrease = useCallback(() => {
    dispatch(increaseQuantity(item.id));
  }, [dispatch, item.id]);

  const handleRemove = useCallback(() => {
    dispatch(removeItem(item.id));
  }, [dispatch, item.id]);

  return (
    <div className={s.cartItem}>
      <div>
        <div className={s.cartItemFlexWrap}>
          <Image
            id={item.mainImageBaseName}
            alt={`image for ${item.name} product`}
            width={65}
            height={65}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p className={s.itemAmount}>Amount </p>
              <VolumeButton type="decrease" onClick={handleDecrease} />

              <span className={s.quantity}>{item.quantity}</span>

              <VolumeButton type="increase" onClick={handleIncrease} />
            </div>

            <p
              className={s.itemPrice}
              style={{ display: 'flex', gap: '40px', marginTop: '7px' }}
            >
              Price <span>{item.quantity * item.price} UAH</span>
            </p>
          </div>
        </div>

        <h4 className={s.titleProduct}>{item.name}</h4>
      </div>

      <button onClick={handleRemove}>
        <img
          src="/burger/closeBlack.svg"
          width={21}
          height={21}
          className={s.iconClose}
        />
      </button>
    </div>
  );
};

export default CartItem;
