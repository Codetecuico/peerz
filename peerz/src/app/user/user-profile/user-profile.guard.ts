import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { UserProfileComponent } from './user-profile.component';

@Injectable({
  providedIn: 'root'
})
export class UserProfileGuard implements CanDeactivate<UserProfileComponent> {
  canDeactivate(component: UserProfileComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.profileForm.dirty) {
      return confirm(`You will lose all changes you've made, do you want to continue?`);
    }
    return true;
  }
}