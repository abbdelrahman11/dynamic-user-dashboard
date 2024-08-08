import { Component, OnInit } from '@angular/core';
import { User, UserRes } from 'src/app/core/interfaces/users';
import { UsersService } from 'src/app/core/services/users/users-list.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/interfaces/AppState';
import { getUsers } from 'src/app/app-store/actions/users.action';
import { selectUsers } from 'src/app/app-store/selectors/users.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  userData!: User[] | undefined;
  totalPages!: number | undefined;
  currentPage!: number | undefined;
  constructor(private store: Store<AppState>, private router: Router) {
    this.store.pipe(select(selectUsers)).subscribe({
      next: (res) => {
        this.userData = res?.data;
        this.totalPages = res?.total_pages;
        this.currentPage = res?.page;
      },
      error(err) {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.store.dispatch(getUsers({ pageNumber: 1 }));
  }

  showUserDetails(UserId: number) {
    this.router.navigate(['/user', UserId]);
  }
  changeThePage(pageNumber: number) {
    this.store.dispatch(getUsers({ pageNumber: pageNumber }));
  }
  changePagesTotalToArray(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i + 1);
  }
}
