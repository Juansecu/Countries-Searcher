import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      pre {
        border: 1px solid silver;
        padding: 10px 20px;
        background-color: ghostwhite;
      }
    `,
  ],
})
export class CountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    /*this.activatedRoute.params.subscribe(({ code }) => {
      this.countryService
        .getCountryByAlpha(code)
        .subscribe((country) => console.log(country));
    });*/

    // SAME AS:

    this.activatedRoute.params
      .pipe(
        switchMap(({ code }) => this.countryService.getCountryByAlpha(code)),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country));
  }
}
