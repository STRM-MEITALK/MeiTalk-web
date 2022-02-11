import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '@api/communityApi';
import RequestStatus, { defaultState } from '@lib/RequestStatus';
import removeDuplication from '@lib/removeDuplication';
import {
  ICommunityInitState,
  IGetCommunityListBody,
  IGetCommunityDetailBody,
  IGetCommentListBody,
  IGetReplyListBody,
  IPostCommentBody,
  IPostReplyBody,
  IUpdateCommentBody,
  IUpdateReplyBody,
  IDeleteCommentReplyBody,
  IPostCommunityBody,
  IUpdateCommunityBody,
  IDeleteCommunityBody,
} from '@type/communityType';

const initialState: ICommunityInitState = {
  communityList: {
    ...defaultState,
    data: {
      communityList: [],
      pageNo: 0,
      pageSize: 20,
      totalElements: 0,
    },
  },
  communityDetail: {
    ...defaultState,
    data: { id: null, channelId: null, contents: '', createTime: '', updateTime: '', deleteTime: null },
  },
  commentList: {
    ...defaultState,
    data: {
      list: [],
      pageNo: 0,
      pageSize: 20,
      totalElements: 0,
      totalComments: 0,
    },
  },
  replyList: {
    ...defaultState,
    data: {},
  },
  postCommunity: { ...defaultState, data: null },
  updateCommunity: { ...defaultState, data: null },
  deleteCommunity: { ...defaultState, data: null },
  postComment: {
    ...defaultState,
    data: null,
  },
  postReply: {
    ...defaultState,
    data: {},
  },
  updateComment: {
    ...defaultState,
    data: null,
  },
  updateReply: {
    ...defaultState,
    data: null,
  },
  deleteCommentReply: {
    ...defaultState,
    data: null,
  },
};

export const getCommunityList = createAsyncThunk('community/getCommunityList', async (param: IGetCommunityListBody) => {
  const response = await api.getCommunityList(param);
  return response.data;
});

export const getCommunityDetail = createAsyncThunk(
  'community/getCommunityDetail',
  async (param: IGetCommunityDetailBody) => {
    const response = await api.getCommunityDetail(param);
    return response.data;
  },
);

export const getCommentList = createAsyncThunk('community/getCommentList', async (param: IGetCommentListBody) => {
  const response = await api.getCommentList(param);
  return response.data;
});

export const getReplyList = createAsyncThunk('community/getReplyList', async (param: IGetReplyListBody) => {
  const response = await api.getReplyList(param);
  return response.data;
});

export const postCommunity = createAsyncThunk('community/postCommunity', async (param: IPostCommunityBody) => {
  const response = await api.postCommunity(param);
  return response.data;
});

export const updateCommunity = createAsyncThunk('community/updateCommunity', async (param: IUpdateCommunityBody) => {
  const response = await api.updateCommunity(param);
  return response.data;
});

export const deleteCommunity = createAsyncThunk('community/deleteCommunity', async (param: IDeleteCommunityBody) => {
  const response = await api.deleteCommunity(param);
  return response.data;
});

export const postComment = createAsyncThunk('community/postComment', async (param: IPostCommentBody) => {
  const response = await api.postComment(param);
  return response.data;
});

export const postReply = createAsyncThunk('community/postReply', async (param: IPostReplyBody) => {
  const response = await api.postReply(param);
  return response.data;
});

export const updateComment = createAsyncThunk('community/updateComment', async (param: IUpdateCommentBody) => {
  const response = await api.updateComment(param);
  return response.data;
});

export const updateReply = createAsyncThunk('community/updateReply', async (param: IUpdateReplyBody) => {
  const response = await api.updateReply(param);
  return response.data;
});

export const deleteCommentReply = createAsyncThunk(
  'community/deleteCommentReply',
  async (param: IDeleteCommentReplyBody) => {
    const response = await api.deleteCommentReply(param);
    return response.data;
  },
);

