// authSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword, loginUser, logoutUser, signUp } from "./authThunk";
import type { AuthState } from "./types";

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  otpSent: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // SIGNUP
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;

        const { token, user } = action.payload.data;

        state.token = token;
        state.user = user;
        state.isAuthenticated = true;

        localStorage.setItem("token", token);
      })

       .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

    //   Login
    .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

    //   Logout

      .addCase(logoutUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    })
    .addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    // Forget Password
    .addCase(forgotPassword.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(forgotPassword.fulfilled, (state) => {
    state.loading = false;
    state.otpSent = true;
  })
  .addCase(forgotPassword.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload as string;
  });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;



