import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    AuthFormComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    AuthFormComponent,
  ],
})
export class AuthFormModule { }
