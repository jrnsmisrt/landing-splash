import { Component } from '@angular/core';
import {LandingtitleComponent} from '../landingtitle/landingtitle.component';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-landing-container',
  imports: [
    LandingtitleComponent,
    NavbarComponent
  ],
  templateUrl: './landing-container.component.html',
  styleUrl: './landing-container.component.css'
})
export class LandingContainerComponent {

}
