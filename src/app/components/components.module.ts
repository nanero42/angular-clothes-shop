import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { AuthSocialComponent } from './auth-social/auth-social.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TitleComponent,
    IconComponent,
    ButtonComponent,
    NavbarComponent,
    AuthSocialComponent,
    LinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TitleComponent,
    IconComponent,
    ButtonComponent,
    NavbarComponent,
    AuthSocialComponent,
    LinkComponent,
  ],
})
export class ComponentsModule { }
