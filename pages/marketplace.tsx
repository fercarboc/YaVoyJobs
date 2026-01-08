import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import MarketplaceHome from '../marketplace/pages/MarketplaceHome';
import MarketplaceSearch from '../marketplace/pages/MarketplaceSearch';
import ProductDetails from '../marketplace/pages/ProductDetails';
import Cart from '../marketplace/pages/Cart';
import Checkout from '../marketplace/pages/Checkout';
import OrderSuccess from '../marketplace/pages/OrderSuccess';
import MyOrders from '../marketplace/pages/MyOrders';
import VendorDashboard from '../marketplace/vendor/VendorDashboard';
import InfoMarketplace from './informacion/infomarketplace';
import ProtectedRoute from '../components/routing/ProtectedRoute';
import type { AuthState } from '../types';
import { UserRole } from '../types';

type Props = {
  auth: AuthState;
};

const MarketplaceRoutes: React.FC<Props> = ({ auth }) => {
  const buyerId = auth.user?.id;
  const vendorId = auth.user?.company_id || auth.user?.id;

  const element = useRoutes([
    { path: '/', element: <MarketplaceHome /> },
    { path: 'search', element: <MarketplaceSearch /> },
    { path: 'product/:id', element: <ProductDetails /> },
    { path: 'cart', element: <Cart /> },
    { path: 'checkout', element: <Checkout auth={auth} /> },
    { path: 'success', element: <OrderSuccess /> },
    {
      path: 'orders',
      element: (
        <ProtectedRoute auth={auth} roles={[UserRole.PARTICULAR, UserRole.COMPANY]}>
          <MyOrders buyerId={buyerId || ''} />
        </ProtectedRoute>
      ),
    },
    {
      path: 'vendor',
      element: (
        <ProtectedRoute auth={auth} roles={[UserRole.COMPANY]}>
          <VendorDashboard vendorId={vendorId} />
        </ProtectedRoute>
      ),
    },
    { path: 'info', element: <InfoMarketplace /> },
    { path: '*', element: <Navigate to="/marketplace" replace /> },
  ]);

  return element;
};

export default MarketplaceRoutes;
