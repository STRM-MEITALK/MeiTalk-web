import { createSlice } from '@reduxjs/toolkit';
import { IGlobalModalInitState } from '@type/globalModalType';

const initialState: IGlobalModalInitState = {
  loginModal: false,
  errorModal: false,
  accessDenyModal: false,
  banModal: false,
  preparingModal: false,
  scrollY: 0,
};

export const globalModalSlice = createSlice({
  name: 'globalModal',
  initialState,
  reducers: {
    handleLoginModal: (state, action) => {
      state.loginModal = action.payload;
    },
    handleErrorModal: (state, action) => {
      state.errorModal = action.payload;
    },
    handleAccessDenyModal: (state, action) => {
      state.accessDenyModal = action.payload;
    },
    handleBanModal: (state, action) => {
      state.banModal = action.payload;
    },
    handlePreparingModal: (state, action) => {
      state.preparingModal = action.payload;
    },
    handleScrollY: (state, action) => {
      state.scrollY = action.payload;
    },
  },
});

export default globalModalSlice.reducer;
export const {
  handleLoginModal,
  handleErrorModal,
  handleAccessDenyModal,
  handleBanModal,
  handlePreparingModal,
  handleScrollY,
} = globalModalSlice.actions;
