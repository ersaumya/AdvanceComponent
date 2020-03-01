import { AuthMessageComponent } from './auth-message.component';
import { User } from './auth-form.interface';

import { Component, Renderer2, OnInit, Output, EventEmitter, ContentChild, AfterContentInit, ContentChildren, QueryList, AfterViewInit, ViewChild, ViewChildren, ChangeDetectorRef, ElementRef } from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit, AfterContentInit, AfterViewInit {

  showMessage: boolean;
  @ViewChild('email') email: ElementRef;

  
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  /* @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;*/
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  /*  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>; */


  constructor(
    private render: Renderer2,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.render.setAttribute(this.email.nativeElement, 'placeholder', 'enter your email address');
    this.render.addClass(this.email.nativeElement, 'email');
    this.email.nativeElement.focus();

    /* this.email.nativeElement.setAttribute('placeholder','enter your email address');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus(); */


    /* viewchildren logic
    if (this.message) {
     /*  setTimeout(()=>{
      this.message.forEach((message)=>{
        message.days=30;
        });
      }); */
    //(or)
    /*  this.message.forEach((message) => {
       message.days = 30;
     });
     this.cd.detectChanges();
   } */



    //this.message.days = 30;
  }

  ngAfterContentInit(): void {
    if (this.message) {
      this.message.days = 30;
    }

    if (this.remember) {
      //contentchildren logic
      /*  this.remember.forEach((item)=>{
         item.checked.subscribe((checked: boolean) => this.showMessage = checked);
       }); */
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}

