import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss'],
})
export class ReactiveLoginComponent implements OnInit {
  reactiveLogin = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get email() {
    return this.reactiveLogin.get('email');
  }
  get password() {
    return this.reactiveLogin.get('password');
  }

  isInvalid(control: any) {
    return control && control.touched && control.invalid;
  }
  isValid(control: any) {
    return control && control.touched && control.valid;
  }
}
