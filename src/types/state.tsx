import { CategoryType } from "./category";
import { CartType } from "./Cart";
export interface featureState {
  hamburger: boolean;
  category: {
    men: CategoryType[] | [];
    women: CategoryType[] | [];
  };
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

export interface AuthState {
  isAuthenticated: boolean;
  user: UserState;
  error: string | null;
}

export interface CartState {
  cart: CartType[] | [];
  totalPrice: number;
  discountedTotalPrice: number;
}

export interface RootState {
  user: AuthState;
  features: featureState;
  cart: CartState;
}
