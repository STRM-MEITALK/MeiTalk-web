import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayerInitState } from '@type/playerType';

const initialState: IPlayerInitState = {
  isStart: false,
  isPlay: true,
  played: 0,
  duration: 0,
  seeking: false,
  volume: 0,
  muted: true,
  speed: 1,
  isBuffer: false,
  useCaption: false,
  captionLang: null,
  caption: null,
  quality: 'auto',
  isFullScreen: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    handleIsStart: (state, action) => {
      state.isStart = action.payload;
    },
    handleIsPlay: (state, action) => {
      state.isPlay = action.payload;
    },
    handlePlayed: (state, action) => {
      state.played = action.payload;
    },
    handleDuration: (state, action) => {
      state.duration = action.payload;
    },
    handleSeeking: (state, action) => {
      state.seeking = action.payload;
    },
    handleVolume: (state, action) => {
      state.volume = action.payload;
    },
    handleMuted: (state, action) => {
      state.muted = action.payload;
    },
    handleSpeed: (state, action) => {
      state.speed = action.payload;
    },
    handleIsBuffer: (state, action) => {
      state.isBuffer = action.payload;
    },
    handleUseCaption: (state, action) => {
      state.useCaption = action.payload;
    },
    handleCaptionLang: (state, action) => {
      state.captionLang = action.payload;
    },
    handleQuality: (state, action) => {
      state.quality = action.payload;
    },
    handleIsFullScreen: (state, action) => {
      state.isFullScreen = action.payload;
    },
    updateCaption: (
      state,
      action: PayloadAction<{
        timeStamp: string;
        text: { JA: string; EN: string; RU: string; KO: string; ZH: string; ID: string };
      }>,
    ) => {
      state.caption = {
        ...state.caption,
        [action.payload.timeStamp]: action.payload.text,
      };
    },
  },
});

export default playerSlice.reducer;
export const {
  handleIsStart,
  handleIsPlay,
  handlePlayed,
  handleDuration,
  handleSeeking,
  handleVolume,
  handleMuted,
  handleSpeed,
  handleIsBuffer,
  handleUseCaption,
  handleCaptionLang,
  handleQuality,
  handleIsFullScreen,
  updateCaption,
} = playerSlice.actions;
