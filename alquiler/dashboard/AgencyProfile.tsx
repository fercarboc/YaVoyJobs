import React, { useState } from "react";
import { getAgencyProfile, updateAgencyProfile } from "../services/agency.service";
import { AgencyProfile as AgencyProfileType } from "../types/agency.types";

const AgencyProfile: React.FC = () => {
  const [form, setForm] = useState<AgencyProfileType>(() => getAgencyProfile());

  const onChange = (key: keyof AgencyProfileType, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAgencyProfile(form);
    alert("Perfil guardado");
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Perfil de inmobiliaria</h2>
        <p className="text-sm text-gray-500">Actualiza la información visible y de facturación.</p>
      </div>
      <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid md:grid-cols-2 gap-4">
        {[
          ["name", "Nombre inmobiliaria"],
          ["cif", "CIF"],
          ["phone", "Teléfono"],
          ["email", "Email"],
          ["contactPerson", "Persona de contacto"],
          ["address", "Domicilio"],
          ["city", "Localidad"],
          ["postalCode", "Código postal"],
          ["province", "Provincia"],
          ["country", "País"],
        ].map(([key, label]) => (
          <label key={key} className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">{label}</span>
            <input
              value={(form as any)[key] || ""}
              onChange={(e) => onChange(key as keyof AgencyProfileType, e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              required={key === "name" || key === "phone" || key === "email"}
            />
          </label>
        ))}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold"
          >
            Guardar perfil
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgencyProfile;
