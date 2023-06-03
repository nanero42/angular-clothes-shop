import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    MenuComponent,
  ],
})
export class MenuModule { }
