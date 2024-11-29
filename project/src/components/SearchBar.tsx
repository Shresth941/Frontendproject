import React from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setSearchQuery } from '../features/products/productsSlice';

const SearchBar = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="🔍 Search for products..."
      style={{marginRight: "10px",marginLeft:"10px",marginTop:"10px",marginBottom:"10px"}}
      className="w-full  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
