import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInterceptor } from 'src/app/views/login-module/shared/header.interceptor'
import { ModalModule, OffcanvasModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,     
    IconModule,   
    ModalModule,
    OffcanvasModule,
    HttpClientModule
  ],
  exports:[
    LoginPageComponent
  ],
  providers:[ {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi:true
  },]
})
export class LoginModuleModule { }
