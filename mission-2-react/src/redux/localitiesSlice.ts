import type { Locality } from '../models/Locality';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface LocalitiesState {
  localities: Locality[];
  loading: boolean;
  error: string | null;
}

const initialState: LocalitiesState = {
  localities: [],
  loading: false,
  error: null,
};

const localitiesSlice = createSlice({
  name: 'localities',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLocalities: (state, action: PayloadAction<Locality[]>) => {
      state.localities = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setLocalities, setError } = localitiesSlice.actions;
export default localitiesSlice.reducer;
