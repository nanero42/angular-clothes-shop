import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthSocialComponent } from './auth-social/auth-social.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { TitleComponent } from './title/title.component';
import { LinkComponent } from './link/link.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TitleComponent,
    IconComponent,
    ButtonComponent,
    AuthSocialComponent,
    LinkComponent,
    InputComponent,
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
  ],
})
export class ComponentsModule { }
