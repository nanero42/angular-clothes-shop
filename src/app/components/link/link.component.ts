import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EIcon } from 'src/app/enums';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent implements OnInit {
  @Input() link = [''];
  @Input() text = '';
  @Input() margin = '';

  computedStyle = {};

  eIcon = EIcon;

  ngOnInit(): void {
    this.computedStyle = {
      'margin': this.margin,
    };
  }
}
