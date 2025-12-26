import React, { useMemo, useRef, useState } from "react";
import { Plus, Minus, RotateCcw, MapPin, Users } from "lucide-react";
import { seededRandom } from "../utils/seededRandom";

type MockMapProps = {
  district: string;
  neighborhood: string;
  selectedJob?: { id: string; title: string; district: string; neighborhood: string };
  workersCount: number;
  seedKey: string;
};

type Pin = {
  id: string;
  x: number;
  y: number;
  status: "Disponible" | "Ocupado" | "Top";
};

const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

export const DistrictAvailabilityMockMap: React.FC<MockMapProps> = ({
  district,
  neighborhood,
  selectedJob,
  workersCount,
  seedKey,
}) => {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ startX: number; startY: number; ox: number; oy: number; dragging: boolean }>({
    startX: 0,
    startY: 0,
    ox: 0,
    oy: 0,
    dragging: false,
  });

  const pins = useMemo(() => {
    const rand = seededRandom(seedKey);
    const count = clamp(Math.round(workersCount || 8), 4, 40);
    return Array.from({ length: count }).map((_, idx) => {
      const x = 10 + rand() * 80;
      const y = 10 + rand() * 80;
      const r = rand();
      const status = r > 0.8 ? "Top" : r > 0.5 ? "Disponible" : "Ocupado";
      return { id: `${seedKey}-${idx}`, x, y, status };
    });
  }, [seedKey, workersCount]);

  const jobZone = useMemo(() => {
    if (!selectedJob) return null;
    const rand = seededRandom(`zone-${seedKey}`);
    return {
      x: 30 + rand() * 40,
      y: 30 + rand() * 40,
      r: 18 + rand() * 10,
    };
  }, [selectedJob, seedKey]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((z) => clamp(z + delta, 1, 2.5));
  };

  const onMouseDown = (e: React.MouseEvent) => {
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      ox: offset.x,
      oy: offset.y,
      dragging: true,
    };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    setOffset({
      x: clamp(dragRef.current.ox + dx, -120, 120),
      y: clamp(dragRef.current.oy + dy, -120, 120),
    });
  };
  const onMouseUp = () => {
    dragRef.current.dragging = false;
  };

  const resetView = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div>
          <p className="text-sm font-bold text-slate-900">Disponibilidad estimada</p>
          <p className="text-xs text-slate-500">
            Distrito: {district || "N/A"} / Barrio: {neighborhood || "N/A"} · Workers: {workersCount}
          </p>
          {selectedJob && (
            <p className="text-xs text-[#0056b3] font-semibold mt-1">Anuncio seleccionado: {selectedJob.title}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setZoom((z) => clamp(z + 0.2, 1, 2.5))} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <Plus size={14} />
          </button>
          <button onClick={() => setZoom((z) => clamp(z - 0.2, 1, 2.5))} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <Minus size={14} />
          </button>
          <button onClick={resetView} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{ minHeight: 520, backgroundImage: "linear-gradient(90deg,#f5f6fb 1px, transparent 1px), linear-gradient(0deg,#f5f6fb 1px, transparent 1px)", backgroundSize: "40px 40px", cursor: dragRef.current.dragging ? "grabbing" : "grab" }}
        onWheel={handleWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            transition: dragRef.current.dragging ? "none" : "transform 120ms ease-out",
          }}
        >
          {jobZone && (
            <div
              className="absolute rounded-full border-2 border-blue-200 bg-blue-50/40 flex items-center justify-center text-[11px] font-bold text-[#0056b3]"
              style={{
                width: `${jobZone.r * 3}px`,
                height: `${jobZone.r * 3}px`,
                left: `${jobZone.x}%`,
                top: `${jobZone.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              Zona del anuncio
            </div>
          )}
          {pins.map((p) => {
            const color =
              p.status === "Top" ? "bg-emerald-500" : p.status === "Disponible" ? "bg-blue-500" : "bg-gray-400";
            return (
              <div
                key={p.id}
                className="absolute w-3 h-3 rounded-full shadow-sm"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: "translate(-50%, -50%)",
                  backgroundColor: undefined,
                }}
              >
                <div
                  className={`${color} w-3 h-3 rounded-full border border-white shadow`}
                  title={`Trabajador #${p.id.slice(-3)} - ${p.status}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DistrictAvailabilityMockMap;
