import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EButton, EIcon, EJustifyContent } from 'src/app/enums';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
  @Input() title = '';
  @Input() buttonText = '';
  @Input() submitButtonText = '';
  @Input() link = [''];
  @Input() linkText = '';
  @Input() socialAuthText = '';
  @Input() socialLink = [''];
  @Input() isSignup = false;

  eIcon = EIcon;
  eButton = EButton;
  eJustifyContent = EJustifyContent;
}
