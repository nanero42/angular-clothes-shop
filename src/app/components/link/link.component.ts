import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { EIcon } from 'src/app/enums';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
  @Input() link = [''];
  @Input() text = '';

  eIcon = EIcon;

  ngOnChanges(c: SimpleChanges) {
    console.log(c);
  }
}
