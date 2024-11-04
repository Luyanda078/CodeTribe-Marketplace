// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { register, login } from '../../api/api';

export const userRegister = createAsyncThunk('auth/register', async (userData) => {
  const response = await register(userData);
  return response.data;
});

export const userLogin = createAsyncThunk('auth/login', async (userData) => {
  const response = await login(userData);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.token = action.payload.token;
      });
  },
});

export default authSlice.reducer;
