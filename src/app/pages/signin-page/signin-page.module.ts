import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninPageRoutingModule } from './signin-page-routing.module';
import { SigninPageComponent } from './signin-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AuthFormModule } from 'src/app/modules/auth-form/auth-form.module';


@NgModule({
  declarations: [
    SigninPageComponent
  ],
  imports: [
    CommonModule,
    SigninPageRoutingModule,
    ComponentsModule,
    AuthFormModule,
  ]
})
export class SigninPageModule { }
