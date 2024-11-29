import React, { useEffect } from 'react';
import {useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchProducts } from '../features/products/productsSlice';
import "./productCatalog.css"
import ProductCard from '../components/ProductCard';
import SortMenu from '../components/Sortmenu/SortMenu';


const ProductCatalog = () => {
  const dispatch = useAppDispatch();
  const { products, searchQuery, sortKey } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortKey === 'price'
        ? a.price - b.price
        : sortKey === 'rating'
        ? b.rating.rate - a.rating.rate
        : 0
    );

  return (<>
  <div className='sort'>
  <SortMenu  />
  </div>
    
    <div className="container mx-auto p-4">
      
   
     
      <div className="display">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductCatalog;
