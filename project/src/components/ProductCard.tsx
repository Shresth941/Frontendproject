import React from 'react';
import { Product } from '../utils/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
    <img src={product.image} alt={product.title} />
    <div className="details">
      <h2>{product.title}</h2>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="rating">{product.rating.rate} ⭐</p>
    </div>
  </div>
  
  );
};

export default ProductCard;
