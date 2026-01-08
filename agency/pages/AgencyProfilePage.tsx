import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VerificationUploader from "@/components/VerificationUploader";
import LogoUploader from "@/components/LogoUploader";
import { getMyCompany, upsertMyCompany } from "../services/agencyApi";
import { CompanyProfile } from "../types/agency";
import MyJobsList from "@/components/jobs/MyJobsList";

const emptyProfile = (): CompanyProfile =>
  ({
    // NO pongas agency_user_id/owner aquí; lo debe poner upsertMyCompany
    brand_name: "",
  } as any);

const AgencyProfilePage: React.FC = () => {
  const navigate = useNavigate();
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

  const fields: Array<{
    key: keyof CompanyProfile;
    label: string;
    uppercase?: boolean;
    numeric?: boolean;
    type?: string;
    placeholder?: string;
    span?: "wide";
  }> = [
    { key: "brand_name", label: "Nombre comercial", uppercase: true },
    { key: "legal_name", label: "Razón social", uppercase: true },
    { key: "cif", label: "CIF", uppercase: true },
    { key: "phone", label: "Teléfono", numeric: true, placeholder: "Solo números" },
    { key: "email", label: "Email", type: "email" },
    { key: "website", label: "Web", type: "url" },
    { key: "address", label: "Domicilio", uppercase: true, span: "wide" },
    { key: "city", label: "Localidad", uppercase: true },
    { key: "postal_code", label: "Código Postal", numeric: true },
    { key: "province", label: "Provincia", uppercase: true },
    { key: "country", label: "País", uppercase: true },
    { key: "contact_person", label: "Persona de contacto", uppercase: true },
    { key: "contact_phone", label: "Tel. contacto", numeric: true },
    { key: "contact_email", label: "Email contacto", type: "email" },
    { key: "billing_iban", label: "IBAN (domiciliación)", uppercase: true },
    { key: "billing_holder", label: "Titular", uppercase: true },
    { key: "billing_tax_id", label: "DNI/CIF", uppercase: true },
    { key: "billing_bank", label: "Banco", uppercase: true },
    { key: "billing_address", label: "Dirección facturación", uppercase: true, span: "wide" },
    { key: "billing_city", label: "Ciudad facturación", uppercase: true },
    { key: "billing_postal_code", label: "CP facturación", numeric: true },
    { key: "billing_province", label: "Provincia facturación", uppercase: true },
    { key: "billing_country", label: "País facturación", uppercase: true },
  ];

  const normalize = (val: string, cfg: { uppercase?: boolean; numeric?: boolean }) => {
    let v = val;
    if (cfg.numeric) v = v.replace(/\D+/g, "");
    if (cfg.uppercase) v = v.toUpperCase();
    return v;
  };

  return (
    <div className="space-y-4">

      {error && (
        <div className="px-4 py-3 rounded-xl text-sm bg-red-50 text-red-700 border border-red-200">
          {error}
        </div>
      )}

      <form
        onSubmit={onSubmit}
        className="bg-slate-900 border border-slate-800 text-white rounded-2xl shadow-xl shadow-slate-900/40 p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3"
      >
        {fields.map((cfg) => (
          <label
            key={String(cfg.key)}
            className={`space-y-1 block col-span-1 ${cfg.span === "wide" ? "xl:col-span-2" : ""}`}
          >
            <span className="text-[13px] font-semibold text-blue-100">{cfg.label}</span>
            <input
              value={(form as any)[cfg.key] || ""}
              onChange={(e) => onChange(cfg.key, normalize(e.target.value, cfg))}
              className={`w-full border border-slate-700 bg-slate-800 text-[13px] text-white rounded-xl px-3 py-2 h-10 placeholder:text-slate-300 focus:border-blue-400 focus:ring-0 ${
                cfg.uppercase ? "uppercase tracking-[0.01em]" : ""
              }`}
              inputMode={cfg.numeric ? "numeric" : undefined}
              type={cfg.type || "text"}
              placeholder={cfg.placeholder}
              maxLength={
                cfg.key === "postal_code" || cfg.key === "billing_postal_code" ? 6 : undefined
              }
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

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
        <VerificationUploader defaultVerificationType="agency" showTypeSelector={false} />
      </div>
      <LogoUploader />
      <div className="space-y-3">
        <MyJobsList mode="oneoff" showCreateButton onCreate={() => navigate("/jobs/oneoff/new")} />
      </div>
    </div>
  );
};

export default AgencyProfilePage;
