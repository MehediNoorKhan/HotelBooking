// authAPI.ts

import { api } from "@/services/api";
import type { AuthResponse, LoginPayload, SignUpPayload } from "./types";

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
export const logoutAPI = async (): Promise<{ status: boolean; message: string; data: any[] }> => {
  const token = localStorage.getItem("token");
  const res = await api.post(
    "/api/user-logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
