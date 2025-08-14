import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Básica',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'camisetas',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['Negro', 'Blanco', 'Gris'],
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Jeans Clásicos',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'pantalones',
    size: ['28', '30', '32', '34', '36'],
    color: ['Azul', 'Negro'],
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'Chaqueta Denim',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'chaquetas',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Azul', 'Negro', 'Blanco'],
    rating: 4.3,
    reviews: 67
  },
  {
    id: '4',
    name: 'Vestido Casual',
    price: 55.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'vestidos',
    size: ['XS', 'S', 'M', 'L'],
    color: ['Rosa', 'Azul', 'Verde'],
    rating: 4.6,
    reviews: 94
  },
  {
    id: '5',
    name: 'Sudadera con Capucha',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'sudaderas',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['Gris', 'Negro', 'Azul marino'],
    rating: 4.4,
    reviews: 156
  },
  {
    id: '6',
    name: 'Falda Plisada',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'faldas',
    size: ['XS', 'S', 'M', 'L'],
    color: ['Negro', 'Beige', 'Rojo'],
    rating: 4.2,
    reviews: 73
  }
];

export const categories = [
  'Todos',
  'camisetas',
  'pantalones',
  'chaquetas',
  'vestidos',
  'sudaderas',
  'faldas'
];