import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingContainerComponent} from './landing_a/landing-container/landing-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing';
}
