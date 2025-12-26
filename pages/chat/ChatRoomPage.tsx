// src/pages/chat/ChatRoomPage.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthState } from "@/types";
import {
  getChatByJobId,
  getJobTitle,
  listMessages,
  sendMessage,
  subscribeToChatMessages,
  VoyMessage,
} from "@/services/chat";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatThread from "@/components/chat/ChatThread";
import ChatComposer from "@/components/chat/ChatComposer";

type Props = { auth: AuthState };

export default function ChatRoomPage({ auth }: Props) {
  const { jobId } = useParams();
  const userId = auth.user?.id ?? "";

  const [loading, setLoading] = useState(true);
  const [chatId, setChatId] = useState<string | null>(null);
  const [jobTitle, setJobTitle] = useState<string>("Chat");
  const [messages, setMessages] = useState<VoyMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const canSend = useMemo(() => Boolean(chatId && userId), [chatId, userId]);

  useEffect(() => {
    const run = async () => {
      if (!jobId) return;
      setLoading(true);
      setError(null);

      try {
        const title = await getJobTitle(jobId);
        setJobTitle(title);

        const chat = await getChatByJobId(jobId);
        if (!chat) {
          setChatId(null);
          setMessages([]);
          return;
        }

        setChatId(chat.id);

        const msgs = await listMessages(chat.id);
        setMessages(msgs);
      } catch (e: any) {
        console.error(e);
        setError(e?.message ?? "Error cargando el chat");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [jobId]);

  // Realtime
  useEffect(() => {
    if (!chatId) return;

    const unsub = subscribeToChatMessages({
      chatId,
      onInsert: (m) => {
        setMessages((prev) => {
          if (prev.some((x) => x.id === m.id)) return prev;
          return [...prev, m];
        });
      },
    });

    return unsub;
  }, [chatId]);

  const onSend = async (text: string) => {
    if (!chatId || !userId) return;
    const trimmed = text.trim();
    if (!trimmed) return;

    try {
      await sendMessage({
        chatId,
        senderUserId: userId,
        message: trimmed, // ✅ en tu servicio se llama "message"
      });
    } catch (e: any) {
      console.error(e);
      alert("No se pudo enviar el mensaje: " + (e?.message ?? "desconocido"));
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <ChatHeader title={jobTitle} />

      <div className="mt-3 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {loading && <div className="p-4 text-sm text-slate-600">Cargando chat...</div>}

        {!loading && error && <div className="p-4 text-sm text-red-600">{error}</div>}

        {!loading && !error && !chatId && (
          <div className="p-6">
            <div className="text-sm font-semibold text-slate-900">Chat no disponible</div>
            <div className="text-xs text-slate-600 mt-2">
              Este trabajo no tiene chat aún. Normalmente el chat se habilita cuando la candidatura está{" "}
              <b>ACCEPTED</b>.
            </div>

            <div className="mt-4 text-xs">
              <Link to="/worker/chat" className="font-bold text-blue-700 hover:underline">
                ← Volver a mensajes
              </Link>
            </div>
          </div>
        )}

        {!loading && !error && chatId && (
          <>
            <ChatThread myUserId={userId} messages={messages} />
            <ChatComposer disabled={!canSend} onSend={onSend} />
          </>
        )}
      </div>
    </div>
  );
}
