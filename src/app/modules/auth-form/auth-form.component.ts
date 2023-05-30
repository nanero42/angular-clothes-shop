import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EButton, EIcon, EJustifyContent } from 'src/app/enums';
import { UserService } from 'src/app/services/user.service';

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
  // @Input() isSignupPage!: boolean;
  @Input() link = [''];
  @Input() linkText = '';
  @Input() socialAuthText = '';

  eIcon = EIcon;
  eButton = EButton;
  eJustifyContent = EJustifyContent;

  constructor(
    protected userService: UserService,
  ) {}
}
