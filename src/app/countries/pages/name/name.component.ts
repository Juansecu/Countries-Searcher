import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class NameComponent {
  term = '';
  error = false;
  displaySuggestions = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string): void {
    this.displaySuggestions = false;
    this.error = false;
    this.term = term;

    this.countryService.searchCountry(this.term).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.error = true;
        this.countries = [];
      }
    );
  }

  suggestions(term: string): void {
    this.displaySuggestions = true;
    this.error = false;
    this.term = term;

    this.countryService.searchCountry(term).subscribe(
      (countries) => (this.suggestedCountries = countries.splice(0, 5)),
      (error) => (this.suggestedCountries = [])
    );
  }

  searchSuggestedCountry(term: string): void {
    this.search(term);
  }
}
