
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicList from '../pages/PublicList';
import PropertyDetail from '../pages/PropertyDetail';
import LoginRequired from '../pages/LoginRequired';
import AgencyLayout from '../dashboard/AgencyLayout';
import AgencyDashboardHome from '../dashboard/AgencyDashboardHome';
import AdsManager from '../dashboard/AdsManager';
import AdForm from '../dashboard/AdForm';
import ContactsManager from '../dashboard/ContactsManager';
import AgencyProfile from '../dashboard/AgencyProfile';
import AgencyInvoices from '../dashboard/AgencyInvoices';
import AgencySettings from '../dashboard/AgencySettings';

const AlquilerRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicList />} />
      <Route path="/:id" element={<PropertyDetail />} />
      <Route path="/login-required" element={<LoginRequired />} />

      <Route path="/agencia" element={<AgencyLayout />}>
        <Route index element={<AgencyDashboardHome />} />
        <Route path="anuncios" element={<AdsManager />} />
        <Route path="anuncios/nuevo" element={<AdForm />} />
        <Route path="anuncios/:id/editar" element={<AdForm />} />
        <Route path="contactos" element={<ContactsManager />} />
        <Route path="perfil" element={<AgencyProfile />} />
        <Route path="facturas" element={<AgencyInvoices />} />
        <Route path="configuracion" element={<AgencySettings />} />
      </Route>
    </Routes>
  );
};

export default AlquilerRoutes;
