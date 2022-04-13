import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../../shared/interfaces';


@Injectable()
export class UserService {
  user: IUser | null | undefined = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {}

  register$(data: {
    username: string;
    email: string;
    tel?: string;
    password: string;
  }): Observable<IUser> {
    return this.http
      .post<IUser>(`/api/register`, data)
      .pipe(tap((user) => (this.user = user)));
  }

  login$(data: { email: string; password: string }): Observable<IUser> {
    return this.http
      .post<IUser>(`/api/login`, data)
      .pipe(tap((user) => (this.user = user)));
  }

  logout$() {
    return this.http
      .post<IUser>(`/api/logout`, {})
      .pipe(tap(() => (this.user = null)));
  }

  getProfileInfo$(): Observable<IUser> {
    return this.http
      .get<IUser>(`/api/users/profile`)
      .pipe(tap((user) => (this.user = user)));
  }
}
