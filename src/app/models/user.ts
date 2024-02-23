export interface UserM {
  id?: number,
  email: string,
  username: string,
  password: string,
  name: Name,
  address: Address,
  phone?: string,
  __v?: string,
  role: string
};

export interface Name {
  firstName: string,
  secondName?: string,
  surname: string,
  secondSurname?: string,
}

export interface Address {
  country?: string,
  state?: string,
  city?: string,
  street: string,
  number: number | null,
  zipCode: number,
  geolocation?: {
    lat: string,
    long: string,
  }
};

export interface RawUserM {
  "username": string,
  "firstName": string,
  "secondName": string,
  "surname": string,
  "secondSurname": "Fonseca",
  "email": string,
  "password": string,
  "address": {
    "street": string,
    "zip": number
  }
};