import { JwtPayload } from 'jwt-decode'

export interface AuthState {
  authenticated: boolean;
  token: JwtPayload | null;
  refresh_token: JwtPayload | null;
  currentUser: AppUser | null;
  users: AppUser[];
  apiKey: string;
}

export interface AppUser {
  username: string;
  created_on: number;
}
