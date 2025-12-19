// authThunk.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpAPI } from "./authAPI";
import type { SignUpPayload, LoginPayload, AuthResponse,ForgotPasswordPayload, ForgotPasswordResponse   } from "./types";
import { logoutAPI } from "./authAPI";
import { loginAPI } from "./authAPI";
import { forgotPasswordAPI } from "./authAPI";


export const signUp = createAsyncThunk(
  "auth/signup",
  async (payload: SignUpPayload, { rejectWithValue }) => {
    try {
      return await signUpAPI(payload);
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Signup failed"
      );
    }
  }
);

// Login
export const loginUser = createAsyncThunk<AuthResponse, LoginPayload>(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      return await loginAPI(payload);
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);


// Logout thunk (if needed in future)
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await logoutAPI();
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Logout failed");
    }
  }
);

// Forgot Password
export const forgotPassword = createAsyncThunk<
  ForgotPasswordResponse,
  ForgotPasswordPayload
>(
  "auth/forgot-password",
  async (payload, { rejectWithValue }) => {
    try {
      return await forgotPasswordAPI(payload);
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to send OTP"
      );
    }
  }
);

