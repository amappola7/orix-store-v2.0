import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { userInfoMapper } from 'src/app/utils/helpers/userInfoMapper';
import { UniqueEmailValidator } from 'src/app/utils/validators/email-validator';

@Component({
  selector: 'orix-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss', './signup-form-desktop.component.scss']
})
export class SignupFormComponent {
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private uniqueEmailValidator: UniqueEmailValidator,
    private router: Router,
    private authService: AuthService
  ) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.min(4)]],
      firstName: [
        '',
        [
          Validators.required,
          Validators.max(80),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      secondName: ['', [Validators.max(80), Validators.pattern('[a-zA-Z ]*')]],
      surname: [
        '',
        [
          Validators.required,
          Validators.max(80),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      secondSurname: [
        '',
        [Validators.max(80), Validators.pattern('[a-zA-Z ]*')],
      ],
      email: [
        '',
        [Validators.required, Validators.email],
        (control: FormControl) => this.uniqueEmailValidator.validate(control)
        ,
        {
          updateOn: 'blur',
        }
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.min(6),
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*d)(?=.*[#$%&_-]).*$'),
        ],
      ],
      address: this.fb.group({
        street: ['', Validators.required],
        zip: ['', [Validators.pattern(/^\d{5}$/)]],
      }),
    });
  }

  /**
   * If valid, it submits the form information to the API and resets all the form fields. If the form is invalid, the information is not submitted and an error message will appear in the console.
   */
  onSubmit() {
    if (this.signUpForm.valid) {
      const formattedUserData = userInfoMapper(this.signUpForm.value);
      this.userService.createUser(formattedUserData)
      .subscribe((result) => {
        alert('Success');
        this.authService.signUp(result!);
        this.router.navigate(['/home']);
      });

      this.signUpForm.reset();
    } else {
      console.log('Invalid form', this.signUpForm.value);
      this.signUpForm.markAllAsTouched();
    }
  }
}
