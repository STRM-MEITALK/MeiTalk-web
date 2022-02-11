import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as api from '@api/broadApi';
import * as type from '@type/broadType';
import RequestStatus, { defaultState } from '@lib/RequestStatus';

const initialState: type.IBroadInitState = {
  resetTrigger: false,
  createChannelResult: {
    ...defaultState,
    data: {
      rtmpUrl: '',
      streamValue: '',
      playbackUrl: '',
      playToken: '',
    },
  },
  startStreamResult: {
    ...defaultState,
    data: '',
  },
  streamInfo: {
    ...defaultState,
    data: {
      vodId: 0,
      channelId: 0,
      userNo: 0,
      streamId: 'string',
      vodTitle: 'string',
      vodDetail: 'string',
      vodCategory: 'string',
      playbackUrl: 'string',
      chatKey: 'string',
      transmittedType: 'default',
      startTime: '',
    },
  },
  endStreamInfo: {
    ...defaultState,
    data: {
      vodId: 0,
      channelId: 0,
      userNo: 0,
      streamId: 'string',
      vodTitle: 'string',
      vodDetail: 'string',
      vodCategory: 'string',
      playbackUrl: 'string',
      chatKey: 'string',
      transmittedType: 'default',
      startTime: '',
    },
  },
  streamType: window.sessionStorage.getItem('streamType') ?? 'Liveview',
  isStreaming: 'ready',
  isOnboard: 'default',
  chatKey: '',
  startTime: '',
  vodId: -999,
  playback: '',
  playbackTrigger: '',
  playbackWrap: true,
  updateStreamInfoResult: {
    ...defaultState,
    data: {},
  },
  endStreamResult: {
    ...defaultState,
  },
  readyStreamResult: {
    ...defaultState,
    data: {
      token: '',
    },
  },
  readyCheckStreamResult: {
    ...defaultState,
    data: false,
  },
  isSetting: false,
  backTrigger: true,
  uploadStreamResult: {
    ...defaultState,
  },
};

export const createChannel = createAsyncThunk('broad/createChannel', async (param: type.ICreateChannelBody) => {
  const response = await api.createChannelApi(param);
  return response.data;
});

export const startStream = createAsyncThunk('broad/startStream', async (param: type.IStartStreamBody) => {
  const response = await api.startStreamApi(param);
  return response.data;
});

export const getStreamInfo = createAsyncThunk('broad/getStreamInfo', async (param: type.IGetStreamInfoParam) => {
  const { userNo, isSetting } = param;
  const response = await api.getStreamInfoApi({ param: { userNo }, isHidden: false });
  return { data: response.data, isSetting };
});

export const updateStreamInfo = createAsyncThunk(
  'broad/updateStreamInfo',
  async (param: type.IUpdateStreamInfoParam) => {
    const response = await api.updateStreamInfoApi(param);
    return response.data;
  },
);

export const endStream = createAsyncThunk('broad/endStream', async (param: type.IEndStreamParam) => {
  const response = await api.endStreamApi(param);
  return response.data;
});

export const getEndStreamInfo = createAsyncThunk('broad/getEndStreamInfo', async (param: type.IEndStreamInfoParam) => {
  const response = await api.getStreamInfoApi({ param, isHidden: true });
  return response.data;
});

export const readyStream = createAsyncThunk('broad/readyStream', async () => {
  const response = await api.readyStreamApi();
  return response.data;
});

export const readyCheckStream = createAsyncThunk(
  'broad/readyCheckStream',
  async (param: type.IReadyCheckStreamParam) => {
    const response = await api.readyCheckStreamApi(param);
    return response.data;
  },
);

export const uploadStream = createAsyncThunk('broad/uploadStream', async (param: type.IUploadStreamParam) => {
  const response = await api.uploadStreamApi(param);
  return response.data;
});

