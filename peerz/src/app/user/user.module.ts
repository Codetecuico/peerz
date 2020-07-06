import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SharedModule } from '../shared/shared.module'
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { AuthGuard } from './auth.guard';

import { UserProfileData } from '../data/user-profile-data';

const routes: Routes = [
  { 
    path: 'profile', 
    canActivate: [AuthGuard],
    component: ProfileComponent 
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
    ProfileComponent,
    LoginComponent
  ]
})
export class UserModule { }
