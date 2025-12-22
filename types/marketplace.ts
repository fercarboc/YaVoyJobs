// Enums y tipos para Marketplace YaVoy

export type VoyRole = 'PARTICULAR' | 'COMPANY' | 'HELPER' | 'ADMIN' | 'PROVIDER';
export type BuyerType = 'PARTICULAR' | 'PRO' | 'HORECA';
export type SellerStaffRole = 'OWNER' | 'MANAGER' | 'SALES' | 'SUPPORT';

export interface BuyerProfile {
  id: string;
  user_id: string;
  buyer_type: BuyerType;
  is_verified: boolean;
  business_name?: string;
  tax_id?: string;
  address?: string;
  created_at?: string;
}

export interface SellerProfile {
  id: string;
  owner_user_id: string;
  store_name: string;
  store_slug: string;
  sector_principal: string;
  tax_id: string;
  created_at?: string;
}

export interface SellerStaff {
  id: string;
  seller_id: string;
  user_id: string;
  role: SellerStaffRole;
  created_at?: string;
}

export interface Product {
  id: string;
  seller_id: string;
  name: string;
  description: string;
  category_id: string;
  created_at?: string;
  images?: ProductImage[];
  prices?: ProductPrice[];
  inventory?: Inventory;
}

export interface ProductImage {
  id: string;
  product_id: string;
  url: string;
  created_at?: string;
}

export interface ProductPrice {
  id: string;
  product_id: string;
  channel: string; // e.g. 'PVP', 'HORECA', etc.
  price: number;
  currency: string;
  created_at?: string;
}

export interface Inventory {
  id: string;
  product_id: string;
  stock: number;
  updated_at?: string;
}

export interface Order {
  id: string;
  buyer_id: string;
  seller_id: string;
  status: string;
  total: number;
  created_at?: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  created_at?: string;
}
