import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { AuthPageComponent } from './auth-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AuthFormModule } from 'src/app/modules/auth-form/auth-form.module';


@NgModule({
  declarations: [
    AuthPageComponent,
  ],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    ComponentsModule,
    AuthFormModule,
  ]
})
export class AuthPageModule { }
