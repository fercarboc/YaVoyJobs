import React, { useEffect, useMemo, useState } from "react";
import {
  AdType,
  AdStatus,
  RealEstateOperation,
  RealEstateCategory,
  UserRole,
} from "../types";
import { ICONS } from "../constants";
import { AdCreateForm } from "./AdCreateForm";

/* =======================
   TYPES
======================= */

export type AdCard = {
  id: string;
  type: AdType;
  title: string;
  location: string;
  price: number;
  status: AdStatus;
  operation?: RealEstateOperation;
  realEstateCategory?: RealEstateCategory;
  surface?: number | null;
  leads?: number | null;
  imageUrl?: string | null;
};

interface RealEstateBusinessViewProps {
  hasInmoPlan: boolean;
  hasNegocioPlan: boolean;
  onGoToPlans: () => void;
  role?: UserRole;

  adCount?: number;
  adLimit?: number;
  forceTab?: "inmo" | "negocios";

  ads?: AdCard[];
  loadingAds?: boolean;
}

/* =======================
   COMPONENT
======================= */

export const RealEstateBusinessView: React.FC<RealEstateBusinessViewProps> = ({
  hasInmoPlan,
  hasNegocioPlan,
  onGoToPlans,
  role,
  forceTab,
  ads,
  loadingAds = false,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<"inmo" | "negocios">(
    forceTab ?? "inmo"
  );
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    if (forceTab) setActiveSubTab(forceTab);
  }, [forceTab]);

  /* =======================
     MOCK FALLBACK
  ======================= */

  const MOCK_ADS: AdCard[] = [
    {
      id: "mock-1",
      type: AdType.REAL_STATE,
      title: "Piso luminoso en Malasaña",
      location: "Madrid",
      price: 1200,
      status: AdStatus.AVAILABLE,
      operation: RealEstateOperation.RENT,
      realEstateCategory: RealEstateCategory.FLAT,
      surface: 65,
      leads: 12,
      imageUrl: "https://picsum.photos/400/300?random=1",
    },
    {
      id: "mock-2",
      type: AdType.BUSINESS,
      title: "Traspaso Bar Cafetería",
      location: "Barcelona",
      price: 45000,
      status: AdStatus.NEGOTIATING,
      surface: 40,
      leads: 4,
      imageUrl: "https://picsum.photos/400/300?random=2",
    },
  ];

  const sourceAds: AdCard[] = useMemo(() => {
    return Array.isArray(ads) ? ads : MOCK_ADS;
  }, [ads]);

  const filteredAds = useMemo(() => {
    return sourceAds.filter((ad) =>
      activeSubTab === "inmo"
        ? ad.type === AdType.REAL_STATE
        : ad.type === AdType.BUSINESS
    );
  }, [sourceAds, activeSubTab]);

  const isCurrentTabLocked =
    (activeSubTab === "inmo" && !hasInmoPlan) ||
    (activeSubTab === "negocios" && !hasNegocioPlan);

  /* =======================
     CREATE FORM
  ======================= */

  if (showCreate) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setShowCreate(false)}
          className="text-sm font-bold text-gray-400 hover:text-gray-600 flex items-center gap-2"
        >
          {ICONS.Chevron} Volver
        </button>

        <AdCreateForm
          initialType={
            activeSubTab === "inmo"
              ? AdType.REAL_STATE
              : AdType.BUSINESS
          }
          onSuccess={() => setShowCreate(false)}
        />
      </div>
    );
  }

  /* =======================
     RENDER
  ======================= */

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {activeSubTab === "inmo" ? "Inmobiliaria" : "Negocios"}
          </h2>
          <p className="text-gray-500">
            {activeSubTab === "inmo"
              ? "Gestiona anuncios de pisos, locales y habitaciones"
              : "Gestiona traspasos y ventas de negocios"}
          </p>
        </div>

        {!isCurrentTabLocked && role !== UserRole.WORKER && (
          <button
            onClick={() => setShowCreate(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 flex items-center gap-2"
          >
            {ICONS.Add} Publicar
          </button>
        )}
      </div>

      {/* TABS */}
      {!forceTab && (
        <div className="flex bg-gray-100 rounded-2xl p-1 max-w-md">
          <button
            onClick={() => setActiveSubTab("inmo")}
            className={`flex-1 py-3 rounded-xl text-sm font-bold ${
              activeSubTab === "inmo"
                ? "bg-white text-blue-600"
                : "text-gray-500"
            }`}
          >
            {ICONS.RealEstate} Inmobiliaria
          </button>
          <button
            onClick={() => setActiveSubTab("negocios")}
            className={`flex-1 py-3 rounded-xl text-sm font-bold ${
              activeSubTab === "negocios"
                ? "bg-white text-blue-600"
                : "text-gray-500"
            }`}
          >
            {ICONS.Business} Negocios
          </button>
        </div>
      )}

      {/* LOCKED */}
      {isCurrentTabLocked && (
        <div className="bg-white rounded-3xl p-10 text-center border">
          <div className="text-4xl mb-4">{ICONS.Lock}</div>
          <h3 className="text-xl font-bold mb-2">
            Plan requerido
          </h3>
          <p className="text-gray-500 mb-6">
            Activa el plan para acceder a este módulo.
          </p>
          <button
            onClick={onGoToPlans}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold"
          >
            {ICONS.Plans} Ver planes
          </button>
        </div>
      )}

      {/* LOADING */}
      {!isCurrentTabLocked && loadingAds && (
        <div className="bg-white rounded-3xl p-12 text-center border">
          <span className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
          <p className="mt-4 text-sm text-gray-500">Cargando anuncios…</p>
        </div>
      )}

      {/* EMPTY */}
      {!isCurrentTabLocked &&
        !loadingAds &&
        filteredAds.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border">
            <div className="text-3xl mb-2">{ICONS.RealEstate}</div>
            <h3 className="font-bold text-gray-900">
              No hay anuncios disponibles
            </h3>
          </div>
        )}

      {/* GRID */}
      {!isCurrentTabLocked &&
        !loadingAds &&
        filteredAds.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAds.map((ad) => (
              <div
                key={ad.id}
                className="bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-md transition"
              >
                <div className="h-40 bg-gray-200 relative">
                  <img
                    src={
                      ad.imageUrl ??
                      `https://picsum.photos/400/300?random=${ad.id}`
                    }
                    alt={ad.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold text-gray-900">
                      {ad.title}
                    </h3>
                    <span className="font-black">
                      {ad.price.toLocaleString()}€
                      {ad.operation ===
                        RealEstateOperation.RENT && "/mes"}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mb-4">
                    {ICONS.Location} {ad.location} •{" "}
                    {ad.surface ?? "—"}m²
                  </p>

                  <div className="flex justify-between text-xs font-bold text-blue-600">
                    <span>
                      {ICONS.Messages} {ad.leads ?? "—"} interesados
                    </span>
                    <button className="text-gray-400 hover:text-gray-900">
                      Ver más {ICONS.Chevron}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};
