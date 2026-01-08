// src/pages/chat/ChatListPage.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthState, UserRole } from "@/types";
import { listMyChats, getJobTitle } from "@/services/chat";
import { theme } from "@/theme";

type ChatListItem = {
  chatId: string;
  jobId: string;
  createdAt: string;
  jobTitle?: string;
};

type Props = { auth: AuthState };

export default function ChatListPage({ auth }: Props) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<ChatListItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      if (!auth.isAuthenticated || !auth.user?.id || !auth.user?.role) return;

      setLoading(true);
      setError(null);

      try {
        const userId = auth.user.auth_user_id ?? auth.user.id;
        const chats = await listMyChats({
          userId,
          role: auth.user.role,
        });

        // Convertimos VoyJobChat[] → items que renderiza la lista
        const mapped: ChatListItem[] = await Promise.all(
          chats.map(async (c) => {
            const title = await getJobTitle(c.job_id);
            return {
              chatId: c.id,
              jobId: c.job_id,
              createdAt: c.created_at,
              jobTitle: title,
            };
          })
        );

        setItems(mapped);
      } catch (e: any) {
        console.error(e);
        setError(e?.message ?? "Error al cargar chats");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [auth.isAuthenticated, auth.user?.id, auth.user?.role]);

  if (!auth.isAuthenticated) {
    return <div className="p-4 text-sm text-slate-600">Debes iniciar sesión.</div>;
  }

  const base =
    auth.user?.role === UserRole.HELPER
      ? "/worker"
      : auth.user?.role === UserRole.PARTICULAR || auth.user?.role === UserRole.COMPANY
      ? "/client"
      : "/";

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-bold text-slate-900">Mensajes</h1>
          <p className="text-xs text-slate-500">Chats asociados a trabajos aceptados.</p>
        </div>
      </div>

      <div className="mt-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
        {loading && <div className="p-4 text-sm text-slate-600">Cargando chats...</div>}
        {!loading && error && <div className="p-4 text-sm text-red-600">{error}</div>}

        {!loading && !error && items.length === 0 && (
          <div className="p-6 text-sm text-slate-600">
            No tienes chats todavía.
            <div className="text-xs text-slate-500 mt-2">
              El chat aparece cuando una candidatura se acepta (o cuando el sistema crea el chat).
            </div>
          </div>
        )}

        {!loading && !error && items.length > 0 && (
          <div className="divide-y divide-gray-100">
            {items.map((c) => (
              <Link
                key={c.chatId}
               to={`/chat/${c.jobId}`}

                className="block p-4 hover:bg-gray-50 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 text-sm truncate">
                      {c.jobTitle ?? `Trabajo ${c.jobId.slice(0, 6)}…`}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {c.createdAt ? new Date(c.createdAt).toLocaleString() : ""}
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 whitespace-nowrap">Abrir →</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="mt-2">
        <Link to={base} className="text-xs font-bold" style={{ color: theme.colors.primary }}>
          ← Volver al panel
        </Link>
      </div>
    </div>
  );
}
