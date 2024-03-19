import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

 loginPage : FormGroup;
  send:boolean=true;
  invalid:boolean=false;
  // loginPage = new FormGroup({
  //   'email': new FormControl('',Validators.required),
  //   'password': new FormControl('',Validators.required),
  // });
  constructor(private router: Router,private formBuilder: FormBuilder) {
    this.loginPage = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[@])(?!.*[!$%^&*()_+|~=`{}\\[\\]:;"\'<>?,.\\/]).{8,}$')]]
    });
   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  submit(){
    if(this.loginPage.value.email != ''){
      if(this.loginPage.value.password== 'ZenTradesTest@123'){
        this.router.navigate(['/dash']);
      }
      else{
        this.invalid=true;
      }
    }
   
  }
  onclick(){
    this.send=false;
  }
}
