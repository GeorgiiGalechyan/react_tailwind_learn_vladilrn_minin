export interface IButton {
  text: string
  css: {
    color: string
  }
}

export interface IService {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: {
    imageUrl: string
    imageAlt: string
  }
  portfolio: []
}
