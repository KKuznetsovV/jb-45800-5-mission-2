import { createSlice } from '@reduxjs/toolkit';

const stored = localStorage.getItem('theme');
const initialDark = stored ? stored === 'dark' : false;

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isDark: initialDark },
  reducers: {
    toggleTheme(state) {
      state.isDark = !state.isDark;
      localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
