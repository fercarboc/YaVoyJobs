import React from 'react';
import { UserAvatar } from './common/Avatar';

// Mensajes simulados para pruebas
const mensajes = [
  {
    id: 1,
    user: { full_name: 'Trabajador Demo', email: 'trabajador@yavoy.com', selfie_photo_url: '' },
    texto: '¡Hola! ¿Este trabajo sigue disponible?',
    fecha: '2025-12-21 16:30'
  },
  {
    id: 2,
    user: { full_name: 'Particular Demo', email: 'particular@yavoy.com', selfie_photo_url: '' },
    texto: 'Sí, ¿te interesa?',
    fecha: '2025-12-21 16:31'
  }
];

export const ChatPanel: React.FC = () => (
  <div className="flex flex-col h-full max-h-[500px] bg-white rounded-xl border p-4 gap-3">
    <div className="flex-1 overflow-y-auto space-y-4">
      {mensajes.map(msg => (
        <div key={msg.id} className="flex items-start gap-3">
          <UserAvatar user={msg.user} size={40} />
          <div>
            <div className="font-semibold text-sm">{msg.user.full_name}</div>
            <div className="bg-slate-100 rounded-lg px-3 py-2 text-sm max-w-xs">{msg.texto}</div>
            <div className="text-xs text-slate-400 mt-1">{msg.fecha}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="pt-2 border-t flex gap-2">
      <input className="input flex-1" placeholder="Escribe un mensaje..." disabled />
      <button className="btn btn-primary" disabled>Enviar</button>
    </div>
  </div>
);
