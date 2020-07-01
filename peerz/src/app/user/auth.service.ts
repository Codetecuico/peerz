import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor() { }

  login(userName: string, password: string): void {

    this.currentUser = {
      id: 2,
      userName: userName,
      isAdmin: true
    };

  }

  logout(): void {
    this.currentUser = null;
  }
}