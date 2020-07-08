import { NgModule } from '@angular/core';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StudentRoutingModule
  ],
  declarations: [StudentRoutingModule.components]
})
export class StudentModule { }
