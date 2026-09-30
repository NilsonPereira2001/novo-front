import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Loading } from './shared/loading/loading';

@Component({
  imports: [RouterOutlet, ButtonModule, RouterModule, Loading],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('novo-front');
}
