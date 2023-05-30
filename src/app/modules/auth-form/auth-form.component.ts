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
  @Input() submitButtonText = '';
  @Input() link = [''];
  @Input() linkText = '';
  @Input() socialAuthText = '';
  @Input() isSignup = false;
  @Input() isSigin = false;
  @Input() isForgotPasswordPage = false;
  @Input() passwordLinkMargin = '';
  @Input() additionalMessage = '';

  eIcon = EIcon;
  eButton = EButton;
  eJustifyContent = EJustifyContent;
}
