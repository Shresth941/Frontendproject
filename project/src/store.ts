import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';

// Configure Redux store
export const store = configureStore({
  reducer: {
    products: productsReducer, // Add the products reducer
  },
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
