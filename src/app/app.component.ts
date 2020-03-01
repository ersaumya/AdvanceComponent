import { AuthFormComponent } from './auth-form/auth-form.component';
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }
  
  rememberMe: boolean;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
  createUser(user: User) {
    console.log('create account', user);
  }
 

  LoginUser(user: User) {
    console.log('login user', user, this.rememberMe);
   
  }

}
