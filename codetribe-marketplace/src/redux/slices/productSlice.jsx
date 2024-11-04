// src/redux/slices/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, addProduct } from '../../api/api';

export const getProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await fetchProducts();
  return response.data;
});

export const createProduct = createAsyncThunk('products/add', async (productData) => {
  const response = await addProduct(productData);
  return response.data;
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
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export default productSlice.reducer;
