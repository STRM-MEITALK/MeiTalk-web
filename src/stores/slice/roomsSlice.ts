import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postCheckBanUserApi } from '@api/roomsApi';
import RequestStatus, { defaultState } from '@src/shared/lib/RequestStatus';
import { IRoomsInitState, IPostBanCheck } from '@type/roomsType';

const initialState: IRoomsInitState = {
  banCheck: defaultState,
};

export const postCheckBanUser = createAsyncThunk('room/postCheck', async (param: IPostBanCheck) => {
  const response = await postCheckBanUserApi(param);
  return response.data;
});

export const roomsSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCheckBanUser.pending, (state) => {
        state.banCheck.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(postCheckBanUser.rejected, (state) => {
        state.banCheck.status = RequestStatus.FAIL;
      })
      .addCase(postCheckBanUser.fulfilled, (state, action) => {
        state.banCheck.response = action.payload.response;
        state.banCheck.status = RequestStatus.SUCCESS;
      });
  },
});

export default roomsSlice.reducer;
