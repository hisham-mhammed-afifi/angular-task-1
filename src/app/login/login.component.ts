import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '../classes/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  pattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  newUser = new User('', '', '');
  pass: string = '';
  wrongMsg: Boolean = false;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  checkPassword(e: any) {
    this.pass = e.target.value;
  }

  checkLogin() {
    const userInLoc = localStorage.getItem(this.newUser.email) as string;
    if (!userInLoc) return;
    const user = JSON.parse(userInLoc);
    if (user.password == this.pass) {
      console.log(this.pass);
      this._router.navigate(['/products']);
    }
    console.log('wrong password');
    this.wrongMsg = true;
  }
}
