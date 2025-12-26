
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserRole, CartItem, Product, Order, OrderStatus } from './types';

interface UserProfile {
  username: string;
  name: string;
  role: UserRole;
  taxId?: string;
  address?: string;
}

interface AppContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  isLoggedIn: boolean;
  currentUser: UserProfile | null;
  login: (username: string, role: UserRole, name: string) => void;
  logout: () => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, deliveryType: 'shipping' | 'pickup') => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus, reason?: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.GUEST);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const login = (username: string, role: UserRole, name: string) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentUser({ 
      username, 
      role, 
      name,
      taxId: role === UserRole.HORECA ? 'B-12345678' : undefined,
      address: 'Calle Mayor 1, Madrid'
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(UserRole.GUEST);
    setCurrentUser(null);
    setCart([]);
  };

  const addToCart = (product: Product, quantity: number, deliveryType: 'shipping' | 'pickup') => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity, deliveryType } : item);
      }
      return [...prev, { product, quantity, deliveryType }];
    });
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    setCart(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus, reason?: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId 
        ? { 
            ...order, 
            status, 
            returnReason: reason || order.returnReason,
            refundId: (status === 'REFUNDED') ? `ABO-${orderId.split('-')[1]}` : order.refundId 
          } 
        : order
    ));
  };

  return (
    <AppContext.Provider value={{ 
      userRole, setUserRole, isLoggedIn, currentUser, login, logout, 
      cart, addToCart, removeFromCart, updateCartQuantity, clearCart,
      orders, addOrder, updateOrderStatus
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
