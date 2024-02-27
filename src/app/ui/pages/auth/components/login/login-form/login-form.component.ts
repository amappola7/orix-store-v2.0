import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'orix-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss', './login-form-desktop.component.scss']
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  showInvalidCredentialsMessage: boolean = false;
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<{ screenMode: boolean }>
  ) { };

  ngOnInit(): void {
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => this.screenMode = mode);
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  };

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.logIn(this.loginForm.value)
        .subscribe((result) => {
          if (result) {
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
