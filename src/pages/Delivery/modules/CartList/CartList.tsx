import { useSelector } from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';

import { selectCartItems } from '@/redux/slices/shoppingCartSlice';

const CartList = () => {
  const items = useSelector(selectCartItems);

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
