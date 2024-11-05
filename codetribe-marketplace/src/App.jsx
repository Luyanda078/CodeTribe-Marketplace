
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import AdminPanel from './pages/AdminPanel';
import OrderHistory from './pages/OrderHistory';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Update the usage of PrivateRoutes */}
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>

          <Route path="*" element={<h2 className="text-center text-red-500 mt-12">404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
