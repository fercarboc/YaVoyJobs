import React, { useEffect, useState } from "react";
import { getMyCompany, upsertMyCompany } from "../services/agencyApi";
import { CompanyProfile } from "../types/agency";

const emptyProfile = (): CompanyProfile =>
  ({
    // NO pongas agency_user_id/owner aquí; lo debe poner upsertMyCompany
    brand_name: "",
  } as any);

const AgencyProfilePage: React.FC = () => {
  const [form, setForm] = useState<CompanyProfile>(emptyProfile());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMyCompany();
        setForm((data as any) || emptyProfile());
      } catch (e: any) {
        console.error("[AgencyProfilePage] load error:", e);
        setError(e?.message || "No se pudo cargar el perfil (posible RLS en VoyCompanies).");
        // IMPORTANTE: igual renderizamos el formulario para poder guardar
        setForm(emptyProfile());
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const onChange = (key: keyof CompanyProfile, value: any) => {
    setForm((f) => ({ ...(f as any), [key]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;

    setSaving(true);
    try {
      setError(null);

      if (!String((form as any).brand_name || "").trim()) {
        alert("El nombre comercial es obligatorio");
        return;
      }

      await upsertMyCompany(form);
      alert("Perfil guardado");
    } catch (e: any) {
      console.error("[AgencyProfilePage] save error:", e);
      setError(e?.message || "No se pudo guardar el perfil");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-4 text-sm text-gray-500">Cargando...</div>;

  const fields: Array<[keyof CompanyProfile, string]> = [
    ["brand_name", "Nombre comercial"],
    ["legal_name", "Razón social"],
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
    ["billing_iban", "IBAN (domiciliación)"],
    ["billing_holder", "Titular"],
    ["billing_tax_id", "DNI/CIF"],
    ["billing_bank", "Banco"],
    ["billing_address", "Dirección facturación"],
    ["billing_city", "Ciudad facturación"],
    ["billing_postal_code", "CP facturación"],
    ["billing_province", "Provincia facturación"],
    ["billing_country", "País facturación"],
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Perfil de inmobiliaria</h1>
        <p className="text-sm text-gray-600">Actualiza los datos de tu empresa.</p>
      </div>

      {error && (
        <div className="px-4 py-3 rounded-xl text-sm bg-red-50 text-red-700 border border-red-200">
          {error}
        </div>
      )}

      <form
        onSubmit={onSubmit}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 grid md:grid-cols-2 gap-4"
      >
        {fields.map(([key, label]) => (
          <label key={String(key)} className="space-y-1 block">
            <span className="text-sm font-semibold text-gray-700">{label}</span>
            <input
              value={(form as any)[key] || ""}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm"
              disabled={saving}
            />
          </label>
        ))}

        <label className="flex items-center gap-2 md:col-span-2">
          <input
            type="checkbox"
            checked={!!(form as any).billing_consent}
            onChange={(e) => onChange("billing_consent" as any, e.target.checked)}
            disabled={saving}
          />
          <span className="text-sm text-gray-700">Autorizo el cargo recurrente según el plan elegido.</span>
        </label>

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
