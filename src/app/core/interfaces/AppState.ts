import { User, UserDetailsRes, UserRes } from './users';

export interface AppState {
  users: UserRes | null;
  userDetails: UserDetailsRes | null;
}
