// authThunk.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpAPI } from "./authAPI";
import type { SignUpPayload, LoginPayload, AuthResponse  } from "./types";
import { logoutAPI } from "./authAPI";
import { loginAPI } from "./authAPI";


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
