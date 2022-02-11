import moment from 'moment';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as api from '@api/streamApi';
import * as liveApi from '@api/liveViewApi';
import RequestStatus, { defaultState } from '@lib/RequestStatus';
import { IStreamInitState, IGetStreamListBody, IUpdateStreamSaveBody } from '@type/streamType';
import removeDuplication from '@src/shared/lib/removeDuplication';

const initialState: IStreamInitState = {
  streamListInfo: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 24,
      totalElements: 0,
    },
  },

  liveListInfo: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 24,
      totalElements: 0,
    },
  },
  liveFrameListInfo: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 24,
      totalElements: 0,
    },
  },
  hotListInfo: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 24,
      totalElements: 0,
    },
  },
  updateListInfo: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 24,
      totalElements: 0,
    },
  },
  weeklyListInfo: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 24,
      totalElements: 0,
    },
  },
  monthlyListInfo: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 24,
      totalElements: 0,
    },
  },
  chatKey: '',
  updateStreamSave: {
    ...defaultState,
    data: null,
  },
};

export const getStreamList = createAsyncThunk('stream/getStreamList', async (param: IGetStreamListBody) => {
  const response = await api.getStreamListApi(param, true);
  return response.data;
});

export const getLiveList = createAsyncThunk('stream/getLiveList', async (param: IGetStreamListBody) => {
  const response = await api.getStreamListApi(param, true);
  return response.data;
});

export const getLiveFrameList = createAsyncThunk('stream/getLiveFrameList', async (param: IGetStreamListBody) => {
  const response = await api.getStreamListApi(param, true);
  return response.data;
});

export const getHotList = createAsyncThunk('stream/getHotList', async (param: IGetStreamListBody) => {
  const response = await api.getStreamListApi(param, false);
  return response.data;
});

export const getUpdateList = createAsyncThunk('stream/getUpdateList', async (param: IGetStreamListBody) => {
  const response = await api.getStreamListApi(param, false);
  return response.data;
});

export const getWeeklyList = createAsyncThunk('stream/getWeeklyList', async (param: IGetStreamListBody) => {
  const response = await api.getStreamListApi(param, false);
  return response.data;
});

export const getMonthlyList = createAsyncThunk('stream/getMonthlyList', async (param: IGetStreamListBody) => {
  const response = await api.getStreamListApi(param, false);
  return response.data;
});

export const getMainLiveChatKey = createAsyncThunk('stream/getMainLiveChatKey', async (param: any) => {
  const response = await liveApi.getLiveViewInfo(param);
  return response.data.data.chatKey;
});

export const updateStreamSave = createAsyncThunk('stream/updateStreamSave', async (param: IUpdateStreamSaveBody) => {
  const response = await api.updateStreamSave(param);
  return response.data;
});

