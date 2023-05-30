import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordPageRoutingModule } from './forgot-password-page-routing.module';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';
import { AuthFormModule } from 'src/app/modules/auth-form/auth-form.module';


@NgModule({
  declarations: [
    ForgotPasswordPageComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordPageRoutingModule,
    AuthFormModule,
  ]
})
export class ForgotPasswordPageModule { }
