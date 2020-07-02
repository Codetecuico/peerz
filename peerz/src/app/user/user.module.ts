import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})
export class UserModule { }
