import { Injectable } from '@angular/core';
import { UserInterface } from '../interface/UserInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private user: UserInterface = {
    uName : 'Raveena',
    uAge : 30,
    uBio : 'Lorem ipsum',
    uEmail : 'ruby@gmail.com'
  };

  getUserInfo(): UserInterface {
    return this.user;
  }
}
