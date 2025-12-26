import React, { useMemo, useState } from "react";
import { DashboardUserRole } from "../dashboardTypes";
import { Search, Shield, Bell, MapPin, CreditCard, FileText, Users, Clock3, Upload } from "lucide-react";

type MenuKey =
  | "perfil"
  | "seguridad"
  | "notificaciones"
  | "barrios"
  | "pagos"
  | "fiscales"
  | "documentacion"
  | "equipo";

const YA_VOY_BLUE = "#0056b3";

const barriosMock = ["Chamberí", "Usera", "Arganzuela", "Carabanchel", "Tetuán", "Salamanca"];
const cardsBase = [
  { key: "perfil", label: "Perfil y cuenta" },
  { key: "seguridad", label: "Seguridad" },
  { key: "notificaciones", label: "Notificaciones" },
  { key: "barrios", label: "Barrios y disponibilidad" },
  { key: "pagos", label: "Métodos de pago" },
];

export const SettingsPanel: React.FC<{ role: DashboardUserRole }> = ({ role }) => {
  const [active, setActive] = useState<MenuKey>("perfil");
  const [saved, setSaved] = useState(false);

  const menu = useMemo(() => {
    const items = [...cardsBase];
    if ([DashboardUserRole.EMPRESA, DashboardUserRole.PROVEEDOR].includes(role)) {
      items.push({ key: "fiscales", label: "Datos fiscales" });
      items.push({ key: "equipo", label: "Equipo y permisos" });
    }
    if (role === DashboardUserRole.TRABAJADOR) {
      items.push({ key: "documentacion", label: "Documentación" });
    }
    return items as { key: MenuKey; label: string }[];
  }, [role]);

  const subtitle =
    role === DashboardUserRole.TRABAJADOR
      ? "Configura tu perfil, seguridad y cobros como profesional."
      : role === DashboardUserRole.EMPRESA || role === DashboardUserRole.PROVEEDOR
      ? "Gestiona cuentas, facturación, equipo y métodos de pago."
      : "Configura tus datos, notificaciones y pagos.";

  const onSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const renderContent = () => {
    switch (active) {
      case "perfil":
        return <PerfilCard />;
      case "seguridad":
        return <SeguridadCard />;
      case "notificaciones":
        return <NotificacionesCard />;
      case "barrios":
        return <BarriosCard role={role} />;
      case "pagos":
        return <PagosCard role={role} />;
      case "fiscales":
        return <FiscalesCard />;
      case "documentacion":
        return <DocumentacionCard />;
      case "equipo":
        return <EquipoCard />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Configuración</h1>
        <p className="text-sm text-slate-600 mt-2">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Menu */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Buscar sección"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 text-sm border border-gray-200 focus:outline-none"
              />
            </div>
            <div className="space-y-2 mt-2">
              {menu.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-semibold border transition ${
                    active === item.key
                      ? "bg-blue-50 text-[#0056b3] border-blue-100"
                      : "bg-white text-slate-800 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 relative">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm min-h-[520px]">
            {renderContent()}
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onSave}
              className="px-5 py-2.5 rounded-xl font-bold text-sm text-white"
              style={{ background: YA_VOY_BLUE }}
            >
              Guardar cambios
            </button>
          </div>
          {saved && (
            <div className="fixed bottom-6 right-6 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
              Cambios guardados (mock)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* Sub-sections */

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string; subtitle?: string }> = ({
  icon,
  title,
  subtitle,
}) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056b3] flex items-center justify-center">{icon}</div>
    <div>
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
    </div>
  </div>
);

const PerfilCard: React.FC = () => (
  <div className="space-y-6">
    <SectionTitle icon={<Users size={18} />} title="Perfil y cuenta" subtitle="Datos básicos de contacto." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="Nombre completo" placeholder="Tu nombre" />
      <Field label="Email" placeholder="email@ejemplo.com" />
      <Field label="Teléfono" placeholder="+34 600 000 000" />
      <Field label="Ciudad / Barrio" placeholder="Madrid - Usera" />
    </div>
  </div>
);

const SeguridadCard: React.FC = () => (
  <div className="space-y-6">
    <SectionTitle icon={<Shield size={18} />} title="Seguridad" subtitle="Protege tu cuenta." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Field label="Contraseña actual" placeholder="********" type="password" />
      <Field label="Nueva contraseña" placeholder="********" type="password" />
      <Field label="Confirmar" placeholder="********" type="password" />
    </div>
    <div className="flex items-center gap-3">
      <input type="checkbox" className="h-4 w-4" defaultChecked />
      <span className="text-sm text-slate-700">Activar 2FA (mock)</span>
    </div>
    <div className="mt-2">
      <p className="text-sm font-semibold text-slate-900 mb-2">Sesiones activas</p>
      <div className="space-y-2">
        {["iPhone 12", "Chrome Windows"].map((device) => (
          <div key={device} className="flex items-center justify-between border border-gray-200 rounded-xl px-3 py-2 text-sm">
            <span>{device}</span>
            <button className="text-[#0056b3] font-bold text-xs">Cerrar sesión</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const NotificacionesCard: React.FC = () => (
  <div className="space-y-6">
    <SectionTitle icon={<Bell size={18} />} title="Notificaciones" subtitle="Controla cómo te avisamos." />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <Toggle label="Push" defaultChecked />
      <Toggle label="Email" defaultChecked />
      <Toggle label="SMS" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Toggle label="Nuevos trabajos" defaultChecked />
      <Toggle label="Mensajes" defaultChecked />
      <Toggle label="Pagos" defaultChecked />
      <Toggle label="Incidencias" defaultChecked />
    </div>
  </div>
);

const BarriosCard: React.FC<{ role: DashboardUserRole }> = ({ role }) => (
  <div className="space-y-6">
    <SectionTitle icon={<MapPin size={18} />} title="Barrios y disponibilidad" subtitle="Define tu zona y horario." />
    <div className="space-y-3">
      <p className="text-sm font-semibold text-slate-900">Barrios</p>
      <div className="flex flex-wrap gap-2">
        {barriosMock.map((b) => (
          <label key={b} className="px-3 py-1.5 text-sm border border-gray-200 rounded-full cursor-pointer hover:border-blue-200">
            <input type="checkbox" className="mr-2" defaultChecked={b === "Usera" || b === "Arganzuela"} /> {b}
          </label>
        ))}
      </div>
    </div>
    {role === DashboardUserRole.TRABAJADOR ? (
      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-900">Disponibilidad semanal</p>
        {["Lunes", "Miércoles", "Sábado"].map((d) => (
          <div key={d} className="flex items-center gap-3 text-sm">
            <input type="checkbox" defaultChecked className="h-4 w-4" />
            <span className="w-28">{d}</span>
            <input className="border border-gray-200 rounded-lg px-2 py-1 text-sm w-28" placeholder="09:00 - 18:00" />
          </div>
        ))}
      </div>
    ) : (
      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-900">Horario de atención</p>
        <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="L-V 09:00 - 19:00" />
      </div>
    )}
  </div>
);

const PagosCard: React.FC<{ role: DashboardUserRole }> = ({ role }) => {
  const isHelper = role === DashboardUserRole.TRABAJADOR;
  const isBuyer = role === DashboardUserRole.EMPRESA || role === DashboardUserRole.PARTICULAR;

  return (
    <div className="space-y-6">
      <SectionTitle icon={<CreditCard size={18} />} title="Métodos de pago" subtitle="Gestiona cobros y pagos." />
      {isHelper && (
        <div className="border border-gray-200 rounded-xl p-4">
          <p className="text-sm font-semibold text-slate-900 mb-1">Cuenta bancaria / Stripe Connect</p>
          <p className="text-sm text-slate-600 mb-2">ES12 •••• •••• 1234 — Verificado</p>
          <button className="text-xs font-bold text-[#0056b3]">Actualizar</button>
        </div>
      )}

      {isBuyer && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {["Visa •••• 4242", "Mastercard •••• 8855"].map((card) => (
            <div key={card} className="border border-gray-200 rounded-xl p-4 flex items-center justify-between text-sm">
              <span>{card}</span>
              <button className="text-xs font-bold text-red-500">Eliminar</button>
            </div>
          ))}
          <button className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-sm font-bold text-slate-700 hover:border-blue-200">
            + Añadir tarjeta
          </button>
        </div>
      )}
    </div>
  );
};

const FiscalesCard: React.FC = () => (
  <div className="space-y-6">
    <SectionTitle icon={<FileText size={18} />} title="Datos fiscales" subtitle="Información para facturación." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="NIF / CIF" placeholder="B12345678" />
      <Field label="Razón social" placeholder="Empresa S.L." />
      <Field label="Dirección fiscal" placeholder="Calle, número, ciudad" />
      <Field label="IVA" placeholder="21%" />
      <div>
        <label className="text-xs font-semibold text-slate-600">Retenciones</label>
        <select className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
          <option>Sin retención</option>
          <option>IRPF 7%</option>
          <option>IRPF 15%</option>
        </select>
      </div>
    </div>
  </div>
);

const DocumentacionCard: React.FC = () => (
  <div className="space-y-6">
    <SectionTitle icon={<Upload size={18} />} title="Documentación" subtitle="Verificación de identidad." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <UploadField label="DNI / NIE (anverso)" />
      <UploadField label="DNI / NIE (reverso)" />
      <UploadField label="Certificado profesional (opcional)" />
    </div>
    <div className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2 inline-flex items-center gap-2">
      <CheckBullet /> Verificación en curso (mock)
    </div>
  </div>
);

const EquipoCard: React.FC = () => (
  <div className="space-y-6">
    <SectionTitle icon={<Users size={18} />} title="Equipo y permisos" subtitle="Gestiona accesos de tu empresa." />
    <div className="flex flex-col gap-2">
      {[
        { email: "operaciones@yavoy.com", rol: "Manager", estado: "Activo" },
        { email: "soporte@yavoy.com", rol: "Soporte", estado: "Pendiente" },
      ].map((m) => (
        <div key={m.email} className="border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between text-sm">
          <div>
            <p className="font-semibold text-slate-900">{m.email}</p>
            <p className="text-xs text-slate-500">{m.rol} • {m.estado}</p>
          </div>
          <button className="text-xs font-bold text-[#0056b3]">Gestionar</button>
        </div>
      ))}
      <button className="border-2 border-dashed border-gray-200 rounded-xl p-3 text-sm font-bold text-slate-700 hover:border-blue-200">
        + Invitar miembro
      </button>
    </div>
  </div>
);

/* Small UI helpers */
const Field: React.FC<{ label: string; placeholder?: string; type?: string }> = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className="text-xs font-semibold text-slate-600">{label}</label>
    <input
      type={type}
      className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
      placeholder={placeholder}
    />
  </div>
);

const Toggle: React.FC<{ label: string; defaultChecked?: boolean }> = ({ label, defaultChecked }) => (
  <label className="flex items-center gap-2 text-sm text-slate-700">
    <input type="checkbox" defaultChecked={defaultChecked} className="h-4 w-4" />
    {label}
  </label>
);

const UploadField: React.FC<{ label: string }> = ({ label }) => (
  <div className="border border-gray-200 rounded-xl p-3">
    <p className="text-sm font-semibold text-slate-900 mb-2">{label}</p>
    <div className="flex items-center gap-2 text-sm">
      <input type="file" className="text-sm" />
      <span className="text-xs text-slate-500">Mock upload</span>
    </div>
  </div>
);

const CheckBullet = () => <div className="w-2 h-2 rounded-full bg-emerald-500" />;

export default SettingsPanel;
