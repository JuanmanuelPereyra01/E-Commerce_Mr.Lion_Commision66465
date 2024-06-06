import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button onClick={() => addToCart(product)} className="add-to-cart-button">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
