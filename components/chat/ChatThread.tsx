// src/components/chat/ChatThread.tsx
import React, { useEffect, useRef } from "react";

import type { VoyJobMessage } from "@/services/chat";
import { getChatByJobId } from "@/services/chat";


type Props = {
  myUserId: string;
  messages: VoyJobMessage[];
};

export default function ChatThread({ myUserId, messages }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="h-[60vh] md:h-[65vh] overflow-y-auto p-4 bg-gray-50">
      {messages.length === 0 && (
        <div className="text-sm text-slate-500 text-center mt-10">
          No hay mensajes todavía. Escribe el primero 👇
        </div>
      )}

      <div className="space-y-2">
        {messages.map((m) => {
          const mine = m.sender_user_id === myUserId;
          return (
            <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
              <div
                className={[
                  "max-w-[85%] md:max-w-[70%] rounded-2xl px-3 py-2 text-sm shadow-sm border",
                  mine
                    ? "bg-white border-blue-200"
                    : "bg-white border-gray-200",
                ].join(" ")}
              >
                <div className="whitespace-pre-wrap break-words text-slate-900">{m.message}</div>
                <div className="text-[10px] text-slate-400 mt-1 text-right">
                  {m.created_at ? new Date(m.created_at).toLocaleString() : ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div ref={bottomRef} />
    </div>
  );
}
