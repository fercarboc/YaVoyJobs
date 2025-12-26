// src/pages/worker/WorkerChatPage.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthState } from "@/types";
import { theme } from "@/theme";
import { Button } from "@/components/common/Button";
import { listJobMessages, sendJobMessage, VoyJobMessage } from "@/services/chat";
import { supabase } from "@/services/supabase";

type Props = {
  auth: AuthState;
};

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function WorkerChatPage({ auth }: Props) {
  const qs = useQuery();
  const chatId = qs.get("chatId") || "";
  const myUserId = auth.user?.id || "";

  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<VoyJobMessage[]>([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  useEffect(() => {
    const load = async () => {
      if (!chatId) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const data = await listJobMessages(chatId);
        setMessages(data);
        scrollToBottom();
      } catch (e) {
        console.error("Error loading messages", e);
      } finally {
        setLoading(false);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  // Realtime: escucha inserts en VoyJobMessages del chat actual
  useEffect(() => {
    if (!chatId) return;

    const channel = supabase
      .channel(`voyjobmessages:${chatId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "VoyJobMessages",
          filter: `chat_id=eq.${chatId}`,
        },
        (payload) => {
          const row = payload.new as VoyJobMessage;
          setMessages((prev) => {
            // evita duplicados si ya llegó por refresh
            if (prev.some((m) => m.id === row.id)) return prev;
            return [...prev, row];
          });
          scrollToBottom();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  const onSend = async () => {
    const msg = text.trim();
    if (!msg || !chatId || !myUserId) return;

    setSending(true);
    try {
      const created = await sendJobMessage({
        chatId,
        senderUserId: myUserId,
        message: msg, // ✅ message
      });

      // optimista (por si realtime tarda)
      setMessages((prev) => (prev.some((m) => m.id === created.id) ? prev : [...prev, created]));
      setText("");
      scrollToBottom();
    } catch (e: any) {
      console.error(e);
      alert("No se pudo enviar el mensaje: " + (e?.message ?? "desconocido"));
    } finally {
      setSending(false);
    }
  };

  if (!chatId) {
    return (
      <div className="p-4 text-sm text-slate-600">
        Falta <b>chatId</b> en la URL. Ejemplo:
        <div className="mt-2 p-2 rounded bg-slate-50 border text-xs">
          /#/worker/chat?chatId=UUID_DEL_CHAT
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="p-4 text-sm text-slate-600">Cargando chat…</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-lg font-bold text-slate-900">Chat</h1>
      <p className="text-xs text-slate-500 mt-1">chatId: {chatId}</p>

      <div className="mt-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="h-[60vh] overflow-y-auto p-4 space-y-3">
          {messages.map((m) => {
            const mine = m.sender_user_id === myUserId;
            return (
              <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm border ${
                    mine ? "bg-blue-50 border-blue-100" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="text-slate-900 whitespace-pre-wrap">{m.message}</div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {new Date(m.created_at).toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-gray-200 p-3 flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
            placeholder="Escribe un mensaje…"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-xl text-sm"
          />
          <button
            onClick={onSend}
            disabled={sending || text.trim().length === 0}
            className="px-4 py-2 rounded-xl font-bold text-sm"
            style={{
              background: theme.colors.primary,
              color: theme.colors.surface,
              opacity: sending || text.trim().length === 0 ? 0.6 : 1,
            }}
          >
            {sending ? "Enviando…" : "Enviar"}
          </button>
        </div>
      </div>

      <div className="mt-3">
        <Button onClick={() => window.history.back()}>Volver</Button>
      </div>
    </div>
  );
}
