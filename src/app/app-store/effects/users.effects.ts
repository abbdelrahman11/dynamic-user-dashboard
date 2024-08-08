import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import {
  getUserDetails,
  getUsers,
  loadUserDetails,
  loadUsers,
} from '../actions/users.action';
import { UsersService } from 'src/app/core/services/users/users-list.service';
import { UserDetailsRes, UserRes } from 'src/app/core/interfaces/users';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private service: UsersService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap((action) =>
        this.service
          .getUsers(action.pageNumber)
          .pipe(map((users: UserRes) => loadUsers({ users })))
      )
    )
  );

  getUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserDetails),
      switchMap((action) =>
        this.service
          .getUserDetails(action.id)
          .pipe(
            map((userDetails: UserDetailsRes) =>
              loadUserDetails({ userDetails })
            )
          )
      )
    )
  );
}
