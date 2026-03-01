import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Jumbotron } from './components/jumbotron/jumbotron';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Jumbotron, Breadcrumb],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('control-clientes-app');
}
