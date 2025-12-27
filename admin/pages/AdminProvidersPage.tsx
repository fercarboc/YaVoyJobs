import React, { useEffect, useMemo, useState } from "react";
import {
  ProviderProfile,
  ProviderType,
  createProviderInvite,
  findUserByEmail,
  listProviders,
  upsertProviderProfile,
} from "@/services/adminApi";

type FormState = {
  email: string;
  display_name: string;
  phone?: string;
  contact_person?: string;
  address?: string;
  city?: string;
  district?: string;
  neighborhood?: string;
  postal_code?: string;
  province?: string;
  country?: string;
  website?: string;
};

const providerTabs: { id: ProviderType; label: string }[] = [
  { id: "HOUSING_AGENCY", label: "Agencias" },
  { id: "MARKET_VENDOR", label: "Vendors" },
];

const initialForm: FormState = {
  email: "",
  display_name: "",
  phone: "",
  contact_person: "",
  address: "",
  city: "",
  district: "",
  neighborhood: "",
  postal_code: "",
  province: "",
  country: "",
  website: "",
};

const AdminProvidersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProviderType>("HOUSING_AGENCY");
  const [providers, setProviders] = useState<ProviderProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [saving, setSaving] = useState(false);
  const [inviteLink, setInviteLink] = useState<string | null>(null);

  const filtered = useMemo(() => providers.filter((p) => p.provider_type === activeTab), [providers, activeTab]);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await listProviders();
      setProviders(res);
    } catch (err: any) {
      setError(err?.message || "No se pudieron cargar los proveedores");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const openForm = (type: ProviderType) => {
    setInviteLink(null);
    setActiveTab(type);
    setForm({ ...initialForm });
    setFormOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setInviteLink(null);
    try {
      const existingUser = await findUserByEmail(form.email);
      if (existingUser) {
        await upsertProviderProfile({
          provider_user_id: existingUser.id,
          provider_type: activeTab,
          display_name: form.display_name,
          phone: form.phone,
          email: form.email,
          address: form.address,
          city: form.city,
          district: form.district,
          neighborhood: form.neighborhood,
          postal_code: form.postal_code,
          province: form.province,
          country: form.country,
          contact_person: form.contact_person,
          website: form.website,
        });
        alert("Proveedor creado/actualizado correctamente");
      } else {
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        const invite = await createProviderInvite(form.email, activeTab, expires.toISOString());
        const link = `/#/register?invite=${invite.token}`;
        setInviteLink(link);
        alert("Usuario no existe. Invitación generada.");
      }
      setFormOpen(false);
      load();
    } catch (err: any) {
      alert(err?.message || "No se pudo guardar el proveedor");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Proveedores</h1>
          <p className="text-sm text-gray-600">Agencias inmobiliarias y vendors del marketplace.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => openForm("HOUSING_AGENCY")}
            className="px-3 py-2 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700"
          >
            Alta Agencia
          </button>
          <button
            onClick={() => openForm("MARKET_VENDOR")}
            className="px-3 py-2 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Alta Vendor
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        {providerTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 rounded-full text-sm font-semibold ${
              activeTab === tab.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {error && <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">{error}</div>}

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando proveedores...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3">Nombre</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Teléfono</th>
                <th className="text-left px-4 py-3">Ciudad</th>
                <th className="text-left px-4 py-3">Creado</th>
                <th className="text-left px-4 py-3">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{p.display_name || "—"}</td>
                  <td className="px-4 py-3 text-gray-700">{p.email || p.user?.email || "—"}</td>
                  <td className="px-4 py-3 text-gray-700">{p.phone || "—"}</td>
                  <td className="px-4 py-3 text-gray-700">{p.city || "—"}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {p.created_at ? new Date(p.created_at).toLocaleDateString() : p.user?.created_at ? new Date(p.user.created_at).toLocaleDateString() : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        p.user?.is_active ?? true ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {p.user?.is_active ?? true ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {activeTab === "HOUSING_AGENCY" ? "Alta Agencia" : "Alta Vendor"}
                </h3>
                <p className="text-sm text-gray-600">
                  Si el email existe se convierte a PROVIDER; si no, generamos invitación.
                </p>
              </div>
              <button onClick={() => setFormOpen(false)} className="text-sm text-gray-500 hover:text-gray-700">
                Cerrar
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Email*</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Nombre comercial</span>
                  <input
                    value={form.display_name}
                    onChange={(e) => setForm({ ...form, display_name: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Teléfono</span>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Persona de contacto</span>
                  <input
                    value={form.contact_person}
                    onChange={(e) => setForm({ ...form, contact_person: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Dirección</span>
                  <input
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Ciudad</span>
                  <input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Distrito</span>
                  <input
                    value={form.district}
                    onChange={(e) => setForm({ ...form, district: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Barrio</span>
                  <input
                    value={form.neighborhood}
                    onChange={(e) => setForm({ ...form, neighborhood: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Código postal</span>
                  <input
                    value={form.postal_code}
                    onChange={(e) => setForm({ ...form, postal_code: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Provincia</span>
                  <input
                    value={form.province}
                    onChange={(e) => setForm({ ...form, province: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
                <label className="text-sm text-gray-700 space-y-1">
                  <span>País</span>
                  <input
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
              </div>

              <div>
                <label className="text-sm text-gray-700 space-y-1">
                  <span>Website</span>
                  <input
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button type="button" onClick={() => setFormOpen(false)} className="px-3 py-2 rounded-xl border text-sm">
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {saving ? "Guardando..." : "Guardar"}
                </button>
              </div>
            </form>

            {inviteLink && (
              <div className="mt-4 p-3 border border-blue-200 bg-blue-50 text-sm rounded-xl">
                Invitación creada. Link de prueba: <span className="font-semibold break-all">{inviteLink}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProvidersPage;
