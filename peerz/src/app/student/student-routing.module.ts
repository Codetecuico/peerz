import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  { 
    path: 'student',
    canActivate: [AuthGuard],
    component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { 
  static components = [StudentComponent];
}
