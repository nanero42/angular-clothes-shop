import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule { }
