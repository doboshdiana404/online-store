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

const LOCAL_STORAGE_KEY = 'shopping_cart';

function loadCartFromLocalStorage(): CartItem[] {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return [];
  }
}

function saveCartToLocalStorage(items: CartItem[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
}

const initialState: ShoppingCartState = {
  items: loadCartFromLocalStorage(),
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
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.items);
    },

    increaseQuantity: (state, action: PayloadAction<CartItem['id']>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        saveCartToLocalStorage(state.items);
      }
    },

    decreaseQuantity: (state, action: PayloadAction<CartItem['id']>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        saveCartToLocalStorage(state.items);
      }
    },

    removeItem: (state, action: PayloadAction<CartItem['id']>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = shoppingCartSlice.actions;

export const selectCartItems = (state: RootState) => state.shoppingCart.items;

export const selectTotalCartQuantity = (state: RootState) =>
  state.shoppingCart.items.reduce((acc, i) => acc + i.quantity, 0);

export default shoppingCartSlice.reducer;
