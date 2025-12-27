import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { housingService } from "../services/housing.service";
import { HousingListing } from "../types/housing.types";
import ContactButton from "../components/ContactButton";

const IMG_MAIN_MOBILE = "h-[260px]";
const IMG_MAIN_DESKTOP = "h-[340px]";

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [listing, setListing] = useState<HousingListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = useMemo(() => listing?.images || [], [listing]);

  useEffect(() => {
    if (id) {
      housingService.getById(id).then((res) => {
        setListing(res);
        setActiveIndex(0);
        setLoading(false);
      });
    }
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight" && images.length) {
        setActiveIndex((idx) => (idx + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && images.length) {
        setActiveIndex((idx) => (idx - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, isLightboxOpen]);

  const goPrev = () => {
    if (!images.length) return;
    setActiveIndex((idx) => (idx - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (!images.length) return;
    setActiveIndex((idx) => (idx + 1) % images.length);
  };

  if (loading)
    return <div className="p-20 text-center animate-pulse text-gray-400 font-medium">Cargando detalles...</div>;

  if (!listing)
    return (
      <div className="p-20 text-center text-gray-600 font-bold">
        Inmueble no encontrado.{" "}
        <Link to="/alquiler" className="text-blue-600 underline">
          Volver
        </Link>
      </div>
    );

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between mb-3">
          <nav className="text-xs text-gray-400 flex items-center space-x-2">
            <Link to="/alquiler" className="hover:text-gray-600">
              Alquiler
            </Link>
            <span>/</span>
            <span>{listing.district}</span>
            <span>/</span>
            <span className="text-gray-900 font-bold">{listing.neighborhood}</span>
          </nav>
          <Link
            to="/alquiler"
            className="text-xs sm:text-sm inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-full transition"
          >
            ← Volver a la lista
          </Link>
        </div>

        {/* Title + Price */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h1 className="text-3xl font-extrabold text-gray-900">{listing.title}</h1>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-black text-blue-600">
              {listing.price}€
              <span className="text-sm font-normal text-gray-400">/mes</span>
            </span>
            <span className="text-gray-500 font-medium">
              {listing.district}, {listing.neighborhood}
            </span>
          </div>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {listing.furnished && (
            <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs font-bold">Amueblado</span>
          )}
          {listing.bills_included && (
            <span className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold">Gastos incluidos</span>
          )}
          <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs font-bold">
            Fianza: {listing.deposit}€
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs font-bold">
            Minimo: {listing.min_stay}
          </span>
        </div>

        {/* Main layout */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left content */}
          <div className="md:col-span-8 space-y-6">
            {/* Gallery */}
            <div className="space-y-3">
              <div
                className={`w-full ${IMG_MAIN_MOBILE} md:${IMG_MAIN_DESKTOP} overflow-hidden rounded-2xl border border-gray-200 bg-gray-50`}
              >
                {images[activeIndex] ? (
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="w-full h-full block focus:outline-none"
                  >
                    <img src={images[activeIndex]} alt={`Foto ${activeIndex + 1}`} className="w-full h-full object-cover" />
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">Sin fotos</div>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`relative flex-none w-24 h-20 rounded-xl overflow-hidden border ${
                        idx === activeIndex ? "border-blue-500 shadow" : "border-gray-200"
                      }`}
                    >
                      <img src={img} alt={`Mini ${idx + 1}`} className="w-full h-full object-cover" />
                      {idx === activeIndex && <span className="absolute inset-0 ring-2 ring-blue-500 rounded-xl" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <section className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
              <h2 className="text-xl font-bold mb-3">Descripcion</h2>
              <p className="text-gray-600 leading-relaxed">{listing.description}</p>
            </section>
          </div>

          {/* Right column */}
          <div className="md:col-span-4 space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">Detalles</h3>
              <div className="space-y-3 text-sm">
                <DetailRow label="Tipo" value={listing.type} />
                {listing.sqm && <DetailRow label="Metros" value={`${listing.sqm} m²`} />}
                <DetailRow label="Fianza" value={`${listing.deposit}€`} />
                <DetailRow label="Estancia minima" value={listing.min_stay} />
                <DetailRow label="Disponible desde" value={listing.available_from} />
                <DetailRow label="Publicado por" value={listing.publisher_type === "PARTICULAR" ? "Particular" : "Inmobiliaria"} />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">Contactar</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  {listing.publisher_name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{listing.publisher_name}</p>
                  <div className="flex items-center text-yellow-500 text-xs font-bold">
                    <span>★ {listing.publisher_rating.toFixed(1)}</span>
                    <span className="text-gray-400 ml-2 font-normal">Verificado</span>
                  </div>
                </div>
              </div>

              {listing.publisher_type === "AGENCY" && (
                <div className="bg-blue-50 text-blue-700 text-[10px] font-bold py-1 px-3 rounded uppercase tracking-wider mb-4 inline-block">
                  Inmobiliaria verificada
                </div>
              )}

              <ContactButton propertyId={listing.id} />

              <p className="text-[10px] text-gray-400 mt-4 text-center">
                Al contactar aceptas nuestros terminos y condiciones de uso y seguridad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setIsLightboxOpen(false)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
};

export default PropertyDetail;

/* ----------------------- Helpers ----------------------- */

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between text-sm">
      <span className="text-gray-500 font-semibold">{label}</span>
      <span className="text-gray-900 font-medium text-right ml-4">{value}</span>
    </div>
  );
}

type LightboxProps = {
  images: string[];
  activeIndex: number;
  onChange: (idx: number) => void;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function Lightbox({ images, activeIndex, onChange, onClose, onPrev, onNext }: LightboxProps) {
  if (!images.length) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-6xl bg-black/10 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow"
          aria-label="Siguiente"
        >
          ›
        </button>

        <div className="flex flex-col md:flex-row bg-black/60">
          <div className="flex-1 flex items-center justify-center p-4">
            <img src={images[activeIndex]} alt={`Foto ${activeIndex + 1}`} className="max-h-[70vh] w-full object-contain" />
          </div>

          <div className="md:w-60 border-t md:border-t-0 md:border-l border-white/10 bg-black/40">
            <div className="flex md:flex-col gap-2 p-3 overflow-auto max-h-[220px] md:max-h-[70vh]">
              {images.map((img, idx) => (
                <button
                  key={`lightbox-${idx}`}
                  onClick={() => onChange(idx)}
                  className={`relative overflow-hidden rounded-lg border ${
                    idx === activeIndex ? "border-blue-400 ring-2 ring-blue-400" : "border-white/20"
                  } w-24 h-16 md:w-full md:h-20 flex-none`}
                >
                  <img src={img} alt={`Mini ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
