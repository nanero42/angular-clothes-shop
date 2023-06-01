import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EButton, EIcon, EJustifyContent } from 'src/app/enums';
import { ConfirmPasswordFormControl, EmailFormControl, NameFormControl, PasswordFormControl, TermsFormControl } from 'src/app/helpers';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent implements OnInit {
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

  form!: FormGroup;
  submitted = false;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new NameFormControl(),
      email: new EmailFormControl(),
      password: new PasswordFormControl(),
      confirmPassword: new ConfirmPasswordFormControl(),
      terms: new TermsFormControl(),
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  isTouched(controlName: string) {
    return this.f[controlName].touched;
  }

  isInvalid(controlName: string) {
    return this.f[controlName].invalid;
  }
}
