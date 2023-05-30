import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ErrorService } from 'src/app/services';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent {
  constructor(protected errorService: ErrorService) {}
}
