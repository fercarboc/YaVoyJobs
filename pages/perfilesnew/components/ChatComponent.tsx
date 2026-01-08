
import React, { useState, useEffect, useRef } from 'react';
import { ICONS } from '../constants';

interface Message {
  id: string;
  sender: 'me' | 'them';
  text: string;
  time: string;
}

export const ChatComponent: React.FC<{ jobTitle: string, otherName: string }> = ({ jobTitle, otherName }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'them', text: 'Hola! He visto tu anuncio para el montaje de estanterías.', time: '10:30' },
    { id: '2', sender: 'them', text: '¿Sigues necesitando a alguien para mañana?', time: '10:31' },
    { id: '3', sender: 'me', text: '¡Hola! Sí, el anuncio sigue activo.', time: '10:35' },
  ]);
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, {
      id: Date.now().toString(),
      sender: 'me',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setInputText('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] md:h-[700px] bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white/50 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
            {otherName.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 leading-none mb-1">{otherName}</h4>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter truncate max-w-[150px]">
              {jobTitle}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">{ICONS.Chevron}</button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl shadow-sm text-sm ${
              m.sender === 'me' 
              ? 'bg-blue-600 text-white rounded-tr-none' 
              : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
            }`}>
              <p>{m.text}</p>
              <p className={`text-[10px] mt-1 text-right ${m.sender === 'me' ? 'text-blue-100' : 'text-gray-400'}`}>
                {m.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-100 focus-within:border-blue-200 transition-all">
          <input 
            type="text" 
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-transparent px-3 py-2 outline-none text-sm"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
          >
            {ICONS.Check}
          </button>
        </div>
      </div>
    </div>
  );
};
