import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export type ModalState = {
  openedModalType: 'review' | null;
  redirect: string;
};

const initialState: ModalState = {
  openedModalType: null,
  redirect: '',
};

type ActionPayload = {
  openedModalType: ModalState['openedModalType'];
  redirect?: string;
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<ActionPayload>) => {
      state.openedModalType = action.payload.openedModalType;
      state.redirect = action.payload.redirect || '';
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const modalType = (state: RootState) => state.modal.openedModalType;
export const redirectPath = (state: RootState) => state.modal.redirect;
export default modalSlice.reducer;
