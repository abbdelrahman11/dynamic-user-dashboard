import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { User } from 'src/app/core/interfaces/users';
import { UsersService } from 'src/app/core/services/users/users-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  form!: FormGroup;
  filteredUsers!: User;
  showTheFilter!: boolean;
  notFoundMsg!: boolean;
  constructor(
    private fb: FormBuilder,
    private service: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      search: [''],
    });
    this.getInputValue();
  }
  getInputValue() {
    this.form
      .get('search')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((res) => {
        if (res) {
          this.filterUsers(res);
        } else {
          this.showTheFilter = false;
        }
      });
  }

  filterUsers(userId: string) {
    this.service.getUserDetails(userId).subscribe(
      (res) => {
        if (res) {
          this.filteredUsers = res.data;
          this.showTheFilter = true;
          this.notFoundMsg = false;
        }
      },
      (err) => {
        console.log(err);
        this.handleError();
      }
    );
  }
  showUserDetails(UserId: number) {
    this.router.navigate(['/user', UserId]);
    this.showTheFilter = false;
  }
  handleError() {
    this.notFoundMsg = true;
    this.showTheFilter = false;
  }
}
