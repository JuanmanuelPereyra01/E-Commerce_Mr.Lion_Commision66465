import React from 'react';
import './Carro.css';

const Carro = ({ cart, removeFromCart, handlePurchase }) => {
  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="carro">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div className="product-info">
              <span>{item.product.name}</span>
              <span>{item.quantity}</span>
              <span>${item.product.price * item.quantity}</span>
              <button onClick={() => removeFromCart(item.product.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
      <button onClick={handlePurchase}>Comprar Todo</button>
    </div>
  );
};

export default Carro;
