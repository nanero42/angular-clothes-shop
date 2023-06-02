import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';



@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
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
