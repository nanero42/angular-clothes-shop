import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupPageRoutingModule } from './signup-page-routing.module';
import { SignupPageComponent } from './signup-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AuthFormModule } from 'src/app/modules/auth-form/auth-form.module';


@NgModule({
  declarations: [
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    SignupPageRoutingModule,
    ComponentsModule,
    AuthFormModule,
  ]
})
export class SignupPageModule { }
