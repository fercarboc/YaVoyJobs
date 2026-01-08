import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useClientArea } from '../../components/client/ClientDashboardShell';
import MyJobsList from '@/components/jobs/MyJobsList';

const ClientAdsPage: React.FC = () => {
  const { activeArea } = useClientArea();
  const navigate = useNavigate();

  if (activeArea === 'HOUSING') {
    return null;
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Mis Anuncios</h1>
        <p className="text-sm text-slate-600 mt-1">
          Aquí ves los anuncios puntuales (ONE_OFF) que has publicado y su estado actual.
        </p>
      </div>
      <MyJobsList mode="oneoff" showCreateButton onCreate={() => navigate('/jobs/oneoff/new')} />
    </div>
  );
};

export default ClientAdsPage;
