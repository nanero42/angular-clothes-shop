import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthSocialComponent } from './auth-social/auth-social.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { LinkComponent } from './link/link.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    TitleComponent,
    IconComponent,
    ButtonComponent,
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
    AuthSocialComponent,
    LinkComponent,
  ],
})
export class ComponentsModule { }
