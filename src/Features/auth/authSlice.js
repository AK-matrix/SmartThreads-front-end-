import { createSlice } from '@reduxjs/toolkit';

// Constant for localStorage token key
const TOKEN_KEY = 'token';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem(TOKEN_KEY) || null, // Get token from localStorage
    isAuthenticated: !!localStorage.getItem(TOKEN_KEY), // Boolean flag for authentication
  },
  reducers: {
    login(state, action) {
      const token = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem(TOKEN_KEY, token); // Save token in localStorage
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem(TOKEN_KEY); // Remove token from localStorage
    },
  },
});

// Export actions and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
