import type { Weather } from '../models/Weather';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  weather: Weather | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setWeather: (state, action: PayloadAction<Weather | null>) => {
      state.weather = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setWeather, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
