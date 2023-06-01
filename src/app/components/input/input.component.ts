import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  @Input() formControlName = '';
  @Input() label = '';
  @Input() form!: FormGroup;
  @Input() invalidCondition = false;

  ngOnInit(): void {
      console.log('form: ', this.form);
  }
}
