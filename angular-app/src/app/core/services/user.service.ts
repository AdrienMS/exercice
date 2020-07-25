import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer, onErrorResumeNext } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiRoot = 'http://localhost/';

  constructor(private http: HttpClient) { }

  private setSession(authResult, username: string) {
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('currentUser', username);
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  login(user: {username: string, password: string}) {
    return this.http.post(
      this.apiRoot.concat('auth-token/'),
      user
    ).pipe(
      tap(response => this.setSession(response, user.username)),
      shareReplay(),
    );
  }

  signup(username: string, email: string, password1: string, password2: string) {
    // TODO: implement signup
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return JSON.parse(localStorage.getItem('token'));
  }

  public getUsers(token: string): Observable<User[]> {
    return this.http.get(
      this.apiRoot.concat('api/users/all/'),
      { headers: { Authorization: `Token ${token}` } }
    ) as Observable<User[]>;
  }

  public getCurrentUser(token: string, username: string): Observable<User> {
    return this.http.get(
      this.apiRoot.concat(`api/users/${username}/`),
      { headers: { Authorization: `Token ${token}` } }
    ) as Observable<User>;
  }
}
