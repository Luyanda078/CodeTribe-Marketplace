// src/redux/slices/orderSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch order history
export const fetchOrderHistory = createAsyncThunk(
  'orders/fetchOrderHistory',
  async () => {
    // Replace this URL with your actual endpoint or data source
    const response = await fetch('/api/orders'); 
    if (!response.ok) {
      throw new Error('Failed to fetch order history');
    }
    const data = await response.json();
    return data;
  }
);

// Initial state for order history
const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

// Order slice with fetchOrderHistory
const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderHistory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrderHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchOrderHistory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export reducer to configure in the store
export default orderSlice.reducer;
