// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice'; // Import cartSlice
import orderReducer from './slices/orderSlice'; // Import orderSlice
import productReducer from './slices/productSlice';
import userReducer from './slices/userSlice'; // Import userSlice

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer, // Add cartReducer
    order: orderReducer, // Add orderReducer
    product: productReducer,
    user: userReducer, // Add userReducer
  },
});

export default store;

