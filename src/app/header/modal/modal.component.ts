import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public signInForm: any;
  public email: string;
  public password: string;

  public status: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.onClear();
  }

  onClear() {
    this.status = false;
    this.email = '';
    this.password = '';
  }

  onSignIn(signInForm: any) {
    this.authService
      .login(signInForm.getRawValue())
      .subscribe(() => this.router.navigate(['/']));
  }
}
