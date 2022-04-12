import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {
  user: IUser | null | undefined;

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
      .post<IUser>(`${apiUrl}/register`, data, { withCredentials: true })
      .pipe(tap((user) => (this.user = user)));
  }

  login$(data: { email: string; password: string }): Observable<IUser> {
    return this.http
      .post<IUser>(`${apiUrl}/login`, data, { withCredentials: true })
      .pipe(tap((user) => (this.user = user)));
  }

  logout$() {
    return this.http
      .post<IUser>(`${apiUrl}/logout`, {}, { withCredentials: true })
      .pipe(tap(() => (this.user = null)));
  }

  getProfileInfo$(): Observable<IUser> {
    return this.http
      .get<IUser>(`${apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap((user) => (this.user = user)));
  }
}
