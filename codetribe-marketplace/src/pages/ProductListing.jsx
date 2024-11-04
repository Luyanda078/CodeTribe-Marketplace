// src/pages/ProductListing.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function ProductListing() {
  const products = useSelector((state) => state.products.items);
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Product Listing</h1>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} className="border-b py-2">
            <p>{product.name}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListing;