export const broadSlice = createSlice({
  name: 'broad',
  initialState,
  reducers: {
    setStream(state, action: PayloadAction<type.ISetStreamPayload>) {
      const { type } = action.payload;
      window.sessionStorage.setItem('streamType', type);
      state.streamType = type;
    },
    isOnboarding(state, action: PayloadAction<type.IIsOnboardingPayload>) {
      const { isOnboard } = action.payload;
      state.isOnboard = isOnboard;
    },
    isStreaming(state, action: PayloadAction<type.IIsStreamingPayload>) {
      const { isStreaming, chatKey, startTime, vodId } = action.payload;
      state.isStreaming = isStreaming;
      state.chatKey = chatKey;
      state.startTime = startTime;
      state.vodId = vodId;
    },
    setIsStreaming(state, action: PayloadAction<type.ISetIsStreamingPayload>) {
      const { isStreaming } = action.payload;
      state.isStreaming = isStreaming;
    },
    setPlayback(state, action: PayloadAction<type.ISetStreamPayload>) {
      const { type } = action.payload;
      state.playback = type;
    },
    setPlaybackTrigger(state, action: PayloadAction<type.ISetStreamPayload>) {
      const { type } = action.payload;
      state.playbackTrigger = type;
    },
    setPlaybackWrap(state, action: PayloadAction<type.ISetPlaybackWrapPayload>) {
      const { trigger } = action.payload;
      state.playbackWrap = trigger;
    },
    setResetTrigger(state) {
      state.resetTrigger = true;
    },
    resetBroad() {
      return initialState;
    },
    setBackTrigger(state, action: PayloadAction<type.ISetPlaybackWrapPayload>) {
      const { trigger } = action.payload;
      state.backTrigger = trigger;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createChannel.pending, (state) => {
        state.createChannelResult.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(createChannel.rejected, (state) => {
        state.createChannelResult.status = RequestStatus.FAIL;
      })
      .addCase(createChannel.fulfilled, (state, action) => {
        state.createChannelResult.data = action.payload.data;
        state.createChannelResult.response = action.payload.response;
        state.createChannelResult.status = RequestStatus.SUCCESS;
      })
      .addCase(startStream.pending, (state) => {
        state.startStreamResult.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(startStream.rejected, (state) => {
        state.startStreamResult.status = RequestStatus.FAIL;
      })
      .addCase(startStream.fulfilled, (state, action) => {
        state.startStreamResult.data = action.payload.data;
        state.startStreamResult.response = action.payload.response;
        state.startStreamResult.status = RequestStatus.SUCCESS;
      })
      .addCase(getStreamInfo.pending, (state) => {
        state.streamInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getStreamInfo.rejected, (state) => {
        state.streamInfo.status = RequestStatus.FAIL;
      })
      .addCase(getStreamInfo.fulfilled, (state, action) => {
        state.isSetting = action.payload.isSetting;
        state.streamInfo.data = action.payload.data.data;
        state.streamInfo.response = action.payload.data.response;
        state.streamInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(updateStreamInfo.pending, (state) => {
        state.updateStreamInfoResult.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateStreamInfo.rejected, (state) => {
        state.updateStreamInfoResult.status = RequestStatus.FAIL;
      })
      .addCase(updateStreamInfo.fulfilled, (state, action) => {
        state.updateStreamInfoResult.data = action.payload.data;
        state.updateStreamInfoResult.response = action.payload.response;
        state.updateStreamInfoResult.status = RequestStatus.SUCCESS;
      })
      .addCase(endStream.pending, (state) => {
        state.endStreamResult.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(endStream.rejected, (state) => {
        state.endStreamResult.status = RequestStatus.FAIL;
      })
      .addCase(endStream.fulfilled, (state, action) => {
        state.endStreamResult.response = action.payload.response;
        state.endStreamResult.status = RequestStatus.SUCCESS;
      })
      .addCase(getEndStreamInfo.pending, (state) => {
        state.endStreamInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getEndStreamInfo.rejected, (state) => {
        state.endStreamInfo.status = RequestStatus.FAIL;
      })
      .addCase(getEndStreamInfo.fulfilled, (state, action) => {
        state.endStreamInfo.data = action.payload.data;
        state.endStreamInfo.response = action.payload.response;
        state.endStreamInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(readyStream.pending, (state) => {
        state.readyStreamResult.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(readyStream.rejected, (state) => {
        state.readyStreamResult.status = RequestStatus.FAIL;
      })
      .addCase(readyStream.fulfilled, (state, action) => {
        state.readyStreamResult.data = action.payload.data;
        if (action.payload.data?.token) {
          window.localStorage.setItem('readyStream', action.payload.data?.token);
        }
        state.readyStreamResult.response = action.payload.response;
        state.readyStreamResult.status = RequestStatus.SUCCESS;
      })
      .addCase(readyCheckStream.pending, (state) => {
        state.readyCheckStreamResult.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(readyCheckStream.rejected, (state) => {
        state.readyCheckStreamResult.status = RequestStatus.FAIL;
      })
      .addCase(readyCheckStream.fulfilled, (state, action) => {
        state.readyCheckStreamResult.data = action.payload.data;
        state.readyCheckStreamResult.response = action.payload.response;
        state.readyCheckStreamResult.status = RequestStatus.SUCCESS;
      })
      .addCase(uploadStream.pending, (state) => {
        state.uploadStreamResult.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(uploadStream.rejected, (state) => {
        state.uploadStreamResult.status = RequestStatus.FAIL;
      })
      .addCase(uploadStream.fulfilled, (state, action) => {
        state.uploadStreamResult.response = action.payload.response;
        state.uploadStreamResult.status = RequestStatus.SUCCESS;
      });
  },
});

const { actions, reducer } = broadSlice;
export const {
  setStream,
  isStreaming,
  setIsStreaming,
  isOnboarding,
  setPlayback,
  setPlaybackTrigger,
  setPlaybackWrap,
  resetBroad,
  setResetTrigger,
  setBackTrigger,
} = actions;
export default reducer;
