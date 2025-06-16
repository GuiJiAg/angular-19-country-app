import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountriesLayoutPageComponent } from './layouts/countries-layout-page/countries-layout-page.component';

export const countriesRoutes: Routes = [
  {
    path: '',
    component: CountriesLayoutPageComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  }
];
