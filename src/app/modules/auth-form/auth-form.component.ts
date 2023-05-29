import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EButton, EIcon, EJustifyContent } from 'src/app/enums';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
  eIcon = EIcon;
  eButton = EButton;
  eJustifyContent = EJustifyContent;

  constructor(
    protected userService: UserService,
  ) {}

  click() {
    if (this.userService.hasAccount$.value) {
      this.userService.hasAccount$.next(false);
    } else {
      this.userService.hasAccount$.next(true);
    }
  }
}
