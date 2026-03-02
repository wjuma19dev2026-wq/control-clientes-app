import { Component, input } from '@angular/core';
import { MCliente } from '../../../../models/cliente.model';

@Component({
  selector: 'app-tr',
  templateUrl: './tr.html',
})
export class Tr {
  cliente = input.required<MCliente>();
}
