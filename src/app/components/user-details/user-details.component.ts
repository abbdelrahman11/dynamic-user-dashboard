import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/users';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/core/interfaces/AppState';
import { getUserDetails } from 'src/app/app-store/actions/users.action';
import { selectUserDetails } from 'src/app/app-store/selectors/users.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId!: string | null;
  userDstails!: User | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.pipe(select(selectUserDetails)).subscribe({
      next: (res) => {
        this.userDstails = res?.data;
      },
      error(err) {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(getUserDetails({ id: this.userId }));
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
