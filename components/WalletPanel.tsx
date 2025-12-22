import React from 'react';

// Simulación de incentivos y cobros
const incentivosPendientes = [
  { id: 1, motivo: 'Incentivo por alta en la plataforma', importe: 10, estado: 'Pendiente', fecha: null }
];
const cobros = [
  // { id: 1, motivo: 'Incentivo por alta en la plataforma', importe: 10, fecha: '2025-12-22' }
];

export const WalletPanel: React.FC = () => (
  <div className="max-w-xl mx-auto space-y-6 p-4">
    <h2 className="text-xl font-bold mb-4">Wallet</h2>
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
      <h3 className="font-semibold mb-2 text-blue-800">Incentivos pendientes</h3>
      {incentivosPendientes.length === 0 ? (
        <div className="text-slate-500">No tienes incentivos pendientes.</div>
      ) : (
        <ul className="space-y-2">
          {incentivosPendientes.map(inc => (
            <li key={inc.id} className="flex justify-between items-center">
              <span>{inc.motivo}</span>
              <span className="font-bold text-blue-700">{inc.importe} €</span>
              <span className="text-xs text-blue-500 ml-2">{inc.estado}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <h3 className="font-semibold mb-2 text-green-800">Cobros de incentivos</h3>
      {cobros.length === 0 ? (
        <div className="text-slate-500">No tienes cobros registrados.</div>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th>Motivo</th>
              <th>Importe</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {cobros.map(cobro => (
              <tr key={cobro.id}>
                <td>{cobro.motivo}</td>
                <td>{cobro.importe} €</td>
                <td>{cobro.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);