export const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    initializeCommunityList: (state) => {
      state.communityList = initialState.communityList;
    },
    initializeCommunityDetail: (state) => {
      state.communityDetail = initialState.communityDetail;
    },
    initializeCommentList: (state) => {
      state.commentList = initialState.commentList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommunityList.pending, (state) => {
        state.communityList.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getCommunityList.rejected, (state) => {
        state.communityList.status = RequestStatus.FAIL;
      })
      .addCase(getCommunityList.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.communityList.data = {
            ...action.payload.data,
            communityList: removeDuplication(
              state.communityList.data.communityList.concat(action.payload.data.communityList),
              'id',
            ),
          };
          state.communityList.response = action.payload.response;
          state.communityList.status = RequestStatus.SUCCESS;
        }
      })
      .addCase(getCommunityDetail.pending, (state) => {
        state.communityDetail.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getCommunityDetail.rejected, (state) => {
        state.communityDetail.status = RequestStatus.FAIL;
      })
      .addCase(getCommunityDetail.fulfilled, (state, action) => {
        if (action.payload.data === null) {
          state.communityDetail.response = action.payload.response;
          state.communityDetail.status = RequestStatus.NODATA;
        } else {
          state.communityDetail.data = action.payload.data;
          state.communityDetail.response = action.payload.response;
          state.communityDetail.status = RequestStatus.SUCCESS;
        }
      })
      .addCase(postCommunity.pending, (state) => {
        state.postCommunity.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(postCommunity.rejected, (state) => {
        state.postCommunity.status = RequestStatus.FAIL;
      })
      .addCase(postCommunity.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.communityList.data.communityList = [{ ...action.payload.data, commentCount: 0 }].concat(
            state.communityList.data.communityList,
          );
          state.communityList.data.totalElements += 1;
        }

        state.postCommunity.data = action.payload.data;
        state.postCommunity.response = action.payload.response;
        state.postCommunity.status = RequestStatus.SUCCESS;
      })
      .addCase(updateCommunity.pending, (state) => {
        state.updateCommunity.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateCommunity.rejected, (state) => {
        state.updateCommunity.status = RequestStatus.FAIL;
      })
      .addCase(updateCommunity.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.communityList.data.communityList = state.communityList.data.communityList.map((item) => {
            let newObj = item;
            if (item.id === action.payload.data?.id) {
              newObj = {
                ...newObj,
                contents: action.payload.data.contents,
                updateTime: action.payload.data.updateTime,
              };
            }
            return newObj;
          });

          state.communityDetail.data = {
            ...state.communityDetail.data,
            contents: action.payload.data.contents,
            updateTime: action.payload.data.updateTime,
          };
        }

        state.updateCommunity.data = action.payload.data;
        state.updateCommunity.response = action.payload.response;
        state.updateCommunity.status = RequestStatus.SUCCESS;
      })
      .addCase(deleteCommunity.pending, (state) => {
        state.deleteCommunity.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(deleteCommunity.rejected, (state) => {
        state.deleteCommunity.status = RequestStatus.FAIL;
      })
      .addCase(deleteCommunity.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.communityList.data.communityList = state.communityList.data.communityList.filter((item) => {
            return item.id !== action.payload.data;
          });
          state.communityList.data.totalElements -= 1;
        }

        state.deleteCommunity.data = action.payload.data;
        state.deleteCommunity.response = action.payload.response;
        state.deleteCommunity.status = RequestStatus.SUCCESS;
      })
      .addCase(getCommentList.pending, (state) => {
        state.commentList.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getCommentList.rejected, (state) => {
        state.commentList.status = RequestStatus.FAIL;
      })
      .addCase(getCommentList.fulfilled, (state, action) => {
        if (action.payload.data === null) {
          state.commentList.status = RequestStatus.NODATA;
        } else {
          state.commentList.data = {
            ...action.payload.data,
            list: removeDuplication(state.commentList.data.list.concat(action.payload.data.list), 'id'),
          };
          state.commentList.response = action.payload.response;
          state.commentList.status = RequestStatus.SUCCESS;
        }
      })
      .addCase(getReplyList.pending, (state) => {
        state.replyList.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getReplyList.rejected, (state) => {
        state.replyList.status = RequestStatus.FAIL;
      })
      .addCase(getReplyList.fulfilled, (state, action) => {
        if (action.payload.data === null) {
          state.replyList.status = RequestStatus.NODATA;
        } else {
          state.replyList.data = {
            ...state.replyList.data,
            [action.payload.data.commentId]: action.payload.data.list,
          };
          state.replyList.response = action.payload.response;
          state.replyList.status = RequestStatus.SUCCESS;
        }
      })
      .addCase(postComment.pending, (state) => {
        state.postComment.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(postComment.rejected, (state) => {
        state.postComment.status = RequestStatus.FAIL;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.commentList.data.list = [action.payload.data].concat(state.commentList.data.list);
          state.commentList.data.totalElements += 1;
          state.commentList.data.totalComments += 1;
        }

        state.postComment.data = action.payload.data;
        state.postComment.response = action.payload.response;
        state.postComment.status = RequestStatus.SUCCESS;
      })
      .addCase(postReply.pending, (state) => {
        state.postReply.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(postReply.rejected, (state) => {
        state.postReply.status = RequestStatus.FAIL;
      })
      .addCase(postReply.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.commentList.data.list = state.commentList.data.list.map((item) => {
            const newItem = item;
            if (item.id === action.payload.data?.contentId) {
              newItem.replyCount += 1;
            }

            return newItem;
          });

          const statePostReply = state.postReply.data[action.payload.data.contentId] ?? [];
          const actionPostReply = [
            {
              ...action.payload.data,
              replyContent: action.payload.data.commentContent,
            },
          ];

          state.postReply.data = {
            ...state.postReply.data,
            [action.payload.data.contentId]: [...actionPostReply, ...statePostReply],
          };

          const stateReplyList = state.replyList.data[action.payload.data.contentId] ?? [];
          const actionReplyList = [
            {
              ...action.payload.data,
              replyContent: action.payload.data.commentContent,
            },
          ];

          state.replyList.data = {
            ...state.replyList.data,
            [action.payload.data.contentId]: [...actionReplyList, ...stateReplyList],
          };

          state.commentList.data.totalComments += 1;
        }

        state.postReply.response = action.payload.response;
        state.postReply.status = RequestStatus.SUCCESS;
      })
      .addCase(updateComment.pending, (state) => {
        state.updateComment.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateComment.rejected, (state) => {
        state.updateComment.status = RequestStatus.FAIL;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.commentList.data.list = state.commentList.data.list.map((item) => {
          let newObj = item;
          if (item.id === action.payload.data?.id) {
            newObj = {
              ...newObj,
              commentContent: action.payload.data.content,
              updateTime: action.payload.data.updateTime,
            };
          }
          return newObj;
        });

        state.updateComment.data = action.payload.data;
        state.updateComment.response = action.payload.response;
        state.updateComment.status = RequestStatus.SUCCESS;
      })
      .addCase(updateReply.pending, (state) => {
        state.updateReply.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateReply.rejected, (state) => {
        state.updateReply.status = RequestStatus.FAIL;
      })
      .addCase(updateReply.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          if (state.postReply.data[action.payload.data.contentId]) {
            state.postReply.data = {
              ...state.postReply.data,
              [action.payload.data.contentId]: state.postReply.data[action.payload.data.contentId].map((item) => {
                let newItem = item;
                if (newItem.id === action.payload.data?.id) {
                  newItem = {
                    ...newItem,
                    replyContent: action.payload.data.content,
                    updateTime: action.payload.data.updateTime,
                  };
                }
                return newItem;
              }),
            };
          }

          if (state.replyList.data[action.payload.data.contentId]) {
            state.replyList.data = {
              ...state.replyList.data,
              [action.payload.data.contentId]: state.replyList.data[action.payload.data.contentId].map((item) => {
                const newItem = item;
                if (newItem.id === action.payload.data?.id) {
                  newItem.replyContent = action.payload.data.content;
                  newItem.updateTime = action.payload.data.updateTime;
                }
                return newItem;
              }),
            };
          }
        }

        state.updateReply.data = action.payload.data;
        state.updateReply.response = action.payload.response;
        state.updateReply.status = RequestStatus.SUCCESS;
      })
      .addCase(deleteCommentReply.pending, (state) => {
        state.deleteCommentReply.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(deleteCommentReply.rejected, (state) => {
        state.deleteCommentReply.status = RequestStatus.FAIL;
      })
      .addCase(deleteCommentReply.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          if (action.payload.data.type === 'communityComment') {
            state.commentList.data.list = state.commentList.data.list.map((item) => {
              const newItem = item;
              if (item.id === action.payload.data?.commentId) {
                newItem.deleted = true;
              }
              return newItem;
            });
          } else {
            if (state.postReply.data[action.payload.data.commentId]) {
              state.postReply.data = {
                ...state.postReply.data,
                [action.payload.data.commentId]: state.postReply.data[action.payload.data.commentId].map((item) => {
                  const newItem = item;
                  if (newItem.id === action.payload.data?.replyId) {
                    newItem.deleted = true;
                  }
                  return newItem;
                }),
              };
            }

            if (state.replyList.data[action.payload.data.commentId]) {
              state.replyList.data = {
                ...state.replyList.data,
                [action.payload.data.commentId]: state.replyList.data[action.payload.data.commentId].map((item) => {
                  const newItem = item;
                  if (newItem.id === action.payload.data?.replyId) {
                    newItem.deleted = true;
                  }
                  return newItem;
                }),
              };
            }
          }
        }

        state.deleteCommentReply.data = action.payload.data;
        state.deleteCommentReply.response = action.payload.response;
        state.updateReply.status = RequestStatus.SUCCESS;
      });
  },
});

export default communitySlice.reducer;
export const { initializeCommunityList, initializeCommunityDetail, initializeCommentList } = communitySlice.actions;
