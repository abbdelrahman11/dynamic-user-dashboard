import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDetailsRes, UserRes } from '../../interfaces/users';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getUsers(page: number) {
    return this.http.get<UserRes>(
      `${environment.baseUrl}/api/users?page=${page}`
    );
  }
  getUserDetails(id: string | null) {
    return this.http.get<UserDetailsRes>(
      `${environment.baseUrl}/api/users/${id}`
    );
  }
}
