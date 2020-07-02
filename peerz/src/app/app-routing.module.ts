import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  { path: '**',  redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
