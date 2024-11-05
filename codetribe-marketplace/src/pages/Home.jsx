import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to CodeTribe Marketplace</h1>
        <p className="text-lg text-gray-700 mb-6">
          Browse our marketplace or start selling your products!
        </p>
      </header>
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
            Register
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <Link to="/products">
          <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
