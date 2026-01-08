import React, { useEffect, useMemo, useState } from "react";
import { AdType, UserRole } from "../types";
import { ICONS } from "../constants";
import { AdCreateForm } from "./AdCreateForm";

type TabKey = "inmo" | "negocios";

interface Props {
  hasInmoPlan: boolean;
  hasNegocioPlan: boolean;
  onGoToPlans: () => void;
  role?: UserRole;
  forceTab?: TabKey;
}

export const RealEstateBusinessPublisherView: React.FC<Props> = ({
  hasInmoPlan,
  hasNegocioPlan,
  onGoToPlans,
  role,
  forceTab,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<TabKey>(forceTab ?? "inmo");
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    if (forceTab) setActiveSubTab(forceTab);
  }, [forceTab]);

  const hasAccess = useMemo(() => {
    return activeSubTab === "inmo" ? hasInmoPlan : hasNegocioPlan;
  }, [activeSubTab, hasInmoPlan, hasNegocioPlan]);

  const canPublish = useMemo(() => {
    // Si en tu negocio el WORKER no puede publicar jamás, cambia esto a: return role !== UserRole.WORKER;
    return true;
  }, [role]);

  const title = activeSubTab === "inmo" ? "Publicar anuncio inmobiliario" : "Publicar traspaso / negocio";
  const subtitle =
    activeSubTab === "inmo"
      ? "Crea tu anuncio de piso, local o habitación para que aparezca en la sección pública de Alquileres."
      : "Crea tu anuncio de traspaso o venta de negocio para que aparezca en la sección pública de Negocios.";

  const initialType = activeSubTab === "inmo" ? AdType.REAL_STATE : AdType.BUSINESS;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-500 max-w-3xl">{subtitle}</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border bg-white p-4">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              {ICONS.Check} Operación
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Indica si <b>alquilas</b>, <b>vendes</b> o <b>traspasas</b>. Esto define cómo se verá en público.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-4">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              {ICONS.Check} Visibilidad
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Tu anuncio se mostrará en la zona pública (<b>Alquileres</b> / <b>Negocios</b>) cuando lo publiques.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-4">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              {ICONS.Check} Imágenes
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Sube fotos reales para mejorar resultados. Podrás reordenarlas y eliminarlas.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      {!forceTab && (
        <div className="flex bg-slate-100 rounded-2xl p-1 max-w-md">
          <button
            onClick={() => {
              setActiveSubTab("inmo");
              setShowCreate(false);
            }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition ${
              activeSubTab === "inmo" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"
            }`}
          >
            {ICONS.RealEstate} Inmobiliaria
          </button>

          <button
            onClick={() => {
              setActiveSubTab("negocios");
              setShowCreate(false);
            }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition ${
              activeSubTab === "negocios" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"
            }`}
          >
            {ICONS.Business} Negocios
          </button>
        </div>
      )}

      {/* Plan gate */}
      {!hasAccess ? (
        <div className="rounded-3xl border bg-white p-10 text-center shadow-sm">
          <div className="mx-auto w-20 h-20 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
            <div className="scale-150">{ICONS.Lock}</div>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-3">
            Necesitas un plan para publicar en {activeSubTab === "inmo" ? "Inmobiliaria" : "Negocios"}
          </h3>

          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            Contrata el plan para poder crear anuncios, subir imágenes y publicarlos en la sección pública.
          </p>

          <button
            onClick={onGoToPlans}
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 inline-flex items-center gap-2"
          >
            {ICONS.Plans} Contratar plan
          </button>
        </div>
      ) : !canPublish ? (
        <div className="rounded-3xl border bg-white p-10 text-center shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-2">Tu rol no permite publicar anuncios</h3>
          <p className="text-slate-500">Este módulo solo está disponible para perfiles que publican en la parte pública.</p>
        </div>
      ) : showCreate ? (
        <div className="space-y-4">
          <button
            onClick={() => setShowCreate(false)}
            className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-700 transition"
          >
            {ICONS.Chevron} Volver
          </button>

          {/* Aquí se abre el formulario */}
          <AdCreateForm
            initialType={initialType}
            onSuccess={() => setShowCreate(false)}
          />
        </div>
      ) : (
        <div className="rounded-3xl border bg-white p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-slate-900">
              Ya puedes publicar en {activeSubTab === "inmo" ? "Inmobiliaria" : "Negocios"}
            </h3>
            <p className="text-slate-500 mt-1">
              Crea tu anuncio, sube imágenes y publícalo para que aparezca en la sección pública.
            </p>
          </div>

          <button
            onClick={() => setShowCreate(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 inline-flex items-center gap-2"
          >
            {ICONS.Add} Crear anuncio
          </button>
        </div>
      )}
    </div>
  );
};
