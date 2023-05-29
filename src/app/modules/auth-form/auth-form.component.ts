import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EButton, EIcon, EJustifyContent } from 'src/app/enums';

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

  isSignup$ = new BehaviorSubject(true);

  click() {
    if (this.isSignup$.value) {
      this.isSignup$.next(false);
    } else {
      this.isSignup$.next(true);
    }
  }
}
