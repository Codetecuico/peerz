import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent }
    ])
  ]
})
export class UserModule { }
