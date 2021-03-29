import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = 'https://restcountries.eu/rest/v2';
  // private params = 'fields=name;capital;alpha2Code;flag;population';
  private httpParams = new HttpParams().set(
    'fields',
    'name;capital;alpha2Code;flag;population'
  );

  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Country[]> {
    // const url = `${this.baseUrl}/name/${term}?${this.params}`;
    const url = `${this.baseUrl}/name/${term}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }

  searchCapitalCity(term: string): Observable<Country[]> {
    // const url = `${this.baseUrl}/capital/${term}?${this.params}`;
    const url = `${this.baseUrl}/capital/${term}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }

  getCountryByAlpha(code: string): Observable<Country> {
    // const url = `${this.baseUrl}/alpha/${code}?${this.params}`;
    const url = `${this.baseUrl}/alpha/${code}`;
    return this.http.get<Country>(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    // const url = `${this.baseUrl}/region/${region}?${this.params}`;
    const url = `${this.baseUrl}/region/${region}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }
}
