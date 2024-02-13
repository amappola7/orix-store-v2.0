export interface RawProductM {
  name: string,
  description: string,
  price: number,
  image: string
  category: string
}

export interface ProductM extends RawProductM {
  id: number
}
