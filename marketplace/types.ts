
export enum UserRole {
  GUEST = 'GUEST',
  REGISTERED = 'REGISTERED',
  HORECA = 'HORECA',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN'
}

export type OrderStatus = 
  | 'PENDING' 
  | 'PREPARING' 
  | 'SHIPPED' 
  | 'READY_PICKUP' 
  | 'DELIVERED' 
  | 'RETURN_REQUESTED' 
  | 'RETURNED' 
  | 'RETURN_REJECTED'
  | 'REFUNDED';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
  neighborhood: string;
  commerce: string;
  stock: number;
  prices: {
    guest: number;
    registered: number;
    horeca: number;
  };
  offer?: {
    type: 'FIXED' | 'PERCENTAGE';
    value: number;
    endDate?: string;
  };
  deliveryOptions: {
    shipping: boolean;
    pickup: boolean;
    shippingCost: number;
    freeFrom?: number;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  deliveryType: 'shipping' | 'pickup';
}

export interface Order {
  id: string;
  date: string;
  customer: {
    name: string;
    email: string;
    role: UserRole;
  };
  items: CartItem[];
  total: number;
  status: OrderStatus;
  deliveryAddress?: string;
  returnReason?: string;
  refundId?: string;
}

export interface Neighborhood {
  id: string;
  name: string;
}
