import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Home, Navbar } from './Components';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import "./Components/Navbar/Navbar.scss"
import "./Components/Home/Home.scss"
import "./Components/FruitList/FruitList.scss"
import "./Components/SingleFruit/SingleFruit.scss"
import "./Components/Pagination/Pagination.scss"
import "./pages/Cart/Cart.scss"
import "./pages/SingleProduct/singleProduct.scss"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singleProduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

export default App;
