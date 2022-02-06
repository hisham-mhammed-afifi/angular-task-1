import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

interface IUser {
  id: number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
