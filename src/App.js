

import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/Signup';
import About from './component/About';
import Menu from './component/Menu';
import Login from './component/Login';
import Contact from './component/Contact';
import Checkout from './component/Checkout';
import Cart from './component/Cart';
import Navbar from './component/Navbar';
import { AppProvider } from './component/CartContext';
import AddProduct from './Admin/AddProduct';
import UserForm from './Admin/UserForm';

function App() {
  return (
      <div>
        <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/UserForm" element={<UserForm />} />

          
        </Routes>
        </AppProvider>

   {/* <AddProduct/> */}
   {/* <UserForm/> */}
      </div>
  );
}

export default App;

