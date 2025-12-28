import React, { useState, useEffect } from "react";
import { supabase } from "@/services/supabase";

interface Props {
  onApply: (filters: any) => void;
  onClear: () => void;
}

type District = { id: string; name: string };
type Neighborhood = { id: string; name: string; district_id: string };

const HousingFilters: React.FC<Props> = ({ onApply, onClear }) => {
  const [filters, setFilters] = useState({
    city: "MADRID",
    district: "",
    neighborhood: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    stay: "",
  });

  const [districts, setDistricts] = useState<District[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [loadingGeo, setLoadingGeo] = useState(false);

  useEffect(() => {
    const loadDistricts = async () => {
      const { data, error } = await supabase
        .from("VoyDistricts")
        .select("id,name")
        .eq("is_active", true)
        .eq("city", "MADRID")
        .order("name", { ascending: true });
      if (!error && data) setDistricts(data as District[]);
    };
    loadDistricts();
  }, []);

  useEffect(() => {
    const loadNeighborhoods = async () => {
      if (!filters.district) {
        setNeighborhoods([]);
        return;
      }
      const dist = districts.find((d) => d.name === filters.district);
      if (!dist) return;
      setLoadingGeo(true);
      const { data, error } = await supabase
        .from("VoyNeighborhoods")
        .select("id,name,district_id")
        .eq("district_id", dist.id)
        .eq("is_active", true)
        .order("name", { ascending: true });
      if (!error && data) setNeighborhoods(data as Neighborhood[]);
      setLoadingGeo(false);
    };
    loadNeighborhoods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.district]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "district" ? { neighborhood: "" } : {}),
    }));
  };

  const handleClear = () => {
    const cleared = { city: "MADRID", district: "", neighborhood: "", type: "", minPrice: "", maxPrice: "", stay: "" };
    setFilters(cleared);
    onClear();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Distrito</label>
          <select
            name="district"
            value={filters.district}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos</option>
            {districts.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Barrio</label>
          <select
            name="neighborhood"
            value={filters.neighborhood}
            onChange={handleChange}
            disabled={!filters.district || loadingGeo}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <option value="">{loadingGeo ? "Cargando..." : "Todos"}</option>
            {neighborhoods.map((n) => (
              <option key={n.id} value={n.name}>
                {n.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tipo</label>
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Cualquiera</option>
            <option value="Habitación">Habitación</option>
            <option value="Piso">Piso completo</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Min €</label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="0"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Max €</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="2000"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Estancia</label>
          <select
            name="stay"
            value={filters.stay}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Cualquiera</option>
            <option value="corta">Corta estancia</option>
            <option value="mensual">Mensual</option>
          </select>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onApply(filters)}
            className="flex-1 bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            Aplicar
          </button>
          <button
            onClick={handleClear}
            className="px-3 py-2 bg-gray-100 text-gray-600 font-bold rounded-lg hover:bg-gray-200 transition"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HousingFilters;
