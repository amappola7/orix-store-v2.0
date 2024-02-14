export interface CityModel {
  id: number,
  name: string
}
export interface CountryModel extends CityModel {
  iso2: string
};

export interface StateModel extends CityModel {
  iso2: string
};

export interface LocationModel {
  country: string,
  state: string,
  city: string
}