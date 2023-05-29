import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { AuthSocialComponent } from './auth-social/auth-social.component';



@NgModule({
  declarations: [
    TitleComponent,
    IconComponent,
    ButtonComponent,
    NavbarComponent,
    AuthSocialComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TitleComponent,
    IconComponent,
    ButtonComponent,
    NavbarComponent,
    AuthSocialComponent,
  ],
})
export class ComponentsModule { }
