import { inject, Injectable, signal } from '@angular/core';
import { IUsuario, LoginResponse, RegisterResponse } from '../interfaces/usuario.interface';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  usuario = signal<IUsuario | null>(null);

  http = inject(HttpClient);

  public register(usuario: Usuario): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>('http://localhost:3000/auth/registro', usuario);
  }

  public login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:3000/auth/login', { email, password });
  }
}
