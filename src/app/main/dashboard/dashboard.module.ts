import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CanvasJSAngularChartsModule
  ],
  exports:[
    // LoginPageComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
