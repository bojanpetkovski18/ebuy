import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signUpForm = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  ngOnInit() {}

  onBack() {
    this.location.back();
  }

  signUp(signUpForm: FormGroup) {
    this.authService
      .signup(signUpForm.getRawValue())
      .subscribe(() => this.router.navigate(['/']));
  }
}
