export interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  role: string;
}

export interface AuthResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
    user: User;
  };
}

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  otpSent: boolean,
}
export interface ForgotPasswordPayload {
  email: string;
}

export interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  role: string;
  otp: number;
  otp_expires_at: string;
  is_verified: number;
  status: string;
  [key: string]: any; // for optional fields
}

export interface ForgotPasswordResponse {
  status: boolean;
  message: string;
  data: User;
}

export interface OtpCheckPayload {
  email: string;
  otp: string;
}

export interface OtpCheckResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    username: string | null;
    last_name: string;
    emaill: string;
    reset_password_token: string;
    reset_password_token_expires_at: string;
    otp: string;
    otp_verified_at: string | null;
    // ...add any other fields you need
  };
}

export interface ResetPasswordPayload {
  email: string;
  reset_password_token: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    last_name: string | null;
    email: string;
    reset_password_token: string;
    reset_password_token_expires_at: string;
    [key: string]: any; // other optional fields
  };
}