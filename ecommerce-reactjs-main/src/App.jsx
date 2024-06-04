import React, { useState } from 'react';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialProducts = [
  { id: 1, title: 'Croqueta de Bacalo', price: 10, image: '/public_assets/icons/croquetabacalo.jpg' },
  { id: 2, title: 'Product 2', price: 20, image: '/public_assets/icons/product2.jpg' },
  { id: 3, title: 'Product 3', price: 30, image: '/public_assets/icons/product3.jpg' },
  { id: 4, title: 'Product 1', price: 10, image: '/public_assets/icons/product1.jpg' },
  { id: 5, title: 'Product 2', price: 20, image: '/public_assets/icons/product2.jpg' },
  { id: 6, title: 'Product 3', price: 30, image: '/public_assets/icons/product3.jpg' },
  { id: 7, title: 'Product 1', price: 10, image: '/public_assets/icons/product1.jpg' },
  { id: 8, title: 'Product 2', price: 20, image: '/public_assets/icons/product2.jpg' },
  { id: 9, title: 'Product 3', price: 30, image: '/public_assets/icons/product3.jpg' },
  { id: 10, title: 'Product 1', price: 10, image: '/public_assets/icons/product1.jpg' },
  { id: 11, title: 'Product 2', price: 20, image: '/public_assets/icons/product2.jpg' },
  { id: 12, title: 'Product 3', price: 30, image: '/public_assets/icons/product3.jpg' },
];

const App = () => {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <NavBar />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default App;
