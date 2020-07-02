import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import {LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: '**',  redirectTo: 'profile', pathMatch: 'full' }
    ])
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  exports: [FormsModule]
})
export class UserModule { }
