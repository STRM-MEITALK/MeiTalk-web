import { createSlice } from '@reduxjs/toolkit';
import { ILoadingInitState } from '@type/loadingType';

const initialState: ILoadingInitState = {
  loadingCnt: 0,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    plusLoadingCnt: (state) => {
      state.loadingCnt += 1;
    },
    minusLoadingCnt: (state) => {
      state.loadingCnt -= 1;
    },
  },
});

export default loadingSlice.reducer;
export const { plusLoadingCnt, minusLoadingCnt } = loadingSlice.actions;
