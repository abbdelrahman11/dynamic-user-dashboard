import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/interfaces/AppState';
import { UserRes } from 'src/app/core/interfaces/users';

export const selectors = (state: any) => state.users;

export const selectUsers = createSelector(
  selectors,
  (state: AppState) => state.users
);
export const selectUserDetails = createSelector(
  selectors,
  (state: AppState) => state.userDetails
);
