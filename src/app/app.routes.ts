import { Routes } from '@angular/router';
import {LandingContainerComponent} from './landing_a/landing-container/landing-container.component';
import {LandingbcontainerComponent} from './landing_b/landingbcontainer/landingbcontainer.component';

export const routes: Routes = [
  {path: "", component:LandingContainerComponent},
  {path:"home", component:LandingContainerComponent},
  {path:"landingb", component:LandingbcontainerComponent},

];
