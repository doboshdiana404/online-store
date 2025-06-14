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
            alt={`image for ${item.name} product`}
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
                <svg
                  className={s.iconVolume}
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0337 14.5L6.96635 14.5M27.0625 14.5C27.0625 21.7142 21.2142 27.5625 14 27.5625C6.78578 27.5625 0.9375 21.7142 0.9375 14.5C0.9375 7.28578 6.78578 1.4375 14 1.4375C21.2142 1.4375 27.0625 7.28578 27.0625 14.5Z"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <span className={s.quantity}>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                <svg
                  className={s.iconVolume}
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0337 14.5L6.96635 14.5M14 21.5338V7.46647M27.0625 14.5C27.0625 21.7142 21.2142 27.5625 14 27.5625C6.78578 27.5625 0.9375 21.7142 0.9375 14.5C0.9375 7.28578 6.78578 1.4375 14 1.4375C21.2142 1.4375 27.0625 7.28578 27.0625 14.5Z"
                    strokeLinecap="round"
                  />
                </svg>
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
