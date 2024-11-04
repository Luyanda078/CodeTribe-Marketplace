// src/pages/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProducts, deleteProduct } from '../redux/slices/productSlice';

function AdminPanel() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0, stock: 0 });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    setNewProduct({ name: '', description: '', price: 0, stock: 0 });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={handleAddProduct} className="mb-6">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value, 10) })}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Product</button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Existing Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center border-b py-2">
            <p>{product.name}</p>
            <button
              onClick={() => dispatch(deleteProduct(product.id))}
              className="bg-red-500 text-white py-1 px-3 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
