import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EIcon } from 'src/app/enums';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  eIcon = EIcon;

  constructor(private _location: Location) {}

  back() {
    this._location.back();
  }
}
