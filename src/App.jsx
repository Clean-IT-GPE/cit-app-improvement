import React, { useState, useEffect } from 'react';
import {Routes,  Route,BrowserRouter as Router} from "react-router-dom"
import { NavBar } from './components/NavBar';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer); // nettoyer sur le démontage
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
  );
};

export default App;