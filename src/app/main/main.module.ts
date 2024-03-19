import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatFormFieldModule } from "@angular/material/form-field";
import { MainRoutingModule } from './main-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    // DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // MatFormFieldModule,

  ],
  
  exports:[
    LoginPageComponent,
    // DashboardComponent
  ]
})
export class MainModule { }
