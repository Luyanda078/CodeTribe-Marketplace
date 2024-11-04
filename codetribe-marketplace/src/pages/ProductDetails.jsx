// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductDetails() {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((item) => item.id === id)
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="mt-4 font-bold">${product.price}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
