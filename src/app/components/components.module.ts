import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthSocialComponent } from './auth-social/auth-social.component';
import { ButtonComponent } from './button/button.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { LinkComponent } from './link/link.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    TitleComponent,
    IconComponent,
    ButtonComponent,
    AuthSocialComponent,
    LinkComponent,
    InputComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    TitleComponent,
    IconComponent,
    ButtonComponent,
    AuthSocialComponent,
    LinkComponent,
    InputComponent,
    GalleryComponent,
  ],
})
export class ComponentsModule { }
