import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../servicios/auth';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  auth = inject(Auth);
  router = inject(Router);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['pedromartinez@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.email?.value, this.password?.value).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.auth.usuario.set(response.usuario);
          this.router.navigate(['/clientes']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
