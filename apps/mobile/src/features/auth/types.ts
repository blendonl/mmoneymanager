export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (data: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: (data: SocialAuthData) => Promise<void>;
  loginWithApple: (data: SocialAuthData) => Promise<void>;
}

export interface SocialAuthData {
  token: string;
  userId: string;
  email: string;
}
