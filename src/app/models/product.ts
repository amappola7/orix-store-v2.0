export interface RawProductM {
  name: string,
  description: string,
  price: number,
  image: string
  category: string,
  rating?: {
    rate: number,
    count: number
  }
}

export interface ProductM extends RawProductM {
  id: number
}
