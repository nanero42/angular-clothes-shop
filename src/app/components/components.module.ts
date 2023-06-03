import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthSocialComponent } from './auth-social/auth-social.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { LinkComponent } from './link/link.component';
import { TitleComponent } from './title/title.component';
import { CollectionComponent } from './collection/collection.component';



@NgModule({
  declarations: [
    TitleComponent,
    IconComponent,
    ButtonComponent,
    AuthSocialComponent,
    LinkComponent,
    InputComponent,
    CollectionComponent,
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
    CollectionComponent,
  ],
})
export class ComponentsModule { }
