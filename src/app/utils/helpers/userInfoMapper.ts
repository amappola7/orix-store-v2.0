import { RawUserM, UserM } from "src/app/models/user";

export const userInfoMapper = (user: RawUserM) => {
  const newUser: UserM = {
    id: -1,
    email: user.email,
    username: user.username,
    password: user.password,
    name: {
      firstName: user.firstName,
      secondName: user.secondName,
      surname: user.surname,
      secondSurname: user.secondSurname,
    },
    address: {
      country: 'Colombia',
      state: 'Boyacá',
      city: 'Tunja',
      street: user.address.street,
      number: null,
      zipCode: user.address.zip,
      geolocation: {
        lat: '',
        long: '',
      }
    },
    phone: '',
    __v: '',
    role: 'user'
  };

  return newUser;
}