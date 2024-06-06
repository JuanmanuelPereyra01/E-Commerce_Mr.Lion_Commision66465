import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Usando react-icons para el icono del carrito

function CartWidget({ itemCount }) {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
