import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/modules/core.module';

@Component({
  standalone: true,
  imports: [RouterOutlet, CoreModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('template-angular-v20-tmp');
}
