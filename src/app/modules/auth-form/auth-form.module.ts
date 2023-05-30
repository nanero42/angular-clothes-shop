import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthFormComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [
    AuthFormComponent,
  ],
})
export class AuthFormModule { }
