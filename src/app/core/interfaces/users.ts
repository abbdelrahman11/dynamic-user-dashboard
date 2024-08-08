export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserRes {
  page: number;
  data: User[];
  per_page: number;
  total: number;
  total_pages: number;
}
export interface UserDetailsRes {
  data: User;
}
