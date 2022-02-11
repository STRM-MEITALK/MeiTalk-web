import moment from 'moment';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '@api/studioApi';
import RequestStatus, { defaultState } from '@lib/RequestStatus';
import {
  IStudioInitState,
  IGetAfterVideoListBody,
  IGetMyVideoListBody,
  IUpdateVodInfoParam,
  IDeleteVodParam,
  IGetStudioVideoInfoBody,
  IGetChannelInfoParam,
  IGetChannelVideoListBody,
  IEditChannelInfoParam,
  IPostBannerPayload,
  IDeleteBannerPayload,
} from '@type/studioType';
import { IUpdateLikeBody, IUpdateSaveBody } from '@type/replayViewType';
import removeDuplication from '@src/shared/lib/removeDuplication';

const initialState: IStudioInitState = {
  afterVideoList: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 20,
      totalElements: 0,
    },
  },

  likedVideoList: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 20,
      totalElements: 0,
    },
  },

  myVideoList: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 20,
      totalElements: 0,
    },
  },

  deleteSaveResponse: {
    ...defaultState,
  },

  deleteLikeResponse: {
    ...defaultState,
  },

  updateResponse: {
    ...defaultState,
    data: {
      vodId: '',
      vodTitle: '',
      vodDetail: '',
      vodCategory: '',
      public: false,
    },
  },

  deleteVodResponse: {
    ...defaultState,
  },

  getVideoInfo: {
    ...defaultState,
    data: {
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

  getChannelInfo: {
    ...defaultState,
    data: {
      channelId: 0,
      userProfile: {
        userNo: null,
        mailId: '',
        userPicture: '',
        userName: '',
        userCreateTime: '',
        updateTime: '',
      },
      chImg: null,
      description: '',
      isMe: '',
      views: 0,
    },
  },

  getChannelVideo: {
    ...defaultState,
    data: {
      streams: [],
      pageNo: 0,
      pageSize: 20,
      totalElements: 0,
    },
  },

  getChannelTopVideo: {
    ...defaultState,
    data: {
      id: '',
      vodId: 0,
      channelId: 0,
      name: '',
      profile: null,
      viewCount: 0,
      isLive: false,
      streamTime: '',
      streamLen: '',
      likeCount: 0,
      title: '',
      playbackUrl: '',
      channelArn: '',
      thumbnail: null,
      playToken: '',
      displayFlag: '',
      commentCount: 0,
      isOwner: false,
      detail: '',
    },
  },

  editChannelInfo: {
    ...defaultState,
  },

  postBannerImageResult: {
    ...defaultState,
    data: '',
  },
  deleteBannerImageResult: {
    ...defaultState,
  },
};

export const getAfterVideo = createAsyncThunk('studio/getAfterVideo', async (param: IGetAfterVideoListBody) => {
  const response = await api.getAfterVideo(param);
  return response.data;
});

export const getLikedVideo = createAsyncThunk('studio/getLikedVideo', async (param: IGetAfterVideoListBody) => {
  const response = await api.getLikedVideo(param);
  return response.data;
});

export const getMyVideo = createAsyncThunk('studio/getMyVideo', async (param: IGetMyVideoListBody) => {
  const response = await api.getStudioVideoList(param);
  return response.data;
});

export const deleteLike = createAsyncThunk('studio/deleteLike', async (param: IUpdateLikeBody) => {
  const response = await api.deleteLike(param);
  return response.data;
});

export const deleteSave = createAsyncThunk('studio/deleteSave', async (param: IUpdateSaveBody) => {
  const response = await api.deleteSave(param);
  return response.data;
});

export const updateVodInfo = createAsyncThunk('studio/updateVodInfo', async (param: IUpdateVodInfoParam) => {
  const response = await api.updateVodInfoApi(param);
  return response.data;
});

export const deleteVod = createAsyncThunk('studio/deleteVod', async (param: IDeleteVodParam) => {
  const response = await api.deleteVodApi(param);
  return response.data;
});

export const getStudioEditInfo = createAsyncThunk('studio/editVideo', async (param: IGetStudioVideoInfoBody) => {
  const response = await api.getStudioEditInfo(param);
  return response.data;
});

export const getChannelInfo = createAsyncThunk('studio/getChannelInfo', async (param: IGetChannelInfoParam) => {
  const response = await api.getChannelInfo(param);
  return response.data;
});

export const getChannelVideoList = createAsyncThunk(
  'studio/getChannelVideoList',
  async (param: IGetChannelVideoListBody) => {
    const response = await api.getChannelVideoList(param);
    return response.data;
  },
);

export const getChannelTopVideo = createAsyncThunk(
  'studio/getChannelTopVideo',
  async (param: IGetChannelVideoListBody) => {
    const response = await api.getChannelTopVideo(param);
    return response.data;
  },
);

export const editChannelInfo = createAsyncThunk('studio/editChannelInfo', async (param: IEditChannelInfoParam) => {
  const response = await api.editChannelInfo(param);
  return response.data;
});

export const postBannerImage = createAsyncThunk('studio/postBannerImage', async (param: IPostBannerPayload) => {
  const response = await api.postBannerImageApi(param);
  return response.data;
});

export const deleteBannerImage = createAsyncThunk('studio/deleteBannerImage', async (param: IDeleteBannerPayload) => {
  const response = await api.deleteBannerImageApi(param);
  return response.data;
});

export const studioSlice = createSlice({
  name: 'studio',
  initialState,
  reducers: {
    setInitialize(state) {
      state.afterVideoList.data = initialState.afterVideoList.data;
      state.likedVideoList.data = initialState.likedVideoList.data;
    },

    setInitializeMyVideo(state) {
      state.myVideoList.data = initialState.myVideoList.data;
    },

    setInitializeDelete(state) {
      state.deleteSaveResponse.response = initialState.deleteSaveResponse.response;
      state.deleteLikeResponse.response = initialState.deleteLikeResponse.response;
    },

    setInitializeUpdate(state) {
      state.updateResponse.response = initialState.updateResponse.response;
    },

    setInitializeChannelVideo(state) {
      state.getChannelVideo.data = initialState.getChannelVideo.data;
    },

    setInitializeEditResponse(state) {
      state.editChannelInfo.response = initialState.editChannelInfo.response;
    },
    setGetChannelInfo(state, action) {
      state.getChannelInfo.data.description = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAfterVideo.pending, (state) => {
        state.afterVideoList.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getAfterVideo.rejected, (state) => {
        state.afterVideoList.status = RequestStatus.FAIL;
      })
      .addCase(getAfterVideo.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.afterVideoList.data = {
            ...action.payload.data,
            streams: removeDuplication(
              [
                ...state.afterVideoList.data.streams,
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

        state.afterVideoList.response = action.payload.response;
        state.afterVideoList.status = RequestStatus.SUCCESS;
      })

      .addCase(getLikedVideo.pending, (state) => {
        state.likedVideoList.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getLikedVideo.rejected, (state) => {
        state.likedVideoList.status = RequestStatus.FAIL;
      })
      .addCase(getLikedVideo.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.likedVideoList.data = {
            ...action.payload.data,
            streams: removeDuplication(
              [
                ...state.likedVideoList.data.streams,
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

        state.likedVideoList.response = action.payload.response;
        state.likedVideoList.status = RequestStatus.SUCCESS;
      })

      .addCase(getMyVideo.pending, (state) => {
        state.myVideoList.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getMyVideo.rejected, (state) => {
        state.myVideoList.status = RequestStatus.FAIL;
      })
      .addCase(getMyVideo.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.myVideoList.data = {
            ...action.payload.data,
            streams: removeDuplication(
              [
                ...state.myVideoList.data.streams,
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

        state.myVideoList.response = action.payload.response;
        state.myVideoList.status = RequestStatus.SUCCESS;
      })

      .addCase(deleteLike.pending, (state) => {
        state.deleteLikeResponse.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(deleteLike.rejected, (state) => {
        state.deleteLikeResponse.status = RequestStatus.FAIL;
      })
      .addCase(deleteLike.fulfilled, (state, action) => {
        state.deleteLikeResponse.response = action.payload.response;
        state.deleteLikeResponse.status = RequestStatus.SUCCESS;
      })

      .addCase(deleteSave.pending, (state) => {
        state.deleteSaveResponse.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(deleteSave.rejected, (state) => {
        state.deleteSaveResponse.status = RequestStatus.FAIL;
      })
      .addCase(deleteSave.fulfilled, (state, action) => {
        state.deleteSaveResponse.response = action.payload.response;
        state.deleteSaveResponse.status = RequestStatus.SUCCESS;
      })

      .addCase(updateVodInfo.pending, (state) => {
        state.updateResponse.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateVodInfo.rejected, (state) => {
        state.updateResponse.status = RequestStatus.FAIL;
      })
      .addCase(updateVodInfo.fulfilled, (state, action) => {
        state.updateResponse.response = action.payload.response;
        state.updateResponse.status = RequestStatus.SUCCESS;
      })

      .addCase(deleteVod.pending, (state) => {
        state.deleteVodResponse.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(deleteVod.rejected, (state) => {
        state.deleteVodResponse.status = RequestStatus.FAIL;
      })
      .addCase(deleteVod.fulfilled, (state, action) => {
        state.deleteVodResponse.response = action.payload.response;
        state.deleteVodResponse.status = RequestStatus.SUCCESS;
      })

      .addCase(getStudioEditInfo.pending, (state) => {
        state.getVideoInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getStudioEditInfo.rejected, (state) => {
        state.getVideoInfo.status = RequestStatus.FAIL;
      })
      .addCase(getStudioEditInfo.fulfilled, (state, action) => {
        state.getVideoInfo.data = action.payload.data;
        state.getVideoInfo.response = action.payload.response;
        state.getVideoInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(getChannelInfo.pending, (state) => {
        state.getChannelInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getChannelInfo.rejected, (state) => {
        state.getChannelInfo.status = RequestStatus.FAIL;
      })
      .addCase(getChannelInfo.fulfilled, (state, action) => {
        state.getChannelInfo.data = action.payload.data;
        state.getChannelInfo.response = action.payload.response;
        state.getChannelInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(getChannelVideoList.pending, (state) => {
        state.getChannelVideo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getChannelVideoList.rejected, (state) => {
        state.getChannelVideo.status = RequestStatus.FAIL;
      })
      .addCase(getChannelVideoList.fulfilled, (state, action) => {

        if (action.payload.data !== null) {
          state.getChannelVideo.data = {
            ...action.payload.data,
            streams: removeDuplication(
              [
                ...state.getChannelVideo.data.streams,
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

        state.getChannelVideo.response = action.payload.response;
        state.getChannelVideo.status = RequestStatus.SUCCESS;
      })

      .addCase(getChannelTopVideo.pending, (state) => {
        state.getChannelTopVideo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getChannelTopVideo.rejected, (state) => {
        state.getChannelTopVideo.status = RequestStatus.FAIL;
      })
      .addCase(getChannelTopVideo.fulfilled, (state, action) => {
        state.getChannelTopVideo.data = action.payload.data;
        state.getChannelTopVideo.response = action.payload.response;
        state.getChannelTopVideo.status = RequestStatus.SUCCESS;
      })

      .addCase(editChannelInfo.pending, (state) => {
        state.editChannelInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(editChannelInfo.rejected, (state) => {
        state.editChannelInfo.status = RequestStatus.FAIL;
      })
      .addCase(editChannelInfo.fulfilled, (state, action) => {
        state.editChannelInfo.response = action.payload.response;
        state.editChannelInfo.status = RequestStatus.SUCCESS;
      })
      .addCase(postBannerImage.pending, (state) => {
        state.postBannerImageResult.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(postBannerImage.rejected, (state) => {
        state.postBannerImageResult.status = RequestStatus.FAIL;
      })
      .addCase(postBannerImage.fulfilled, (state, action) => {
        state.getChannelInfo.data.chImg = action.payload.data;
        state.postBannerImageResult.response = action.payload.response;
        state.postBannerImageResult.status = RequestStatus.SUCCESS;
      })
      .addCase(deleteBannerImage.pending, (state) => {
        state.deleteBannerImageResult.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(deleteBannerImage.rejected, (state) => {
        state.deleteBannerImageResult.status = RequestStatus.FAIL;
      })
      .addCase(deleteBannerImage.fulfilled, (state, action) => {
        state.getChannelInfo.data.chImg = null;
        state.deleteBannerImageResult.response = action.payload.response;
        state.deleteBannerImageResult.status = RequestStatus.SUCCESS;
      });
  },
});

const { actions, reducer } = studioSlice;
export const {
  setInitialize,
  setInitializeMyVideo,
  setInitializeDelete,
  setInitializeUpdate,
  setInitializeChannelVideo,
  setInitializeEditResponse,
  setGetChannelInfo,
} = actions;
export default reducer;
