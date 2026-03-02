import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { Auth } from '../../servicios/auth';
import { ErrorResponse } from '../../interfaces/usuario.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule, NgClass],
  templateUrl: './register.html',
})
export class Register {
  auth = inject(Auth);
  error: ErrorResponse | null = null;
  isLoading = signal<boolean>(false);

  router = inject(Router);

  onSubmit(form: NgForm) {
    this.isLoading.set(true);
    const { nombre, apellido, email, password, confirmPassword } = form.value;
    const usuario = new Usuario(nombre, apellido, email, password, confirmPassword);

    this.auth.register(usuario).subscribe({
      next: (response) => {
        console.log(response);
        form.reset();
        this.error = null;
        this.isLoading.set(false);
        this.router.navigate(['/login']);
      },
      error: (err: ErrorResponse) => {
        console.error(err);
        this.error = err;
        this.isLoading.set(false);
      },
    });
  }
}
