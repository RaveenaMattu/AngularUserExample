import { Injectable } from '@angular/core';
import { UserInterface } from '../interface/UserInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private user: UserInterface = {
    uName : 'Raveena',
    uAge : 30,
    uBio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    uEmail : 'ruby@gmail.com',
    photoUrl : 'Maria.png',
    isOnline: true
  };

  getUserInfo(): UserInterface {
    return this.user;
  }
  toggleStatus() {
    this.user.isOnline = !this.user.isOnline;
  }
}
