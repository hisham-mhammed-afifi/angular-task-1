import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../custom/password.validator';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.scss'],
})
export class ReactiveRegisterComponent implements OnInit {
  reactiveRegister = this.fb.group(
    {
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z_ ]*$/)]],
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
      confirmPassword: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
      ],
    },
    { validator: confirmPasswordValidator }
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get name() {
    return this.reactiveRegister.get('name');
  }
  get email() {
    return this.reactiveRegister.get('email');
  }
  get password() {
    return this.reactiveRegister.get('password');
  }
  get confirmPassword() {
    return this.reactiveRegister.get('confirmPassword');
  }

  isInvalid(control: any) {
    return control && control.touched && control.invalid;
  }
  isValid(control: any) {
    return control && control.touched && control.valid;
  }
}
