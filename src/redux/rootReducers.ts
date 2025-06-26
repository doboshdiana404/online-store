import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from './services/baseApi';
import { novaPoshtaApi } from './services/novaPoshtaApi';
import shoppingCartSlice from './slices/shoppingCartSlice';
import userSlice from './slices/userSlice';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice,
  shoppingCart: shoppingCartSlice,
  [novaPoshtaApi.reducerPath]: novaPoshtaApi.reducer,
});
