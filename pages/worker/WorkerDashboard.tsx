import React from 'react';
import { AuthState } from '../../types';

type Props = {
  auth: AuthState;
};

const WorkerDashboard: React.FC<Props> = ({ auth }) => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">Panel Worker</h1>

      <p className="text-sm text-slate-600">
        Bienvenido, {auth.user?.full_name ?? auth.user?.email}
      </p>

      <div className="mt-4 text-sm text-slate-700">
        Aquí iremos metiendo módulos:
        <ul className="list-disc ml-5 mt-2">
          <li>Trabajos disponibles</li>
          <li>Candidaturas</li>
          <li>Chat con empresas / particulares</li>
          <li>Wallet / Pagos</li>
          <li>Perfil (selfie, domicilio, documentos)</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkerDashboard;
