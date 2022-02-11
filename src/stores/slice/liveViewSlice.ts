import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '@api/liveViewApi';
import RequestStatus, { defaultState } from '@lib/RequestStatus';
import { ILiveViewInitState, IGetLiveViewInfoBody, IUpdateLikeBody, IUpdateSaveBody } from '@type/liveViewType';

const initialState: ILiveViewInitState = {
  liveViewInfo: {
    ...defaultState,
    data: {
      channelId: null,
      vodId: null,
      title: '',
      detail: '',
      name: '',
      playToken: '',
      profile: null,
      isLike: false,
      isSave: false,
      streamTime: '',
      chatKey: null,
      viewCount: 0,
      likeCount: 0,
      playbackUrl: '',
      vodUrls: {
        auto: '',
      },
    },
  },
  isLiveFinish: false,
};

export const getLiveViewInfo = createAsyncThunk('liveView/getLiveViewInfo', async (param: IGetLiveViewInfoBody) => {
  const response = await api.getLiveViewInfo(param);
  return response.data;
});

export const updateLiveLike = createAsyncThunk('liveView/updateLiveLike', async (param: IUpdateLikeBody) => {
  const response = await api.updateLiveLike(param);
  return response.data;
});

export const updateLiveSave = createAsyncThunk('liveView/updateLiveSave', async (param: IUpdateSaveBody) => {
  const response = await api.updateLiveSave(param);
  return response.data;
});

export const liveViewSlice = createSlice({
  name: 'liveView',
  initialState,
  reducers: {
    setLiveLikeCnt: (state, action) => {
      state.liveViewInfo.data.likeCount = action.payload;
    },
    setLiveInfo: (state, action) => {
      state.liveViewInfo.data.title = action.payload.title;
      state.liveViewInfo.data.detail = action.payload.detail;
    },
    setViewCount: (state, action) => {
      state.liveViewInfo.data.viewCount = action.payload;
    },
    setIsLiveFinish: (state, action) => {
      state.isLiveFinish = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLiveViewInfo.pending, (state) => {
        state.liveViewInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getLiveViewInfo.rejected, (state) => {
        state.liveViewInfo.status = RequestStatus.FAIL;
      })
      .addCase(getLiveViewInfo.fulfilled, (state, action) => {
        if (action.payload.data === null) {
          state.liveViewInfo.data = initialState.liveViewInfo.data;
          state.liveViewInfo.response = action.payload.response;
          state.liveViewInfo.status = RequestStatus.NODATA;
        } else {
          state.liveViewInfo.data = action.payload.data;
          state.liveViewInfo.response = action.payload.response;
          state.liveViewInfo.status = RequestStatus.SUCCESS;
        }
      })
      .addCase(updateLiveLike.pending, (state) => {
        state.liveViewInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateLiveLike.rejected, (state) => {
        state.liveViewInfo.status = RequestStatus.FAIL;
      })
      .addCase(updateLiveLike.fulfilled, (state, action) => {
        state.liveViewInfo.data.isLike = action.payload.data.likeToggle;
        state.liveViewInfo.response = action.payload.response;
        state.liveViewInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(updateLiveSave.pending, (state) => {
        state.liveViewInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateLiveSave.rejected, (state) => {
        state.liveViewInfo.status = RequestStatus.FAIL;
      })
      .addCase(updateLiveSave.fulfilled, (state, action) => {
        state.liveViewInfo.data.isSave = action.payload.data.saveToggle;
        state.liveViewInfo.response = action.payload.response;
        state.liveViewInfo.status = RequestStatus.SUCCESS;
      });
  },
});

export default liveViewSlice.reducer;
export const { setLiveLikeCnt, setLiveInfo, setViewCount, setIsLiveFinish } = liveViewSlice.actions;
