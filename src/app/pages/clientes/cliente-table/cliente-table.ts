import { Component, input } from '@angular/core';
import { MCliente } from '../../../models/cliente.model';

@Component({
  selector: 'app-cliente-table',
  templateUrl: './cliente-table.html',
})
export class ClienteTableComponent {
  clientes = input<MCliente[]>([]);

  constructor() {}
}
