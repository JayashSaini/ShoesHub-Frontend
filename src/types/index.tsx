import { Method } from "axios";

export interface InputData {
  label: string;
  type?: string;
  value: string | number;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonData {
  text: string;
}
export interface SSOButtonData {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ApiCallProps {
  url: string;
  method?: Method;
  params?: object;
  data?: object;
  headers?: object;
  debounceTime?: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserState;
  error: string | null;
}

export interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  username: string;
  avatar: string;
  email: string;
  userId: string;
  isEmailVerified: boolean;
  role: string;
  isLoggedIn: boolean;
}

export interface LoginPayload {
  accessToken: string | null;
  refreshToken: string | null;
  username: string;
  email: string;
  userId: string;
  isEmailVerified: boolean;
  role: string;
}
