
import { Product, Neighborhood, UserRole } from '../types';

export const NEIGHBORHOODS: Neighborhood[] = [
  { id: '1', name: 'Malasaña' },
  { id: '2', name: 'Chamberí' },
  { id: '3', name: 'Salamanca' },
  { id: '4', name: 'Lavapiés' },
  { id: '5', name: 'Retiro' },
];

export const CATEGORIES = ['Alimentación', 'Limpieza', 'Bebidas', 'Textil', 'Otros'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Aceite de Oliva Virgen Extra 5L',
    category: 'Alimentación',
    description: 'Aceite de oliva de primera prensa en frío, ideal para hostelería y consumo familiar de alta calidad.',
    features: ['5 Litros', 'Acidez < 0.4%', 'Origen Jaén'],
    images: ['https://picsum.photos/seed/oil1/600/600', 'https://picsum.photos/seed/oil2/600/600'],
    neighborhood: 'Salamanca',
    commerce: 'Aceites del Barrio',
    stock: 45,
    prices: {
      guest: 45.99,
      registered: 41.50,
      horeca: 38.00
    },
    offer: {
      type: 'PERCENTAGE',
      value: 10,
      endDate: '2024-12-31'
    },
    deliveryOptions: {
      shipping: true,
      pickup: true,
      shippingCost: 5.00,
      freeFrom: 100
    }
  },
  {
    id: 'p2',
    name: 'Caja Refrescos de Cola 24x33cl',
    category: 'Bebidas',
    description: 'Pack ahorro de refrescos de cola clásicos. Perfectos para reponer stock HORECA.',
    features: ['24 Latas', '33cl cada una', 'Retornable'],
    images: ['https://picsum.photos/seed/cola/600/600'],
    neighborhood: 'Chamberí',
    commerce: 'Distribuciones J. Pérez',
    stock: 120,
    prices: {
      guest: 18.50,
      registered: 17.20,
      horeca: 14.50
    },
    deliveryOptions: {
      shipping: true,
      pickup: false,
      shippingCost: 8.00,
      freeFrom: 200
    }
  },
  {
    id: 'p3',
    name: 'Harina de Fuerza Profesional 25kg',
    category: 'Alimentación',
    description: 'Harina de gran fuerza ideal para panaderías y pizzas artesanales.',
    features: ['25kg', 'W350', 'Sin aditivos'],
    images: ['https://picsum.photos/seed/flour/600/600'],
    neighborhood: 'Lavapiés',
    commerce: 'La Panificadora',
    stock: 15,
    prices: {
      guest: 32.00,
      registered: 29.00,
      horeca: 24.50
    },
    deliveryOptions: {
      shipping: true,
      pickup: true,
      shippingCost: 15.00
    }
  },
  {
    id: 'p4',
    name: 'Kit de Limpieza Industrial 10L',
    category: 'Limpieza',
    description: 'Desinfectante concentrado multisuperficies para entornos profesionales.',
    features: ['10 Litros', 'Altamente concentrado', 'Aroma limón'],
    images: ['https://picsum.photos/seed/clean/600/600'],
    neighborhood: 'Retiro',
    commerce: 'Químicos El Retiro',
    stock: 30,
    prices: {
      guest: 25.00,
      registered: 22.00,
      horeca: 18.00
    },
    deliveryOptions: {
      shipping: true,
      pickup: true,
      shippingCost: 4.50,
      freeFrom: 50
    }
  }
];
