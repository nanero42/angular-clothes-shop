import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EIcon } from 'src/app/enums';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() icon = EIcon.arrowBack;

  eIcon = EIcon;
}
