import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '@api/commentApi';
import RequestStatus, { defaultState } from '@lib/RequestStatus';
import {
  ICommentInitState,
  IGetCommentListBody,
  IGetReplyListBody,
  IPostCommentBody,
  IPostReplyBody,
  IUpdateCommentLikeBody,
  IUpdateReplyLikeBody,
  IUpdateCommentBody,
  IUpdateReplyBody,
  IDeleteCommentReplyBody,
} from '@type/commentType';
import removeDuplication from '@src/shared/lib/removeDuplication';

const initialState: ICommentInitState = {
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
  postComment: {
    ...defaultState,
    data: null,
  },
  postReply: {
    ...defaultState,
    data: {},
  },
  updateCommentLike: {
    ...defaultState,
    data: null,
  },
  updateReplyLike: {
    ...defaultState,
    data: null,
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
  deleteCommentStudio: {
    ...defaultState,
    data: null,
  },
};

export const getCommentList = createAsyncThunk('comment/getCommentList', async (param: IGetCommentListBody) => {
  const response = await api.getCommentList(param);
  return response.data;
});

export const getReplyList = createAsyncThunk('comment/getReplyList', async (param: IGetReplyListBody) => {
  const response = await api.getReplyList(param);
  return response.data;
});

export const postComment = createAsyncThunk('comment/postComment', async (param: IPostCommentBody) => {
  const response = await api.postComment(param);
  return response.data;
});

export const postReply = createAsyncThunk('comment/postReply', async (param: IPostReplyBody) => {
  const response = await api.postReply(param);
  return response.data;
});

export const updateCommentLike = createAsyncThunk(
  'comment/updateCommentLike',
  async (param: IUpdateCommentLikeBody) => {
    const response = await api.updateCommentLike(param);
    return response.data;
  },
);

export const updateReplyLike = createAsyncThunk('comment/updateReplyLike', async (param: IUpdateReplyLikeBody) => {
  const response = await api.updateReplyLike(param);
  return response.data;
});

export const updateComment = createAsyncThunk('comment/updateComment', async (param: IUpdateCommentBody) => {
  const response = await api.updateComment(param);
  return response.data;
});

export const updateReply = createAsyncThunk('comment/updateReply', async (param: IUpdateReplyBody) => {
  const response = await api.updateReply(param);
  return response.data;
});

export const deleteCommentReply = createAsyncThunk(
  'comment/deleteCommentReply',
  async (param: IDeleteCommentReplyBody) => {
    const response = await api.deleteCommentReply(param);
    return response.data;
  },
);

export const deleteCommentStudio = createAsyncThunk(
  'comment/deleteCommentStudio',
  async (param: IDeleteCommentReplyBody) => {
    const response = await api.deleteCommentStudio(param);
    return response.data;
  },
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    initializeComment: (state) => {
      state.updateComment = initialState.updateComment;
      state.updateReply = initialState.updateReply;
      state.deleteCommentReply = initialState.deleteCommentReply;
    },
  },
  extraReducers: (builder) => {
    builder
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
            list: removeDuplication(action.payload.data.list.concat(state.commentList.data.list), 'id'),
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
          state.commentList.data.list = state.commentList.data.list.concat([action.payload.data]);
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
      .addCase(updateCommentLike.pending, (state) => {
        state.updateCommentLike.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateCommentLike.rejected, (state) => {
        state.updateCommentLike.status = RequestStatus.FAIL;
      })
      .addCase(updateCommentLike.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          state.commentList.data.list = state.commentList.data.list.map((item) => {
            let newItem = item;
            if (item.id === action.payload.data?.typeId) {
              newItem = {
                ...newItem,
                likeCount: action.payload.data.likeCount,
                likeIs: action.payload.data.likeToggle,
              };
            }
            return newItem;
          });
        }

        state.updateCommentLike.data = action.payload.data;
        state.updateCommentLike.response = action.payload.response;
        state.updateCommentLike.status = RequestStatus.SUCCESS;
      })
      .addCase(updateReplyLike.pending, (state) => {
        state.updateReplyLike.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateReplyLike.rejected, (state) => {
        state.updateReplyLike.status = RequestStatus.FAIL;
      })
      .addCase(updateReplyLike.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          if (state.postReply.data[action.payload.data.commentId]) {
            state.postReply.data = {
              ...state.postReply.data,
              [action.payload.data.commentId]: state.postReply.data[action.payload.data.commentId].map((item) => {
                let newItem = item;
                if (newItem.id === action.payload.data?.typeId) {
                  newItem = {
                    ...newItem,
                    likeCount: action.payload.data.likeCount,
                    likeIs: action.payload.data.likeToggle,
                  };
                }
                return newItem;
              }),
            };
          }

          if (state.replyList.data[action.payload.data.commentId]) {
            state.replyList.data = {
              ...state.replyList.data,
              [action.payload.data.commentId]: state.replyList.data[action.payload.data.commentId].map((item) => {
                let newItem = item;
                if (newItem.id === action.payload.data?.typeId) {
                  newItem = {
                    ...newItem,
                    likeCount: action.payload.data.likeCount,
                    likeIs: action.payload.data.likeToggle,
                  };
                }
                return newItem;
              }),
            };
          }
        }

        state.updateReplyLike.data = action.payload.data;
        state.updateReplyLike.response = action.payload.response;
        state.updateReplyLike.status = RequestStatus.SUCCESS;
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
          if (action.payload.data.type === 'comment') {
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
      })

      .addCase(deleteCommentStudio.pending, (state) => {
        state.deleteCommentStudio.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(deleteCommentStudio.rejected, (state) => {
        state.deleteCommentStudio.status = RequestStatus.FAIL;
      })
      .addCase(deleteCommentStudio.fulfilled, (state, action) => {
        if (action.payload.data !== null) {
          if (action.payload.data.type === 'comment') {
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

        state.deleteCommentStudio.data = action.payload.data;
        state.deleteCommentStudio.response = action.payload.response;
        state.updateReply.status = RequestStatus.SUCCESS;
      });
  },
});

export default commentSlice.reducer;
export const { initializeComment } = commentSlice.actions;
