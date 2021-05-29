import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public status: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser().subscribe(
      () => (this.status = true),
      () => (this.status = false)
    );
  }

  public logout() {
    this.authService.logout().subscribe(() => (this.status = false));
  }
}
