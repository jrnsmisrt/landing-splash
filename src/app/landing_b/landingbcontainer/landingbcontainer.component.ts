import { Component } from '@angular/core';
import {LandingtitleComponent} from "../../landing_a/landingtitle/landingtitle.component";
import {NavbarComponent} from "../../landing_a/navbar/navbar.component";

@Component({
  selector: 'app-landingbcontainer',
    imports: [
        LandingtitleComponent,
        NavbarComponent
    ],
  templateUrl: './landingbcontainer.component.html',
  styleUrl: './landingbcontainer.component.css'
})
export class LandingbcontainerComponent {
constructor() {
  console.log("landing b")
}
}
