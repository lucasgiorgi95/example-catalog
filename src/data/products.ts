import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Yerba Mate Clásica 500 g',
    price: 3500,
    image: '/images/yerbamate500.png',
    category: 'yerba',
    size: ['500 g'],
    color: ['Clásica'],
    rating: 4.7,
    reviews: 210
  },
  {
    id: '2',
    name: 'Yerba Mate Suave 1 kg',
    price: 6200,
    image: '/images/yerba1kg.png',
    category: 'yerba',
    size: ['1 kg'],
    color: ['Suave'],
    rating: 4.6,
    reviews: 145
  },
  {
    id: '3',
    name: 'Mate de Calabaza con Virola',
    price: 8800,
    image: '/images/mateVirola.png',
    category: 'mates',
    size: ['Estándar'],
    color: ['Marrón'],
    rating: 4.8,
    reviews: 98
  },
  {
    id: '4',
    name: 'Mate de Acero Inoxidable',
    price: 7600,
    image: '/images/mate.png',
    category: 'mates',
    size: ['Estándar'],
    color: ['Acero', 'Negro'],
    rating: 4.5,
    reviews: 64
  },
  {
    id: '5',
    name: 'Bombilla de Acero con Filtro',
    price: 2900,
    image: '/images/bolbilla.png',
    category: 'bombillas',
    size: ['Estándar'],
    color: ['Acero'],
    rating: 4.4,
    reviews: 123
  },
  {
    id: '6',
    name: 'Bombilla de Alpaca Pico de Loro',
    price: 5400,
    image: '/images/bolbilla 2.png',
    category: 'bombillas',
    size: ['Estándar'],
    color: ['Plata'],
    rating: 4.6,
    reviews: 57
  },
  {
    id: '7',
    name: 'Termo Acero Inoxidable 1 L',
    price: 18900,
    image: '/images/termo.png',
    category: 'termos',
    size: ['1 L'],
    color: ['Acero', 'Negro'],
    rating: 4.7,
    reviews: 201
  },
  {
    id: '8',
    name: 'Termo con Pico Vertedor 750 ml',
    price: 15900,
    image: '/images/termo.png',
    category: 'termos',
    size: ['750 ml'],
    color: ['Negro'],
    rating: 4.5,
    reviews: 84
  },
  {
    id: '9',
    name: 'Yerbera/Latera con Pico Vertedor',
    price: 5200,
    image: '/images/yerbera.png',
    category: 'accesorios',
    size: ['Estándar'],
    color: ['Blanco', 'Negro'],
    rating: 4.3,
    reviews: 46
  },
  {
    id: '10',
    name: 'Kit Matero (Mate + Bombilla + Yerbera)',
    price: 23900,
    image: '/images/kit.png',
    category: 'accesorios',
    size: ['Estándar'],
    color: ['Negro'],
    rating: 4.8,
    reviews: 132
  }
];

export const categories = [
  'Todos',
  'yerba',
  'mates',
  'bombillas',
  'termos',
  'accesorios'
];