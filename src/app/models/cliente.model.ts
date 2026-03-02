export class MCliente {
  constructor(
    public id: string,
    public nombre: string,
    public apellido: string,
    public email: string,
    public saldo: number,
    public image: string,
  ) {}
}
