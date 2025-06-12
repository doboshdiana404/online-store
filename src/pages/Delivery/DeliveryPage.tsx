import { useSelector } from 'react-redux';

import CartList from './modules/CartList/CartList';

import { selectCartItems } from '@/redux/slices/shoppingCartSlice';

const CartPage = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My cart</h2>
      <CartList />
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

export default CartPage;
