import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CityModel, CountryModel, StateModel } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'orix-location-form',
  templateUrl: './location-form.component.html',
  styleUrl: './location-form.component.scss'
})
export class LocationFormComponent {
  public locationForm!: FormGroup;
  public countriesList!: CountryModel[];
  public statesList: StateModel[] = [];
  public citiesList: CityModel[] = [];
  public selectedCountry!: CountryModel | undefined;
  public selectedState!: StateModel | undefined;
  public locationFormCountrySubscription!: Subscription | undefined;
  public locationFormStateSubscription!: Subscription | undefined;
  public locationFormCitySubscription!: Subscription | undefined;
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;

  @Output() locationDataEmission: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private locationService: LocationService,
    private store: Store<{ screenMode: boolean }>
  ) { }

  ngOnInit(): void {
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => this.screenMode = mode);
    this.getCountriesList();

    this.locationForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
    this.locationForm.get('state')?.disable();
    this.locationForm.get('city')?.disable();

    this.locationFormCountrySubscription = this.locationForm.get('country')?.valueChanges
      .subscribe((countryValue) => {
        this.locationForm.get('state')?.enable();
        this.locationForm.get('city')?.disable();
        this.selectedCountry = this.countriesList.find((country) => country.name === countryValue);
        this.locationService.getStatesByCountry(this.selectedCountry!.iso2)
          .subscribe((states) => {
            if (states.length === 0) this.locationForm.get('city')?.enable();
            this.statesList = states;
          });
      });

    this.locationFormStateSubscription = this.locationForm.get('state')?.valueChanges
      .subscribe((stateValue) => {
        this.locationForm.get('city')?.enable();
        this.selectedState = this.statesList.find((state) => state.name === stateValue);
        this.locationService.getCitiesByStateAndCountry(this.selectedCountry!.iso2, this.selectedState!.iso2)
          .subscribe((cities) => this.citiesList = cities);
      });

    this.locationFormCitySubscription = this.locationForm.get('city')?.valueChanges
      .subscribe(() => {
        this.onEmitLocationData();
      });
  }

  ngOnDestroy(): void {
    this.locationFormCountrySubscription?.unsubscribe();
    this.locationFormStateSubscription?.unsubscribe();
    this.locationFormCitySubscription?.unsubscribe();
  }

  getCountriesList(): void {
    this.locationService.getCountries()
      .subscribe((countries) => this.countriesList = countries);
  }

  onSubmit() {
    if (!this.locationForm.valid) {
      this.locationForm.markAllAsTouched();
    }
  }

  onEmitLocationData() {
    this.onSubmit();
    this.locationDataEmission.emit({ data: this.locationForm.value, status: this.locationForm.valid });
  }
}
