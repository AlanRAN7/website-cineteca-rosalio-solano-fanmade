import { Component, signal } from '@angular/core';
import { HeaderComponent } from './ui/layout/header/header.component';
import { FooterComponent } from "./ui/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cineteca-app');
}
