import type { HistoryEntry } from '../models/HistoryEntry';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface HistoryState {
  entries: HistoryEntry[];
}

const initialState: HistoryState = {
  entries: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<HistoryEntry>) => {
      state.entries.unshift(action.payload);
    },
    clearHistory: (state) => {
      state.entries = [];
    },
  },
});

export const { addEntry, clearHistory } = historySlice.actions;
export default historySlice.reducer;
