import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'orix-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  showInvalidCredentialsMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {};

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  };

  onSubmit() {
    if(this.loginForm.valid) {
      this.authService.logIn(this.loginForm.value)
      .subscribe((result) => {
        if(result) {
          const role = this.authService.getUserRole();
          this.loginForm.reset();
          role === 'admin' ? this.router.navigate(['/admin']) : this.router.navigate(['/home']);
        } else {
          this.showInvalidCredentialsMessage = true;
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
