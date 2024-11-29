import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setSortKey } from '../../features/products/productsSlice';
import "./SortMenu.css"

const SortMenu = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (key: 'price' | 'rating') => {
    dispatch(setSortKey(key));
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block mt-4">
      {/* Sort Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      >
        Sort by
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 py-2 z-50"
        >
          <li>
            <button
              onClick={() => handleSort('price')}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-indigo-100 transition-colors duration-150 mb-10px"
            >
             Price Low to High
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSort('rating')}
              className="w-full mt-10px text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-indigo-100 transition-colors duration-150"
            >
             Rating High to Low
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortMenu;
