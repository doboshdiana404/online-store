import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export type User = {
  id: string;
  role: 'ROLE_ADMIN' | 'ROLE_PERSONAL';
  firstName: string;
  lastName: string;
  email: string;
};

type UserState = {
  user: User | null;
  token: string | null;
};

const initialState: UserState = {
  token: null,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  selectors: {
    token: (state) => state.token,
    userId: (state) => state.user?.id,
  },
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const { userId } = userSlice.selectors;
export const userData = (state: RootState) => state.user;
export default userSlice.reducer;
