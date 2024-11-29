// productsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../utils/types';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data as Product[];
});

interface ProductsState {
  products: Product[];
  searchQuery: string;
  sortKey: 'price' | 'rating' | null;
}

const initialState: ProductsState = {
  products: [],
  searchQuery: '',
  sortKey: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSortKey(state, action) {
      state.sortKey = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { setSearchQuery, setSortKey } = productsSlice.actions;
export default productsSlice.reducer;
