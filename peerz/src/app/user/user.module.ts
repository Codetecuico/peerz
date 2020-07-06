import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SharedModule } from '../shared/shared.module'
import { UserProfileComponent } from './user-profile.component';
import { LoginComponent } from './login.component';
import { AuthGuard } from './auth.guard';

import { UserProfileData } from '../data/user-profile-data';
import { UserProfileGuard } from './user-profile.guard';

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
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    InMemoryWebApiModule.forRoot(UserProfileData)
  ],
  declarations: [
    UserProfileComponent,
    LoginComponent
  ]
})
export class UserModule { }
