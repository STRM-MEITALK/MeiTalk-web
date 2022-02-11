import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  loginSubmitApi,
  registSubmitApi,
  dbTestApi,
  googleApi,
  facebookApi,
  lineApi,
  appleApi,
  userDataApi,
  updateRefreshTokenApi,
} from '@api/authApi';
import RequestStatus, { defaultState } from '@lib/RequestStatus';
import { ILoginBody, ILoginInitState, IRegistBody, IUserDataType } from '@type/authType';

const initialState: ILoginInitState = {
  loginInfo: {
    ...defaultState,
    data: {
      userId: '',
      mailId: '',
      channelId: 0,
      userPicture: '',
      username: '',
    },
  },
  registPost: {
    ...defaultState,
    data: {
      mailId: '',
      userPw: '',
      userNameFirst: '',
      userNameLast: '',
      countryPhone: '',
      phoneNum: '',
      privacyAgree: '',
    },
  },

  googleLogin: {
    ...defaultState,
    data: {
      link: '',
    },
  },

  facebookLogin: {
    ...defaultState,
    data: {
      link: '',
    },
  },

  lineLogin: {
    ...defaultState,
    data: {
      link: '',
    },
  },

  appleLogin: {
    ...defaultState,
    data: {
      link: '',
    },
  },
  cu: '',

  updateRT: {
    ...defaultState,
    data: {
      Rtoken: '',
    },
  },
  moveAndLogout: false,
};

export const postLogin = createAsyncThunk('auth/postLogin', async (param: ILoginBody) => {
  const response = await loginSubmitApi(param);
  return response.data;
});

export const postRegist = createAsyncThunk('auth/postRegist', async (param: IRegistBody) => {
  const response = await registSubmitApi(param);
  return response.data;
});

export const dbTest = createAsyncThunk('dbTest', async () => {
  const response = await dbTestApi();
  return response.data;
});

export const googleLogin = createAsyncThunk('auth/google', async () => {
  const response = await googleApi();
  return response.data;
});

export const facebookLogin = createAsyncThunk('auth/facebook', async () => {
  const response = await facebookApi();
  return response.data;
});

export const lineLogin = createAsyncThunk('auth/line', async () => {
  const response = await lineApi();
  return response.data;
});

export const appleLogin = createAsyncThunk('auth/apple', async () => {
  const response = await appleApi();
  return response.data;
});

export const getUserData = createAsyncThunk('auth/userData', async () => {
  const response = await userDataApi();
  return response.data;
});

export const updateRefreshToken = createAsyncThunk('auth/updateRefreshToken', async () => {
  const response = await updateRefreshTokenApi();
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserData(state, action: PayloadAction<IUserDataType>) {
      const {
        userId,
        mailId,
        channelId,
        userPicture,
        username,
      } = action.payload;

      state.loginInfo.data = {
        userId,
        mailId,
        channelId,
        userPicture,
        username,
      };
    },

    resetLoginResult(state) {
      state.loginInfo = {
        ...defaultState,
        data: {
          userId: '',
          mailId: '',
          channelId: 0,
          userPicture: '',
          username: '',
        },
      };
    },

    resetRegistResult(state) {
      state.registPost = {
        ...defaultState,
        data: {
          mailId: '',
          userPw: '',
          userNameFirst: '',
          userNameLast: '',
          countryPhone: '',
          phoneNum: '',
          privacyAgree: '',
        },
      };
    },

    addCu(state, action) {
      state.cu = action.payload;
    },

    resetTokenResult(state) {
      state.updateRT = {
        ...defaultState,
        data: {
          Rtoken: '',
        },
      };
    },
    setMoveAndLogout(state, action) {
      state.moveAndLogout = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.loginInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(postLogin.rejected, (state) => {
        state.loginInfo.status = RequestStatus.FAIL;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        const data = { ...action.payload.data };
        state.loginInfo.data = {
          userId: data.userId,
          mailId: data.mailId,
          channelId: data.channelId,
          userPicture: data.userPicture,
          username: data.username,
        };
        state.loginInfo.response = action.payload.response;
        state.loginInfo.status = RequestStatus.SUCCESS;
      })

      .addCase(postRegist.pending, (state) => {
        state.registPost.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(postRegist.rejected, (state) => {
        state.registPost.status = RequestStatus.FAIL;
      })
      .addCase(postRegist.fulfilled, (state, action) => {
        state.registPost.data = action.payload.data;
        state.registPost.response = action.payload.response;
        state.registPost.status = RequestStatus.SUCCESS;
      })

      .addCase(dbTest.pending, (state) => {
        state.registPost.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(dbTest.rejected, (state) => {
        state.registPost.status = RequestStatus.FAIL;
      })
      .addCase(dbTest.fulfilled, (state, action) => {
        state.registPost.data = action.payload.data;
        state.registPost.response = action.payload.response;
        state.registPost.status = RequestStatus.SUCCESS;
      })

      .addCase(googleLogin.pending, (state) => {
        state.googleLogin.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(googleLogin.rejected, (state) => {
        state.googleLogin.status = RequestStatus.FAIL;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.googleLogin.data = action.payload.data;
        state.googleLogin.response = action.payload.response;
        state.googleLogin.status = RequestStatus.SUCCESS;
      })

      .addCase(facebookLogin.pending, (state) => {
        state.facebookLogin.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(facebookLogin.rejected, (state) => {
        state.facebookLogin.status = RequestStatus.FAIL;
      })
      .addCase(facebookLogin.fulfilled, (state, action) => {
        state.facebookLogin.data = action.payload.data;
        state.facebookLogin.response = action.payload.response;
        state.facebookLogin.status = RequestStatus.SUCCESS;
      })

      .addCase(lineLogin.pending, (state) => {
        state.lineLogin.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(lineLogin.rejected, (state) => {
        state.lineLogin.status = RequestStatus.FAIL;
      })
      .addCase(lineLogin.fulfilled, (state, action) => {
        state.lineLogin.data = action.payload.data;
        state.lineLogin.response = action.payload.response;
        state.lineLogin.status = RequestStatus.SUCCESS;
      })

      .addCase(appleLogin.pending, (state) => {
        state.appleLogin.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(appleLogin.rejected, (state) => {
        state.appleLogin.status = RequestStatus.FAIL;
      })
      .addCase(appleLogin.fulfilled, (state, action) => {
        state.appleLogin.data = action.payload.data;
        state.appleLogin.response = action.payload.response;
        state.appleLogin.status = RequestStatus.SUCCESS;
      })

      .addCase(getUserData.pending, (state) => {
        state.loginInfo.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(getUserData.rejected, (state) => {
        state.loginInfo.status = RequestStatus.FAIL;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        const data = { ...action.payload.data };
        state.loginInfo.data = {
          userId: data.userId,
          mailId: data.mailId,
          channelId: data.channelId,
          userPicture: data.userPicture,
          username: data.username,
        };
        state.loginInfo.response = action.payload.response;
        state.loginInfo.status = RequestStatus.SUCCESS;
      })

      .addCase(updateRefreshToken.pending, (state) => {
        state.updateRT.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(updateRefreshToken.rejected, (state) => {
        state.updateRT.status = RequestStatus.FAIL;
      })
      .addCase(updateRefreshToken.fulfilled, (state, action) => {
        state.updateRT.data = action.payload.data;
        state.updateRT.response = action.payload.response;
        state.updateRT.status = RequestStatus.SUCCESS;
      });
  },
});

const { actions, reducer } = authSlice;
export const { addUserData, resetLoginResult, resetRegistResult, addCu, resetTokenResult, setMoveAndLogout } = actions;
export default reducer;
