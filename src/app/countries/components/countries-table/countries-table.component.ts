import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
})
export class CountriesTableComponent {
  @Input()
  countries: Country[] = [];
}
