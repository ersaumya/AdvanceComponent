import { AuthFormComponent } from './auth-form/auth-form.component';
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef, TemplateRef } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit{
 
  component:ComponentRef<AuthFormComponent>;
 
  constructor(private resolver:ComponentFactoryResolver){

  }
  ngAfterContentInit() {
    setTimeout(() => {
    //const authFormFactory=this.resolver.resolveComponentFactory(AuthFormComponent);
    //second component 
    ///this.entry.createComponent(authFormFactory);
    //this.component=this.entry.createComponent(authFormFactory,0); /* 0-indiacte reordering of component to first */
    /* dynamic input data */
    /* this.component.instance.title="Create Account"; */
    /*   dynamic output subscription */
    /* this.component.instance.submitted.subscribe(this.LoginUser);
    })  */

    //embeded template
    this.entry.createEmbeddedView(this.tmpl,{
      $implicit:'Soumya',
      location:'Salipur,India'
    });
  })
}

  /* logic for dynamic component */
  @ViewChild('entry',{read:ViewContainerRef}) entry:ViewContainerRef;

  @ViewChild('tmpl') tmpl:TemplateRef<any>;

 
  //destroy dynamic component
  destroyComponent(){
    this.component.destroy();
  }
  //reordering component
  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  LoginUser(user: User) {
    console.log('login user', user);
  }

}
