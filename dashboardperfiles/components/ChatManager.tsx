
import React, { useState } from 'react';
import { Send, Search, Archive, AlertCircle, MessageCircle, Lock } from 'lucide-react';
import { ChatSession, DashboardUserRole } from '../dashboardTypes';

const INITIAL_CHATS: ChatSession[] = [
  {
    id: 'chat-1',
    participantName: 'Inmobiliaria Norte',
    participantRole: DashboardUserRole.EMPRESA,
    relatedEntityTitle: 'Reparación Fontanería',
    entityType: 'trabajo',
    status: 'active',
    lastMessage: '¿A qué hora podrías pasarte mañana?',
    avatar: 'https://picsum.photos/seed/company/100/100',
    messages: [
      { id: 'm1', senderId: 'user-1', senderName: 'Yo', text: 'Hola, he visto el anuncio y me interesa.', timestamp: '10:00' },
      { id: 'm2', senderId: 'other-1', senderName: 'Inmobiliaria Norte', text: 'Hola Carlos. Perfecto. ¿A qué hora podrías pasarte mañana?', timestamp: '10:05' },
    ]
  },
  {
    id: 'chat-2',
    participantName: 'Proveedor Aceites SL',
    participantRole: DashboardUserRole.PROVEEDOR,
    relatedEntityTitle: 'Pack Aceite Oliva 5L',
    entityType: 'producto',
    status: 'active',
    lastMessage: 'Sí, tenemos stock disponible para entrega inmediata.',
    avatar: 'https://picsum.photos/seed/oil/100/100',
    messages: [
      { id: 'm3', senderId: 'user-1', senderName: 'Yo', text: '¿Tenéis stock del pack de 5L?', timestamp: ' Ayer' },
      { id: 'm4', senderId: 'other-2', senderName: 'Proveedor Aceites SL', text: 'Sí, tenemos stock disponible para entrega inmediata.', timestamp: 'Ayer' },
    ]
  },
  {
    id: 'chat-3',
    participantName: 'Marta García',
    participantRole: DashboardUserRole.TRABAJADOR,
    relatedEntityTitle: 'Montaje de muebles',
    entityType: 'trabajo',
    status: 'archived',
    lastMessage: 'Gracias por el servicio, todo perfecto.',
    avatar: 'https://picsum.photos/seed/marta/100/100',
    messages: [
      { id: 'm5', senderId: 'other-3', senderName: 'Marta García', text: 'Gracias por el servicio, todo perfecto.', timestamp: '20 Oct' },
    ]
  }
];

export const ChatManager: React.FC<{ currentRole: DashboardUserRole }> = ({ currentRole }) => {
  const [chats] = useState<ChatSession[]>(INITIAL_CHATS);
  const [selectedChat, setSelectedChat] = useState<ChatSession | null>(INITIAL_CHATS[0]);
  const [messageText, setMessageText] = useState('');

  const isArchived = selectedChat?.status === 'archived';

  return (
    <div className="flex bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm min-h-[75vh]">
      {/* Sidebar de Chats */}
      <div className="w-full md:w-80 border-r border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Mensajes</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar conversación..." 
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
        <div className="overflow-y-auto flex-1 no-scrollbar">
          {chats.map(chat => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 flex gap-3 items-start hover:bg-gray-50 transition-colors border-b border-gray-50 ${selectedChat?.id === chat.id ? 'bg-blue-50/50' : ''}`}
            >
              <div className="relative">
                <img src={chat.avatar} className="w-12 h-12 rounded-full object-cover border border-gray-200" alt="" />
                {chat.status === 'archived' && (
                  <div className="absolute -bottom-1 -right-1 bg-gray-500 text-white rounded-full p-0.5 border-2 border-white">
                    <Archive size={10} />
                  </div>
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="font-bold text-sm text-gray-900 truncate">{chat.participantName}</h4>
                  <span className="text-[10px] text-gray-400 uppercase font-bold">{chat.status === 'archived' ? 'Archivado' : 'Activo'}</span>
                </div>
                <p className="text-xs font-bold text-[#0056b3] truncate mb-1">{chat.relatedEntityTitle}</p>
                <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Ventana de Chat */}
      <div className="hidden md:flex flex-1 flex-col bg-gray-50/30">
        {selectedChat ? (
          <>
            {/* Header del Chat */}
            <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={selectedChat.avatar} className="w-10 h-10 rounded-full border border-gray-200" alt="" />
                <div>
                  <h3 className="font-bold text-gray-900 leading-none">{selectedChat.participantName}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Sobre: <span className="font-bold text-[#0056b3]">{selectedChat.relatedEntityTitle}</span>
                  </p>
                </div>
              </div>
              {isArchived && (
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg text-gray-600 text-xs font-bold">
                  <Lock size={14} />
                  Chat Archivado
                </div>
              )}
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              {selectedChat.messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.senderId === 'user-1' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] rounded-2xl p-3 shadow-sm ${
                    msg.senderId === 'user-1' 
                      ? 'bg-[#0056b3] text-white rounded-tr-none' 
                      : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-[10px] mt-1 text-right ${msg.senderId === 'user-1' ? 'text-blue-100' : 'text-gray-400'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              {isArchived && (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl border border-amber-100 max-w-sm">
                    <AlertCircle className="mx-auto mb-2" size={24} />
                    <p className="text-xs font-bold uppercase tracking-wide mb-1">Conversación Finalizada</p>
                    <p className="text-sm">Este chat ha sido archivado porque el trabajo se ha completado. Si tienes algún problema, abre una incidencia.</p>
                    <button className="mt-4 text-xs font-black bg-amber-600 text-white px-4 py-2 rounded-xl uppercase hover:bg-amber-700 transition-colors">
                      Marcar Incidencia
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Input de Mensaje */}
            {!isArchived && (
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="relative flex items-center gap-3">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 bg-gray-50 border-none rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                  <button className="w-11 h-11 bg-[#0056b3] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100 hover:scale-105 active:scale-95 transition-all">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-300">
              <MessageCircle size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Tus Conversaciones</h3>
            <p className="text-gray-500 max-w-xs">Selecciona un chat para ver los detalles del trabajo o producto.</p>
          </div>
        )}
      </div>
    </div>
  );
};
