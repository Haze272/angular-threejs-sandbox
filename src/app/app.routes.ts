import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ShowcasePageComponent} from './pages/showcase-page/showcase-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'showcase', component: ShowcasePageComponent },
];
