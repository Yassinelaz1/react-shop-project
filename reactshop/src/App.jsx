import React from 'react';
import './index.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './component/Footer';
import Shope from './pages/Shope';
import Contact from './pages/Contact';
import ProductDetail from './component/ProductDetail';
import SignUp from './pages/Signup';
import Login from './pages/Login';


const App = () => {
  return (
<Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shope />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        <Footer />
    </Router>
  );
};

export default App;
