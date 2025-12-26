// src/components/chat/ChatHeader.tsx
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

export default function ChatHeader({ title }: Props) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <h1 className="text-lg font-bold text-slate-900 truncate">{title}</h1>
        <div className="text-xs text-slate-500">Chat del trabajo</div>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/chat" className="text-xs font-bold text-blue-700 hover:underline whitespace-nowrap">
          ← Mensajes
        </Link>
      </div>
    </div>
  );
}
