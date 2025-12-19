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

export interface ForgotPasswordResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    email: string;
    phone: string;
    otp_expires_at: string;
    is_verified: number;
    status: string;
  };
}
