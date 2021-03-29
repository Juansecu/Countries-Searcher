import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital-city',
  templateUrl: './capital-city.component.html',
  styles: [],
})
export class CapitalCityComponent {
  term = '';
  error = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string): void {
    this.error = false;
    this.term = term;

    this.countryService.searchCapitalCity(this.term).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.error = true;
        this.countries = [];
      }
    );
  }
}
