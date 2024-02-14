import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, take, of } from 'rxjs';
import { CityModel, CountryModel, StateModel } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private _url: string = 'https://api.countrystatecity.in/v1/countries';
  private _headers: HttpHeaders = new HttpHeaders({
    'X-CSCAPI-KEY': 'VjdnM2ZTZVBIV3AwUkJ1UVV3eXQxaEQwWnZQNlplZks4dVFzbWp2ag=='
  });

  constructor(private http: HttpClient) { };

  getCountries(): Observable<CountryModel[]> {
    const headers = this._headers;
    return this.http.get<CountryModel[]>(this._url, { headers }).pipe(
      take(1),
      catchError((error) => {
        console.log('Error while retrieving countries', error);
        return of([]);
      })
    )
  };

  getStatesByCountry(countryISO2Code: string): Observable<StateModel[]> {
    const headers = this._headers;
    return this.http.get<StateModel[]>(`${this._url}/${countryISO2Code}/states`, { headers }).pipe(
      take(1),
      catchError((error) => {
        console.log('Error while retrieving countries', error);
        return of([]);
      })
    )
  };

  getCitiesByStateAndCountry(countryISO2Code: string, stateISO2Code: string): Observable<CityModel[]> {
    const headers = this._headers;
    return this.http.get<CityModel[]>(`${this._url}/${countryISO2Code}/states/${stateISO2Code}/cities`, { headers }).pipe(
      take(1),
      catchError((error) => {
        console.log('Error while retrieving cities', error);
        return of([]);
      })
    )
  };
}
