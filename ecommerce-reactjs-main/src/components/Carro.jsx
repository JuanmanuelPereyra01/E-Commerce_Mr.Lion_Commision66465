import React from 'react';
import { Link } from 'react-router-dom';
import './Carro.css';

const Carro = ({ cart, removeFromCart, handlePurchase }) => {
  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="carro">
      <div className="back-button">
        <Link to="/">← Volver</Link>
      </div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div className="product-info">
              <img src={item.product.image} alt={item.product.name} className="product-image" />
              <span>{item.product.title}</span>
              <span>Cantidad: {item.quantity}</span>
              <span>Precio: ${item.product.price * item.quantity}</span>
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
