import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SharedModule } from '../shared/shared.module'
import { UserRoutingModule } from './user-routing.module';

import { UserProfileData } from '../data/user-profile-data';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    InMemoryWebApiModule.forRoot(UserProfileData)
  ],
  declarations: [UserRoutingModule.components]
})
export class UserModule { }
