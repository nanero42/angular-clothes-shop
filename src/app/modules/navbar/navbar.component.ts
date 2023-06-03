import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EIcon } from 'src/app/enums';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  eIcon = EIcon;
}
