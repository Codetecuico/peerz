import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';
import { LoginComponent } from './login.component';
import { UserProfileGuard } from './user-profile.guard';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  { 
    path: 'profile', 
    canActivate: [AuthGuard],
    canDeactivate: [UserProfileGuard],
    component: UserProfileComponent 
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { 
  static components = [LoginComponent, UserProfileComponent];
}
