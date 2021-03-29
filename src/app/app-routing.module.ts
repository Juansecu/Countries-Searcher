import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NameComponent } from './countries/pages/name/name.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { CapitalCityComponent } from './countries/pages/capital-city/capital-city.component';
import { CountryComponent } from './countries/pages/country/country.component';

const routes: Routes = [
  {
    path: '',
    component: NameComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'capital-city',
    component: CapitalCityComponent,
  },
  {
    path: 'country/:code',
    component: CountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
