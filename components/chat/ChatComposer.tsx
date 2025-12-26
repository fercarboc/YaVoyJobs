// src/components/chat/ChatComposer.tsx
import React, { useState } from "react";
import { theme } from "@/theme";

type Props = {
  disabled?: boolean;
  onSend: (text: string) => void;
};

export default function ChatComposer({ disabled, onSend }: Props) {
  const [text, setText] = useState("");

  const send = () => {
    const t = text.trim();
    if (!t) return;
    onSend(t);
    setText("");
  };

  return (
    <div className="p-3 border-t border-gray-200 bg-white">
      <div className="flex items-end gap-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
          rows={2}
          className="flex-1 resize-none border border-gray-300 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300"
          placeholder={disabled ? "Chat no disponible" : "Escribe un mensaje…"}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (!disabled) send();
            }
          }}
        />

        <button
          type="button"
          disabled={disabled || text.trim().length === 0}
          onClick={send}
          className="px-4 py-2 rounded-xl font-bold text-sm"
          style={{
            background: theme.colors.primary,
            color: theme.colors.surface,
            opacity: disabled || text.trim().length === 0 ? 0.6 : 1,
          }}
        >
          Enviar
        </button>
      </div>

      <div className="text-[11px] text-slate-500 mt-2">
        Enter = enviar · Shift+Enter = salto de línea
      </div>
    </div>
  );
}
