import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalCityComponent } from './pages/capital-city/capital-city.component';
import { NameComponent } from './pages/name/name.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryComponent } from './pages/country/country.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountryFormComponent } from './components/country-form/country-form.component';

@NgModule({
  declarations: [
    CapitalCityComponent,
    NameComponent,
    RegionComponent,
    CountryComponent,
    CountriesTableComponent,
    CountryFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    CapitalCityComponent,
    NameComponent,
    RegionComponent,
    CountryComponent,
  ],
})
export class CountriesModule {}
