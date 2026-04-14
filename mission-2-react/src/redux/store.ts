import { configureStore } from '@reduxjs/toolkit';
import localitiesReducer from './localitiesSlice';
import weatherReducer from './weatherSlice';
import historyReducer from './historySlice';

const store = configureStore({
  reducer: {
    localities: localitiesReducer,
    weather: weatherReducer,
    history: historyReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
