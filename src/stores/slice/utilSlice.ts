import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCountryCodeApi, postEmailVerificationApi, getCategoryListApi } from '@api/utilApi';
import RequestStatus, { defaultState } from '@src/shared/lib/RequestStatus';
import { ICountryInitState, IEmailVerificationType, ICategoryPayloadType } from '@type/utilType';

const initialState: ICountryInitState = {
  countryCode: {
    ...defaultState,
    data: [],
  },
  emailVerify: {
    ...defaultState,
    data: '',
  },
  categoryList: {
    ...defaultState,
    data: [],
  },
};

export const getCountry = createAsyncThunk('util/getCountry', async () => {
  const response = await getCountryCodeApi();
  return response.data;
});

export const getEmailVerification = createAsyncThunk(
  'util/emailVerification',
  async (param: IEmailVerificationType) => {
    const response = await postEmailVerificationApi(param);
    return response.data;
  },
);

export const getCategoryList = createAsyncThunk('util/getCategoryList', async (param: ICategoryPayloadType) => {
  const response = await getCategoryListApi(param);
  return response.data;
});

export const utilSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountry.pending, (state) => {
        state.countryCode.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getCountry.rejected, (state) => {
        state.countryCode.status = RequestStatus.FAIL;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.countryCode.data = action.payload.data;
        state.countryCode.response = action.payload.response;
        state.countryCode.status = RequestStatus.SUCCESS;
      })
      .addCase(getEmailVerification.pending, (state) => {
        state.emailVerify.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getEmailVerification.rejected, (state) => {
        state.emailVerify.status = RequestStatus.FAIL;
      })
      .addCase(getEmailVerification.fulfilled, (state, action) => {
        state.emailVerify.data = action.payload.data;
        state.emailVerify.response = action.payload.response;
        state.emailVerify.status = RequestStatus.SUCCESS;
      })
      .addCase(getCategoryList.pending, (state) => {
        state.categoryList.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getCategoryList.rejected, (state) => {
        state.categoryList.status = RequestStatus.FAIL;
      })
      .addCase(getCategoryList.fulfilled, (state, action) => {
        state.categoryList.data = action.payload.data;
        state.categoryList.response = action.payload.response;
        state.categoryList.status = RequestStatus.SUCCESS;
      });
  },
});

export default utilSlice.reducer;
