import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from './services/baseApi';
import userSlice from './slices/userSlice';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice,
});
