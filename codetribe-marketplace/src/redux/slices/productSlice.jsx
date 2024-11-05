// src/redux/slices/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, addProduct as apiAddProduct, deleteProduct as apiDeleteProduct } from '../../api/api';

// Fetch all products
export const getProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await fetchProducts();
  return response.data;
});

// Add a new product
export const addProduct = createAsyncThunk('products/add', async (productData) => {
  const response = await apiAddProduct(productData);
  return response.data;
});

// Delete a product
export const deleteProduct = createAsyncThunk('products/delete', async (productId) => {
  await apiDeleteProduct(productId); // Call the API to delete the product
  return productId; // Return the productId to remove from state
});

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
    
        state.products = state.products.filter(product => product.id !== action.payload);
      });
  },
});


export default productSlice.reducer;
