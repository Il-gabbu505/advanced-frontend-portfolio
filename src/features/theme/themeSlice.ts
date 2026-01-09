import { createSlice } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
}

const savedTheme = localStorage.getItem('theme') as ThemeMode | null;

const initialState: ThemeState = {
  mode: savedTheme ?? 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
