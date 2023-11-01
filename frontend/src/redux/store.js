import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authentication'
import productSlice from './searchFilter';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    pro: productSlice
  },
});