import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EButton, EIcon, EJustifyContent } from 'src/app/enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() category = EButton.primary;
  @Input() icon!: EIcon;
  @Input() buttonJustifyContent = EJustifyContent.center;
  @Input() margin = '';
  @Input() type = 'button';

  computedButtonStyle = {};

  eButton = EButton;

  ngOnInit(): void {
    this.computedButtonStyle = {
      'justify-content': this.buttonJustifyContent,
      'margin': this.margin,
    }
  }
}
