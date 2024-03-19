import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard/dashboard.component';
import { LoginPageComponent } from './main/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'dash', component: DashboardComponent,
  },
  {
    path: '', component: LoginPageComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
