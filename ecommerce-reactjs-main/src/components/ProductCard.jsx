import React, { useState } from 'react';
import './ProductCard.css'; // Importa el archivo CSS

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="quantity-control">
          <button onClick={handleDecrement} className="quantity-button">-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleIncrement} className="quantity-button">+</button>
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
