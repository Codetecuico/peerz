import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { ProfileComponent } from './profile.component';

@Injectable({
  providedIn: 'root'
})
export class UserProfileGuard implements CanDeactivate<ProfileComponent> {
  canDeactivate(component: ProfileComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.profileForm.dirty) {
      return confirm(`You will lose all changes you've made, do you want to continue?`);
    }
    return true;
  }
}