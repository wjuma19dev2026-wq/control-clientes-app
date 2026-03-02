import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ClienteService } from '../../servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  imports: [FormsModule],
  templateUrl: './agregar-cliente.html',
  styles: ``,
})
export class AgregarCliente {
  clienteService = inject(ClienteService);
  router = inject(Router);

  agregarCliente(form: NgForm) {
    this.clienteService.agregarCliente(form.value).subscribe({
      next: (response) => {
        console.log(response);
        form.reset();
        this.router.navigate(['/clientes']);
      },
      error: (error) => {
        console.error('Error al agregar cliente:', error);
      },
    });
  }

  cancelar() {
    this.router.navigate(['/clientes']);
  }
}
