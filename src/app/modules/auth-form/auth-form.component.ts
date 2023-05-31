import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EButton, EIcon, EJustifyContent } from 'src/app/enums';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  @Input() title = '';
  @Input() submitButtonText = '';
  @Input() link = [''];
  @Input() linkText = '';
  @Input() socialAuthText = '';
  @Input() isSignup = false;
  @Input() isSigin = false;
  @Input() isForgotPasswordPage = false;
  @Input() passwordLinkMargin = '';
  @Input() additionalMessage = '';

  eIcon = EIcon;
  eButton = EButton;
  eJustifyContent = EJustifyContent;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
    confirmPassword: new FormControl('', Validators.required),
    acceptTerms: new FormControl(false, [Validators.required]),
  });
  submitted = false;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.f['password']);
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}
