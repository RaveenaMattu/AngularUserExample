import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-service';
import { UserInterface } from '../../interface/UserInterface';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user : UserInterface = {
    uName: '',
    uAge: 0,
    uBio: '',
    uEmail: ''
  } ;
  constructor ( private userService: UserService) {}
  
    ngOnInit() {
      this.user = this.userService.getUserInfo();
    }
  
}


