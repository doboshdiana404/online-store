import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from './services/baseApi';
import shoppingCartSlice from './slices/shoppingCartSlice';
import userSlice from './slices/userSlice';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice,
  shoppingCart: shoppingCartSlice,
});
