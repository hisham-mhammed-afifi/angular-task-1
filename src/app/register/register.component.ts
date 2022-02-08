import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import User from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChild('password', { read: ElementRef }) password: any;
  @ViewChild('confirmPassword', { read: ElementRef }) confirmPassword: any;
  emailPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  namePattern = /^[A-Za-z_ ]*$/;
  newUser = new User('', '', '');

  passRegex = new RegExp('');

  constructor(private _userService: UserService, private _router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.dir(this.confirmPassword.nativeElement);
  }
  checkPassword(e: any) {
    this.passRegex = new RegExp(`\\W*(${e.target.value})`, 'g'); //`/\W*(${e.target.value})/g`;
    console.log(this.passRegex);
  }

  signup() {
    this._userService.register({ id: 0, ...this.newUser }).subscribe((user) => {
      console.log(user);
      localStorage.setItem(this.newUser.email, JSON.stringify(this.newUser));
    });
    this._router.navigate(['/login']);
  }
}
