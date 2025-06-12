import { useSelector } from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';

import { selectCartItems } from '@/redux/slices/shoppingCartSlice';

const CartList = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {items.length > 0 && (
        <h3
          style={{
            marginTop: '22px',
            display: 'flex',
            gap: '75px',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          <span>Total</span> <span>{totalPrice} UAH</span>
        </h3>
      )}
    </div>
  );
};

export default CartList;
