import React, { useEffect, useState } from "react";
import { getMyCompany, upsertMyCompany } from "../services/agencyApi";
import { CompanyProfile } from "../types/agency";

const AgencyProfilePage: React.FC = () => {
  const [form, setForm] = useState<CompanyProfile | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getMyCompany().then((data) => setForm(data || { owner_user_id: "", name: "" }));
  }, []);

  const onChange = (key: keyof CompanyProfile, value: any) => {
    setForm((f) => (f ? { ...f, [key]: value } : f));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;
    setSaving(true);
    try {
      await upsertMyCompany(form);
      alert("Perfil guardado");
    } finally {
      setSaving(false);
    }
  };

  if (!form) return <div className="p-4 text-sm text-gray-500">Cargando...</div>;

  const fields: Array<[keyof CompanyProfile, string]> = [
    ["name", "Nombre comercial"],
    ["cif", "CIF"],
    ["phone", "Teléfono"],
    ["email", "Email"],
    ["website", "Web"],
    ["address", "Domicilio"],
    ["city", "Localidad"],
    ["postal_code", "Código Postal"],
    ["province", "Provincia"],
    ["country", "País"],
    ["contact_person", "Persona de contacto"],
    ["contact_phone", "Tel. contacto"],
    ["contact_email", "Email contacto"],
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Perfil de inmobiliaria</h1>
        <p className="text-sm text-gray-600">Actualiza los datos de tu empresa.</p>
      </div>

      <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 grid md:grid-cols-2 gap-4">
        {fields.map(([key, label]) => (
          <label key={key} className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">{label}</span>
            <input
              value={(form as any)[key] || ""}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
            />
          </label>
        ))}

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold disabled:opacity-60"
          >
            {saving ? "Guardando..." : "Guardar perfil"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgencyProfilePage;
