import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';
import { lowerCaseValidador } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidadorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './signup.component.html',
  providers: [UserNotTakenValidadorService],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
  constructor(
    private formBuilder: FormBuilder,
    private userNotValidatorNotTakenService: UserNotTakenValidadorService,
    private signupService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
  ) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          lowerCaseValidador,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
        this.userNotValidatorNotTakenService.checkeUserNameTaken(),
      ],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }
  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser).subscribe(
      () => this.router.navigate(['']),
      err => console.log(err),
    );
  }
}
