// authApi.ts

import { rtkApi } from "@/services/rtkApi";
import type {
  AuthResponse,
  LoginPayload,
  SignUpPayload,
  ForgotPasswordPayload,
  ForgotPasswordResponse,
  OtpCheckResponse,
  OtpCheckPayload,
  ResetPasswordResponse,
  ResetPasswordPayload,
} from "./types";
import { clearAuth } from "./authSlice";

export const authApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignUpPayload>({
      query: (data) => ({
        url: "/user-signup",
        method: "POST",
        body: {
          name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          password: data.password,
          password_confirmation: data.confirmPassword,
        },
      }),
    }),

    login: builder.mutation<AuthResponse, LoginPayload>({
      query: (payload) => ({
        url: "/user-login",
        method: "POST",
        body: payload,
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/user-logout",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
    try {
      await queryFulfilled;

      dispatch(clearAuth());
      dispatch(rtkApi.util.resetApiState());
    } catch {}
  },
    }),

    forgotPassword: builder.mutation<ForgotPasswordResponse, ForgotPasswordPayload>({
      query: (payload) => ({
        url: "/forget/password",
        method: "POST",
        body: payload,
      }),
    }),

    checkOtp: builder.mutation<OtpCheckResponse, OtpCheckPayload>({
      query: (payload) => ({
        url: "/otp/check",
        method: "POST",
        body: payload,
      }),
    }),

    resetPassword: builder.mutation<ResetPasswordResponse, ResetPasswordPayload>({
      query: (payload) => ({
        url: "/reset/password",
        method: "POST",
        body: payload,
      }),
    }),
  }),

  overrideExisting: false,
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useCheckOtpMutation,
  useResetPasswordMutation
} = authApi;
