import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EIcon } from 'src/app/enums';

@Component({
  selector: 'app-auth-social',
  templateUrl: './auth-social.component.html',
  styleUrls: ['./auth-social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSocialComponent {
  @Input() socialLinkText = '';

  eIcon = EIcon;
}
