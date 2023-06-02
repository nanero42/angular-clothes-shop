import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    GalleryComponent,
  ],
})
export class GalleryModule { }
