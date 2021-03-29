import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [],
})
export class RegionComponent {
  regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  activateRegion(region: string): void {
    if (region === this.activeRegion) {
      return;
    }

    this.activeRegion = region;
    this.countries = [];

    this.countryService
      .searchRegion(region)
      .subscribe((countries) => (this.countries = countries));
  }

  getCssClass(region: string): string {
    return region === this.activeRegion ? 'btn-primary' : 'btn-outline-primary';
  }
}
