
export type MonetizationMode = 'commission' | 'fixed_fee' | 'both';
export type ShippingMethod = 'shipping' | 'pickup' | 'both';
export type OrderStatus = 'pending' | 'preparing' | 'shipped' | 'delivered' | 'cancelled';
export type IncidentStatus = 'open' | 'in_progress' | 'resolved' | 'closed';

export interface MarketVendor {
  id: string;
  company_id: string;
  business_name: string;
  commission_pct: number;
  fixed_monthly_fee: number;
  monetization_mode: MonetizationMode;
  subscription_status: 'active' | 'past_due' | 'canceled';
  balance: number;
  created_at: string;
}

export interface Vendor {
  id: string;
  user_id: string;
  business_name: string;
  commission_model: MonetizationMode;
  commission_pct: number;
  fixed_fee: number;
  status: 'active' | 'inactive';
}

export interface Order {
  id: string;
  total: number;
  status: OrderStatus;
  created_at: string;
  customer_name?: string;
  customer_email?: string;
}

export interface SubOrder {
  id: string;
  order_id: string;
  vendor_id: string;
  subtotal: number;
  status: OrderStatus;
  created_at: string;
  items?: OrderItem[];
  order?: Order;
}

export interface OrderItem {
  id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
}

export interface VendorPayment {
  id: string;
  vendor_id: string;
  amount: number;
  concept: 'subscription' | 'commission_payout' | 'adjustment';
  status: 'completed' | 'pending' | 'failed';
  date: string;
}

export interface MarketIncident {
  id: string;
  vendor_id: string;
  order_id?: string;
  title: string;
  description: string;
  status: IncidentStatus;
  severity: 'low' | 'medium' | 'high';
  created_at: string;
}

export interface Product {
  id: string;
  vendor_id: string;
  category_id?: string;
  category: string;
  name: string;
  description: string;
  price: number;
  offer_price?: number;
  stock: number;
  images: string[];
  shipping_methods?: ShippingMethod[];
  shipping_method: ShippingMethod;
  is_promoted: boolean;
  status: 'published' | 'hidden' | 'moderation';
  vendor?: {
    id: string;
    company: { brand_name: string };
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}
