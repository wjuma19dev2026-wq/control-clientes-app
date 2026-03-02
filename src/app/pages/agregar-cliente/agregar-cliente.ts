import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-cliente.html',
  styles: ``,
})
export class AgregarCliente implements OnInit {
  clienteService = inject(ClienteService);
  router = inject(Router);
  private fb = inject(FormBuilder);

  clienteForm!: FormGroup;

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      saldo: ['', [Validators.required, Validators.min(0)]],
    });
  }

  agregarCliente() {
    if (this.clienteForm.valid) {
      this.clienteService.agregarCliente(this.clienteForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.clienteForm.reset();
          this.clienteService.addCliente(response.data);
          this.router.navigate(['/clientes']);
        },
        error: (error) => {
          console.error('Error al agregar cliente:', error);
        },
      });
    }
  }

  cancelar() {
    this.router.navigate(['/clientes']);
  }

  get nombre() {
    return this.clienteForm.get('nombre');
  }

  get apellido() {
    return this.clienteForm.get('apellido');
  }

  get email() {
    return this.clienteForm.get('email');
  }

  get saldo() {
    return this.clienteForm.get('saldo');
  }
}
