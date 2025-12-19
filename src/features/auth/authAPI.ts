// authAPI.ts

import { api } from "@/services/api";
import type { AuthResponse, LoginPayload, SignUpPayload,ForgotPasswordPayload, ForgotPasswordResponse } from "./types";

// Sign Up
export const signUpAPI = async (
  data: SignUpPayload
): Promise<AuthResponse> => {
  const payload = {
    name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone,
    password: data.password,
    password_confirmation: data.confirmPassword,
  };

  const res = await api.post("/user-signup", payload);
  return res.data;
};


// Login 
export const loginAPI = async (payload: LoginPayload): Promise<AuthResponse> => {
  const res = await api.post("/user-login", payload);
  return res.data;
};

// Logout
export const logoutAPI = async () => {
  const res = await api.post("/user-logout");
  return res.data;
};

// Forgot Password

export const forgotPasswordAPI = async (
  payload: ForgotPasswordPayload
): Promise<ForgotPasswordResponse> => {
  const res = await api.post("/forget/password", payload);
  return res.data;
};
