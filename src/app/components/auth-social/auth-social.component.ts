import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EIcon } from 'src/app/enums';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-social',
  templateUrl: './auth-social.component.html',
  styleUrls: ['./auth-social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSocialComponent {
  eIcon = EIcon;

  constructor(
    protected userService: UserService,
  ) {}
}
