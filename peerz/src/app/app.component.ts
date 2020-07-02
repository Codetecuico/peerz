import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appHeaderTitle = 'Peerz';

  constructor(private authService: AuthService,
              private router: Router){}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.toTitleCase(this.authService.currentUser.userName);
    }
    return '';
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  toTitleCase(str: string): string {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
}
