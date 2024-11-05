// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
