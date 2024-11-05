// src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user profile
const initialState = {
  profile: {
    name: '',
    email: '',
  },
};

// Create user slice with profile actions
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to update the user profile
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

// Export actions
export const { updateProfile } = userSlice.actions;

// Export reducer to configure in the store
export default userSlice.reducer;
