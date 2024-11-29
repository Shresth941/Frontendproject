import React from 'react';
import ProductCatalog from './ProductCatalog';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
        Welcome to Our E-Commerce Catalog
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
        Discover the best products at amazing prices!
      </p>
      <ProductCatalog />
    </div>
  );
};

export default HomePage;
