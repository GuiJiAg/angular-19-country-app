import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { countriesRoutes } from './modules/countries-module/countries.routes';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'countries',
    loadChildren: () => countriesRoutes
  },
  {
    path: '**',
    redirectTo: ''
  }
];
