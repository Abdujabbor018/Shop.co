import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/Cart/CartContext'; 
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import ProductDetail from './Components/Products/ProductDetail';
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  )
}

export default App; // Bu qator bo'lmasa oq ekran chiqadi!