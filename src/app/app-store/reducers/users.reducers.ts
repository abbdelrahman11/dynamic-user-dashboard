import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/core/interfaces/AppState';
import { loadUsers } from '../actions/users.action';

export const initialState: AppState = {
  users: null,
  userDetails: null,
  filteredUsers: null,
};
const Reducer = createReducer(
  initialState,
  on(loadUsers, (state, { users }) => ({
    ...state,
    users: users,
  }))
);

export function UsersReducer(state: AppState | undefined, action: Action) {
  return Reducer(state, action);
}
