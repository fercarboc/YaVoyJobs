import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  title: string;
  subtitle: string;
  basePath: string;
};

const ChatPlaceholderPage: React.FC<Props> = ({ title, subtitle, basePath }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const jobId = params.get("jobId");
  const withUserId = params.get("withUserId");

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="text-sm text-slate-500">{subtitle}</p>
        <div className="text-sm text-slate-600 space-y-1 border border-slate-100 rounded-2xl p-4 bg-slate-50">
          <p>
            <span className="font-semibold">Job ID:</span> {jobId ?? "No proporcionado"}
          </p>
          <p>
            <span className="font-semibold">Usuario:</span> {withUserId ?? "No proporcionado"}
          </p>
        </div>
        <p className="text-xs text-slate-500">
          Esta pantalla es un placeholder hasta que el chat completo esté listo. Revisa la solicitud y vuelve cuando el estado sea aceptado.
        </p>
        <Link
          to={basePath}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-900 bg-slate-100 rounded-xl hover:bg-slate-200"
        >
          Volver
        </Link>
      </div>
    </div>
  );
};

export default ChatPlaceholderPage;
