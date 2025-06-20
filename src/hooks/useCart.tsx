import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addItem,
  CartItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
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

  const increase = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const decrease = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const getQuantity = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return {
    cartItems,
    isInCart,
    toggleItem,
    increase,
    decrease,
    getQuantity,
  };
};

export default useCart;
