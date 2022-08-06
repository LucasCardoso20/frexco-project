import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/products_context';
import './index.scss';
import App from './App';
import { CartProvider } from './context/cart_context';
import { Navbar } from './Components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProductsProvider>
      <CartProvider> 
        <Navbar />
        <App />
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>

);
