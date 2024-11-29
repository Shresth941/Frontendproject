import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store.ts';

export const selectProducts = (state: RootState) => state.products.products;
export const selectSearchQuery = (state: RootState) => state.products.searchQuery;
export const selectSortKey = (state: RootState) => state.products.sortKey;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchQuery, selectSortKey],
  (products, searchQuery, sortKey) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortKey === 'price') {
      return filtered.sort((a, b) => a.price - b.price);
    }
    if (sortKey === 'rating') {
      return filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    return filtered;
  }
);
