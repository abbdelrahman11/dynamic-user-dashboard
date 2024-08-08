import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/users';
import { UsersService } from 'src/app/core/services/users/users-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId!: string | null;
  userDstails!: User;
  constructor(
    private service: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserDetails();
  }
  getUserDetails() {
    this.service.getUserDetails(this.userId).subscribe({
      next: (res) => {
        this.userDstails = res.data;
      },
      error(err) {
        console.log(err);
      },
    });
  }
  goBack() {
    this.router.navigateByUrl('/');
  }
}
