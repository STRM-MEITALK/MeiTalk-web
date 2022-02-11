import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const getLanguage = () => {
  const lang = localStorage.getItem('language') ?? 'en';
  if (['en', 'ko', 'cn', 'ja', 'id', 'ru'].includes(lang)) {
    return lang;
  } else {
    localStorage.setItem('language', 'en');
    return 'en';
  }
};

interface ILanguageInitState {
  language: string;
}

const initialState: ILanguageInitState = {
  language: getLanguage(),
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setGlobalLanguage(state, action: PayloadAction<{ lang: string }>) {
      const { lang } = action.payload;
      state.language = lang;
      localStorage.setItem('language', lang);
    },
  },
});

const { actions, reducer } = languageSlice;
export const { setGlobalLanguage } = actions;
export default reducer;
