// src/pages/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/slices/authSlice';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password.length >= 6) {
      dispatch(userRegister({ email, password }));
    } else {
      alert("Please provide a valid email and password of at least 6 characters.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="w-80 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-5 text-center">Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password (min. 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
