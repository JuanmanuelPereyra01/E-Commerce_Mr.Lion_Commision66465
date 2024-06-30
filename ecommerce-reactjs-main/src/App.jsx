import React, { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Carro from './components/Carro';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const initialProducts = [
  // Tapas
  { 
    id: 1,
    title: 'Paella',
    price: 20,
    image: '/assets/img/paella.png',
    category: {
      id: 1,
      name: 'tapa'
    }
  },
  { 
    id: 2,
    title: 'Papas Bravas',
    price: 8,
    image: '/assets/img/papasbravas.png',
    category: {
      id: 1,
      name: 'tapa'
    }
  },
  { 
    id: 3,
    title: 'Pulpo Gallega',
    price: 30,
    image: '/assets/img/pulpogallega.png',
    category: {
      id: 1,
      name: 'tapa'
    }
  },
  { 
    id: 4,
    title: 'Rabo Toro',
    price: 22,
    image: '/assets/img/rabotoro.png',
    category: {
      id: 1,
      name: 'tapa'
    }
  },
  { 
    id: 5,
    title: 'Rulo Cabrita',
    price: 14,
    image: '/assets/img/rulocabrita.png',
    category: {
      id: 1,
      name: 'tapa'
    }
  },
  { 
    id: 6,
    title: 'Salmorejo',
    price: 12,
    image: '/assets/img/salmorejo.png',
    category: {
      id: 1,
      name: 'tapa'
    }
  },
  { 
    id: 7,
    title: 'Tortilla de Papa',
    price: 11,
    image: '/assets/img/tortilladepapa.png',
    category: {
      id: 1,
      name: 'tapa'
    }
  },
  { 
    id: 8,
    title: 'Bocata Calamar',
    price: 5,
    image: '/assets/img/bocatacalamar.png',
    category: {
      id: 1,
      name: 'tapa'
    }
  },
  { 
    id: 9,
    title: 'Cocido Madrileño',
    price: 15,
    image: '/assets/img/cocidomad.png',
    category: {
      id: 1,
      name: 'tapa'
    }
  },

  // Croquetas
  { 
    id: 10,
    title: 'Croqueta de Bacalo',
    price: 10,
    image: '/assets/img/croquetabacalo.png',
    category: {
      id: 2,
      name: 'croqueta'
    }
  },
  { 
    id: 11,
    title: 'Croqueta de Pizza',
    price: 12,
    image: '/assets/img/croquetapizza.png',
    category: {
      id: 2,
      name: 'croqueta'
    }
  },
  { 
    id: 12,
    title: 'Croqueta de Rabo',
    price: 15,
    image: '/assets/img/croquetarabo.png',
    category: {
      id: 2,
      name: 'croqueta'
    }
  },
  { 
    id: 13,
    title: 'Croqueta Hummus',
    price: 8,
    image: '/assets/img/croquetahummus.png',
    category: {
      id: 2,
      name: 'croqueta'
    }
  },
  { 
    id: 14,
    title: 'Jamón Ibérico',
    price: 25,
    image: '/assets/img/jamoniberico.png',
    category: {
      id: 2,
      name: 'croqueta'
    }
  },
  { 
    id: 15,
    title: 'Croqueta de Oreo',
    price: 10,
    image: '/assets/img/croquetaoreo.png',
    category: {
      id: 2,
      name: 'croqueta'
    }
  },

  // Postres
  { 
    id: 16,
    title: 'Canolli',
    price: 6,
    image: '/assets/img/canolli.png',
    category: {
      id: 3,
      name: 'postre'
    }
  },
  { 
    id: 17,
    title: 'Tarta Vina',
    price: 10,
    image: '/assets/img/tartavina.png',
    category: {
      id: 3,
      name: 'postre'
    }
  },
  { 
    id: 18,
    title: 'Tiramisu',
    price: 9,
    image: '/assets/img/tiramisu.png',
    category: {
      id: 3,
      name: 'postre'
    }
  },
  { 
    id: 19,
    title: 'Churros con Chocolate',
    price: 5,
    image: '/assets/img/churrochoco.png',
    category: {
      id: 3,
      name: 'postre'
    }
  },
  { 
    id: 20,
    title: 'Crema Catalana',
    price: 6,
    image: '/assets/img/cremacatalana.png',
    category: {
      id: 3,
      name: 'postre'
    }
  },
  { 
    id: 21,
    title: 'Lemon',
    price: 5,
    image: '/assets/img/lemon.png',
    category: {
      id: 3,
      name: 'postre'
    }
  },

  // Bebidas
  { 
    id: 22,
    title: 'Lemonada',
    price: 7,
    image: '/assets/img/lemonada.png',
    category: {
      id: 4,
      name: 'bebida'
    }
  },
  { 
    id: 23,
    title: 'Mentolada',
    price: 6,
    image: '/assets/img/mentolada.png',
    category: {
      id: 4,
      name: 'bebida'
    }
  },
  { 
    id: 24,
    title: 'Pomelada',
    price: 6,
    image: '/assets/img/pomelada.png',
    category: {
      id: 4,
      name: 'bebida'
    }
  },
  { 
    id: 25,
    title: 'Cerveza Roja',
    price: 4,
    image: '/assets/img/cerveroja.png',
    category: {
      id: 4,
      name: 'bebida'
    }
  },
  { 
    id: 26,
    title: 'Cerveza Rubia',
    price: 4,
    image: '/assets/img/cerverubia.png',
    category: {
      id: 4,
      name: 'bebida'
    }
  },
  { 
    id: 27,
    title: 'Coca-Cola',
    price: 2,
    image: '/assets/img/cocacola.png',
    category: {
      id: 4,
      name: 'bebida'
    }
  },
  { 
    id: 28,
    title: 'Agua',
    price: 1,
    image: '/assets/img/agua.png',
    category: {
      id: 4,
      name: 'bebida'
    }
  },
];

const App = () => {
  const [products] = useState(initialProducts); // Estado para los productos
  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para productos filtrados
  const [cart, setCart] = useState([]); // Estado para el carrito

  useEffect(() => {
    setFilteredProducts(products); // Inicializa los productos filtrados con todos los productos al inicio
  }, [products]);

  const filterProductsByCategory = (category) => {
    if (category === 'all') {
      setFilteredProducts(products); // Muestra todos los productos si la categoría es 'all'
    } else {
      const filtered = products.filter(product => product.category.name === category);
      setFilteredProducts(filtered); // Filtra los productos por la categoría seleccionada
    }
  };

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const handlePurchase = () => {
    // Lógica para manejar la compra de todos los productos
    alert('Compra realizada con éxito!');
    setCart([]); // Vacía el carrito después de la compra
  };

  return (
    <div className="App">
      <NavBar filterProductsByCategory={filterProductsByCategory} cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Carro cart={cart} removeFromCart={removeFromCart} handlePurchase={handlePurchase} />
    </div>
  );
};

export default App;