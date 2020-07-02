import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'profile', 
    canActivate: [AuthGuard],
    component: ProfileComponent 
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})
export class UserModule { }
