// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Marketplace</Link>
        <div className="space-x-4">
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile">Profile</Link>
              <Link to="/order-history">Order History</Link>
              <Link to="/admin">Admin Panel</Link>
              <button onClick={() => dispatch(logout())} className="text-red-400">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
