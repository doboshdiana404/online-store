import { FC } from 'react';

import { useDispatch } from 'react-redux';

import Image from '@/components/Image/Image';

import s from './CartItem.module.css';

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
  const dispatch = useDispatch();
  return (
    <div className={s.cartItem}>
      <div>
        <div className={s.cartItemFlexWrap}>
          <Image
            id={item.mainImageBaseName}
            alt={`image for ${name} product`}
            width={65}
            height={65}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p className={s.itemAmount}>Amount </p>

              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className={s.btnVolume}
              >
                <img src="/burger/minus.svg" width={28} height={29} />
              </button>
              <span className={s.quantity}>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                <img src="/burger/plus.svg" width={28} height={29} />
              </button>
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
      <button onClick={() => dispatch(removeItem(item.id))}>
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
