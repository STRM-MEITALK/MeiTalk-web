import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import roomsSlice from '@slice/roomsSlice';
import utilReducer from '@slice/utilSlice';
import liveViewSlice from '@slice/liveViewSlice';
import streamSlice from '@slice/streamSlice';
import broadSlice from '@slice/broadSlice';
import authSlice from '@slice/authSlice';
import replayViewSlice from '@slice/replayViewSlice';
import commentSlice from '@slice/commentSlice';
import loadingSlice from '@slice/loadingSlice';
import playerSlice from '@slice/playerSlice';
import studioSlice from '@slice/studioSlice';
import globalModalSlice from '@slice/globalModalSlice';
import languageSlice from '@slice/languageSlice';
import themeSlice from '@slice/themeSlice';
import communitySlice from '@slice/communitySlice';
import { rtkQueryErrorLogger } from './rtkQueryErrorLogger';

export const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    util: utilReducer,
    liveView: liveViewSlice,
    stream: streamSlice,
    broad: broadSlice,
    auth: authSlice,
    replayView: replayViewSlice,
    comment: commentSlice,
    loading: loadingSlice,
    player: playerSlice,
    studio: studioSlice,
    globalModal: globalModalSlice,
    language: languageSlice,
    theme: themeSlice,
    community: communitySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkQueryErrorLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
