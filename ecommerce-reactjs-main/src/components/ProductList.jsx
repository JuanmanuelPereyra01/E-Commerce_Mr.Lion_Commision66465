import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // Importa el archivo CSS si es necesario

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.title} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
