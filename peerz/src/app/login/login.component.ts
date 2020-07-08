import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TitleService } from '../shared/title.service';
import { AuthService } from '../user/auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private titleService: TitleService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
  }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}