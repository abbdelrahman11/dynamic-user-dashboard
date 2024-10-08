import { createAction, props } from '@ngrx/store';
import { User, UserDetailsRes, UserRes } from 'src/app/core/interfaces/users';
export const getUsers = createAction(
  '[users] getusers',
  props<{ pageNumber: number }>()
);

export const loadUsers = createAction(
  '[users] loadUsers',
  props<{ users: UserRes }>()
);
export const getUserDetails = createAction(
  '[users] getUserDetails',
  props<{ id: string | null }>()
);
export const loadUserDetails = createAction(
  '[users] loadUserDetails',
  props<{ userDetails: UserDetailsRes }>()
);
