import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addItem,
  CartItem,
  removeItem,
  selectCartItems,
} from '@/redux/slices/shoppingCartSlice';

const useCart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const isInCart = (id: string) => cartItems.some((item) => item.id === id);

  const toggleItem = (product: Omit<CartItem, 'quantity'>) => {
    if (isInCart(product.id)) {
      dispatch(removeItem(product.id));
    } else {
      dispatch(addItem(product));
    }
  };

  return { cartItems, isInCart, toggleItem };
};

export default useCart;
