export interface UserM {
  id: number,
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
  lastname: string,
  lastname2?: string,
}

export interface Address {
  city: string,
  street: string,
  number: number,
  zipCode: number,
  geolocation?: {
    lat: string,
    long: string,
  }
};
