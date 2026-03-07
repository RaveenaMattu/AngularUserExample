import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { UserInterface } from '../../interface/UserInterface';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user: UserInterface = {
    uName: '',
    uAge: 0,
    uBio: '',
    uEmail: '',
    isOnline: false,
  };
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUserInfo();
  }

  toggleStatus() {
    this.userService.toggleStatus();
  }
}
