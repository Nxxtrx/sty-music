import { configureStore } from '@reduxjs/toolkit';
import musicListReducer from './musicListSlice';

const store = configureStore({
  reducer: {
    musicList: musicListReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
