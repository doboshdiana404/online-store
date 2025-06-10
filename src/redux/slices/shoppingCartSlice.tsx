import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export type CartItem = {
  id: string;
  mainImageBaseName: string;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartState = {
  items: CartItem[];
};

const initialState: ShoppingCartState = {
  items: [],
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existedItem) {
        existedItem.quantity++;
      } else state.items.push({ ...action.payload, quantity: 1 });
    },
    increaseQuantity: (state, action: PayloadAction<CartItem['id']>) => {
      const existedItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existedItem) {
        existedItem.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem['id']>) => {
      const existedItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existedItem && existedItem.quantity !== 1) {
        existedItem.quantity--;
      }
    },
    removeItem: (state, action: PayloadAction<CartItem['id']>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
  addItem,
} = shoppingCartSlice.actions;
export const selectCartItems = (state: RootState) => state.shoppingCart.items;
export const selectTotalCartQuantity = (state: RootState) =>
  state.shoppingCart.items.reduce((acc, i) => acc + i.quantity, 0);

export default shoppingCartSlice.reducer;
