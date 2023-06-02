import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { GalleryModule } from 'src/app/modules/gallery/gallery.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ComponentsModule,
    GalleryModule,
  ]
})
export class HomePageModule { }
