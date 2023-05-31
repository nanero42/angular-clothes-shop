import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthFormComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthFormComponent,
  ],
})
export class AuthFormModule { }
