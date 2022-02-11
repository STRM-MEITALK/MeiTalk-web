import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '@api/replayViewApi';
import RequestStatus, { defaultState } from '@lib/RequestStatus';
import {
  IReplayViewInitState,
  IGetReplayViewInfoBody,
  IUpdateLikeBody,
  IUpdateViewCountBody,
  IUpdateSaveBody,
} from '@type/replayViewType';

const initialState: IReplayViewInitState = {
  replayViewInfo: {
    ...defaultState,
    data: {
      owner: null,
      channelId: null,
      vodId: '',
      title: '',
      detail: '',
      name: '',
      profile: null,
      isLike: false,
      isSave: false,
      streamTime: '',
      chatKey: '',
      viewCount: 0,
      likeCount: 0,
      playbackUrl: '',
      thumbnail: null,
      vodUrls: {
        auto: '',
      },
      isPublic: false,
      category: '',
      captions: null,
    },
  },
  updateViewCount: {
    ...defaultState,
    data: 0,
  },
};

export const getReplayViewInfo = createAsyncThunk('replay/getReplayViewInfo', async (param: IGetReplayViewInfoBody) => {
  const response = await api.getReplayViewInfo(param);
  return response.data;
});

export const updateReplayLike = createAsyncThunk('replay/updateReplayLike', async (param: IUpdateLikeBody) => {
  const response = await api.updateReplayLike(param);
  return response.data;
});

export const updateViewCount = createAsyncThunk('replay/updateViewCount', async (param: IUpdateViewCountBody) => {
  const response = await api.updateViewCount(param);
  return response.data;
});

export const updateReplaySave = createAsyncThunk('replay/updateReplaySave', async (param: IUpdateSaveBody) => {
  const response = await api.updateReplaySave(param);
  return response.data;
});

export const replayViewSlice = createSlice({
  name: 'replayView',
  initialState,
  reducers: {
    setReplayInfoInit(state) {
      state.replayViewInfo.response.output = initialState.replayViewInfo.response.output;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReplayViewInfo.pending, (state) => {
        state.replayViewInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getReplayViewInfo.rejected, (state) => {
        state.replayViewInfo.status = RequestStatus.FAIL;
      })
      .addCase(getReplayViewInfo.fulfilled, (state, action) => {
        if (action.payload.data === null) {
          state.replayViewInfo.data = initialState.replayViewInfo.data;
          state.replayViewInfo.response = action.payload.response;
          state.replayViewInfo.status = RequestStatus.NODATA;
        } else {
          state.replayViewInfo.data = action.payload.data;
          state.replayViewInfo.response = action.payload.response;
          state.replayViewInfo.status = RequestStatus.SUCCESS;
        }
      })
      .addCase(updateReplayLike.pending, (state) => {
        state.replayViewInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateReplayLike.rejected, (state) => {
        state.replayViewInfo.status = RequestStatus.FAIL;
      })
      .addCase(updateReplayLike.fulfilled, (state, action) => {
        state.replayViewInfo.data.isLike = action.payload.data.likeToggle;
        state.replayViewInfo.data.likeCount = action.payload.data.likeCount;
        state.replayViewInfo.response = action.payload.response;
        state.replayViewInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(updateViewCount.pending, (state) => {
        state.updateViewCount.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateViewCount.rejected, (state) => {
        state.updateViewCount.status = RequestStatus.FAIL;
      })
      .addCase(updateViewCount.fulfilled, (state, action) => {
        state.replayViewInfo.data.viewCount = action.payload.data;
        state.updateViewCount.data = action.payload.data;
        state.updateViewCount.response = action.payload.response;
        state.updateViewCount.status = RequestStatus.SUCCESS;
      })
      .addCase(updateReplaySave.pending, (state) => {
        state.replayViewInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateReplaySave.rejected, (state) => {
        state.replayViewInfo.status = RequestStatus.FAIL;
      })
      .addCase(updateReplaySave.fulfilled, (state, action) => {
        state.replayViewInfo.data.isSave = action.payload.data.saveToggle;
        state.replayViewInfo.response = action.payload.response;
        state.replayViewInfo.status = RequestStatus.SUCCESS;
      });
  },
});

const { actions, reducer } = replayViewSlice;
export const { setReplayInfoInit } = actions;
export default reducer;
