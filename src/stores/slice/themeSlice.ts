import { createSlice } from '@reduxjs/toolkit';
import { IThemeInitState } from '@type/themeType';

const initialState: IThemeInitState = {
  theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      localStorage.setItem('theme', action.payload);
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { updateTheme } = themeSlice.actions;
