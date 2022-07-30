import { IService } from '../models/models'

export const services: IService[] = [
  {
    id: 1,
    title: 'Банкротство физических лиц',
    description: 'I am description',
    price: 130000.0,
    category: 'I am category',
    image: {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/02/Circle-icons-computer.svg',
      imageAlt: '',
    },
    portfolio: [],
  },
  {
    id: 2,
    title: 'Банкротство юридических лиц',
    description: 'I am description',
    price: 90000.0,
    category: 'I am category',
    image: {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/02/Circle-icons-computer.svg',
      imageAlt: '',
    },
    portfolio: [],
  },
  {
    id: 3,
    title: 'Ликвидация ООО',
    description: 'I am description',
    price: 20000.0,
    category: 'I am category',
    image: {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/02/Circle-icons-computer.svg',
      imageAlt: '',
    },
    portfolio: [],
  },
]