export const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    setInitialize(state) {
      state.streamListInfo.data = initialState.streamListInfo.data;
      state.liveListInfo.data = initialState.liveListInfo.data;
      state.liveFrameListInfo.data = initialState.liveFrameListInfo.data;
      state.hotListInfo.data = initialState.hotListInfo.data;
      state.updateListInfo.data = initialState.updateListInfo.data;
      state.weeklyListInfo.data = initialState.weeklyListInfo.data;
      state.monthlyListInfo.data = initialState.monthlyListInfo.data;
    },

    resetFrameList(state) {
      state.liveFrameListInfo = {
        ...defaultState,
        data: {
          streams: [],
          pageNo: 0,
          pageSize: 24,
          totalElements: 0,
        },
      };
    },
    resetLiveList(state) {
      state.liveListInfo = {
        ...defaultState,
        data: {
          streams: [],
          pageNo: 0,
          pageSize: 24,
          totalElements: 0,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStreamList.pending, (state) => {
        state.streamListInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getStreamList.rejected, (state) => {
        state.streamListInfo.status = RequestStatus.FAIL;
      })
      .addCase(getStreamList.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.streamListInfo.data = {
            ...action.payload.data,
            streams: removeDuplication(
              [
                ...state.streamListInfo.data.streams,
                ...action.payload.data.streams.map((item) => {
                  return {
                    ...item,
                    streamTime: item.isLive ? item.streamTime : moment(item.streamTime).format('YYYY.MM.DD'),
                  };
                }),
              ],
              'vodId',
            ),
          };
        }

        state.streamListInfo.response = action.payload.response;
        state.streamListInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(getLiveList.pending, (state) => {
        state.liveListInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getLiveList.rejected, (state) => {
        state.liveListInfo.status = RequestStatus.FAIL;
      })
      .addCase(getLiveList.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          if (action.payload.data.pageNo === 0) {
            state.liveListInfo.data = {
              ...action.payload.data,
              streams: removeDuplication(
                [
                  ...action.payload.data.streams.map((item) => {
                    return {
                      ...item,
                      streamTime: item.isLive ? item.streamTime : moment(item.streamTime).format('YYYY.MM.DD'),
                    };
                  }),
                ],
                'channelId',
              ),
            };
          } else {
            state.liveListInfo.data = {
              ...action.payload.data,
              streams: removeDuplication(
                [
                  ...state.liveListInfo.data.streams,
                  ...action.payload.data.streams.map((item) => {
                    return {
                      ...item,
                      streamTime: item.isLive ? item.streamTime : moment(item.streamTime).format('YYYY.MM.DD'),
                    };
                  }),
                ],
                'channelId',
              ),
            };
          }
        }
        state.liveListInfo.response = action.payload.response;
        state.liveListInfo.status = RequestStatus.SUCCESS;
      })

      .addCase(getLiveFrameList.pending, (state) => {
        state.liveFrameListInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getLiveFrameList.rejected, (state) => {
        state.liveFrameListInfo.status = RequestStatus.FAIL;
      })
      .addCase(getLiveFrameList.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          if (action.payload.data.pageNo === 0) {
            state.liveFrameListInfo.data = {
              ...action.payload.data,
              streams: removeDuplication(
                [
                  ...action.payload.data.streams.map((item) => {
                    return {
                      ...item,
                      streamTime: item.isLive ? item.streamTime : moment(item.streamTime).format('YYYY.MM.DD'),
                    };
                  }),
                ],
                'channelId',
              ),
            };
          } else {
            state.liveFrameListInfo.data = {
              ...action.payload.data,
              streams: removeDuplication(
                [
                  ...state.liveFrameListInfo.data.streams,
                  ...action.payload.data.streams.map((item) => {
                    return {
                      ...item,
                      streamTime: item.isLive ? item.streamTime : moment(item.streamTime).format('YYYY.MM.DD'),
                    };
                  }),
                ],
                'channelId',
              ),
            };
          }
        }
        state.liveFrameListInfo.response = action.payload.response;
        state.liveFrameListInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(getHotList.pending, (state) => {
        state.hotListInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getHotList.rejected, (state) => {
        state.hotListInfo.status = RequestStatus.FAIL;
      })
      .addCase(getHotList.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.hotListInfo.data = {
            ...action.payload.data,
            streams: removeDuplication(
              [
                ...state.hotListInfo.data.streams,
                ...action.payload.data.streams.map((item) => {
                  return {
                    ...item,
                    streamTime: item.isLive ? item.streamTime : moment(item.streamTime).format('YYYY.MM.DD'),
                  };
                }),
              ],
              'vodId',
            ),
          };
        }
        state.hotListInfo.response = action.payload.response;
        state.hotListInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(getUpdateList.pending, (state) => {
        state.updateListInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getUpdateList.rejected, (state) => {
        state.updateListInfo.status = RequestStatus.FAIL;
      })
      .addCase(getUpdateList.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.updateListInfo.data = {
            ...action.payload.data,
            streams: removeDuplication(
              [
                ...state.updateListInfo.data.streams,
                ...action.payload.data.streams.map((item) => {
                  return {
                    ...item,
                    streamTime: item.isLive ? item.streamTime : moment(item.streamTime).format('YYYY.MM.DD'),
                  };
                }),
              ],
              'vodId',
            ),
          };
        }
        state.updateListInfo.response = action.payload.response;
        state.updateListInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(getWeeklyList.pending, (state) => {
        state.weeklyListInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getWeeklyList.rejected, (state) => {
        state.weeklyListInfo.status = RequestStatus.FAIL;
      })
      .addCase(getWeeklyList.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.weeklyListInfo.data = {
            ...action.payload.data,
            streams: removeDuplication(
              [
                ...state.weeklyListInfo.data.streams,
                ...action.payload.data.streams.map((item) => {
                  return {
                    ...item,
                    streamTime: item.isLive ? item.streamTime : moment(item.streamTime).format('YYYY.MM.DD'),
                  };
                }),
              ],
              'vodId',
            ),
          };
        }
        state.weeklyListInfo.response = action.payload.response;
        state.weeklyListInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(getMonthlyList.pending, (state) => {
        state.monthlyListInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getMonthlyList.rejected, (state) => {
        state.monthlyListInfo.status = RequestStatus.FAIL;
      })
      .addCase(getMonthlyList.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.monthlyListInfo.data = {
            ...action.payload.data,
            streams: removeDuplication(
              [
                ...state.monthlyListInfo.data.streams,
                ...action.payload.data.streams.map((item) => {
                  return {
                    ...item,
                    streamTime: item.isLive ? item.streamTime : moment(item.streamTime).format('YYYY.MM.DD'),
                  };
                }),
              ],
              'vodId',
            ),
          };
        }
        state.monthlyListInfo.response = action.payload.response;
        state.monthlyListInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(getMainLiveChatKey.pending, (state) => {
        state.monthlyListInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getMainLiveChatKey.rejected, (state) => {
        state.monthlyListInfo.status = RequestStatus.FAIL;
      })
      .addCase(getMainLiveChatKey.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.chatKey = action.payload;
        }
        state.monthlyListInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(updateStreamSave.pending, (state) => {
        state.updateStreamSave.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateStreamSave.rejected, (state) => {
        state.updateStreamSave.status = RequestStatus.FAIL;
      })
      .addCase(updateStreamSave.fulfilled, (state, action) => {
        state.updateStreamSave.data = action.payload.data;
        state.updateStreamSave.response = action.payload.response;
        state.updateStreamSave.status = RequestStatus.SUCCESS;
      });
  },
});

const { actions, reducer } = streamSlice;
export const { setInitialize, resetLiveList, resetFrameList } = actions;
export default reducer;
