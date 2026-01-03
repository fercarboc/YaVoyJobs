import React from "react";
import { useNavigate } from "react-router-dom";

const Seguro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#111418] text-white font-display overflow-x-hidden min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">

        {/* Header */}
        <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-[#283039] bg-[#111418]/90 backdrop-blur-sm px-6 py-3 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="size-8 text-primary">
              <svg viewBox="0 0 48 48" className="w-full h-full" fill="currentColor">
                <path d="M24 0.75 47.25 24 24 47.25 0.75 24 24 0.75ZM21 35.75V12.25L9.25 24 21 35.75Z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold">YaVoy</h2>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="rounded-lg h-10 px-4 bg-[#1c2127] hover:bg-[#283039] transition-colors text-sm font-bold border border-[#283039]"
          >
            Volver al Centro de Ayuda
          </button>
        </header>

        {/* Main */}
        <main className="flex flex-1 justify-center py-6 lg:px-40">
          <div className="max-w-[960px] w-full flex flex-col gap-12 px-4 md:px-6">

            {/* Hero */}
            <section className="py-10">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                Seguro de Responsabilidad Civil por Servicio
              </h1>
              <p className="mt-4 text-slate-300 text-lg max-w-[720px]">
                Información esencial y transparente sobre coberturas, limitaciones y garantías
                para servicios contratados exclusivamente a través de YaVoy.
              </p>
            </section>

            {/* Naturaleza */}
            <section className="rounded-xl bg-[#1c2127] p-6 md:p-8 border border-[#283039] shadow-lg shadow-black/20">
              <h2 className="text-2xl font-bold mb-6">Naturaleza del Seguro</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-2">Vinculación Única</h3>
                  <p className="text-slate-300">
                    El seguro está vinculado exclusivamente al servicio contratado en YaVoy.
                    Se activa al iniciar el servicio y se desactiva al finalizarlo.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">No es un seguro personal</h3>
                  <p className="text-slate-300">
                    No sustituye seguros profesionales ni personales. Cubre únicamente
                    incidentes derivados del encargo específico dentro de la plataforma.
                  </p>
                </div>
              </div>
            </section>

            {/* Cobertura */}
            <section className="grid md:grid-cols-2 gap-6">
              {/* Incluye */}
              <div className="rounded-xl bg-[#1c2127] p-6 border border-[#283039] shadow-md shadow-black/15">
                <h3 className="text-xl font-bold mb-4 text-green-500">Qué cubre</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li>✔️ Daños a terceros</li>
                  <li>✔️ Daños materiales al cliente</li>
                  <li>✔️ Defensa jurídica</li>
                </ul>
              </div>

              {/* Excluye */}
              <div className="rounded-xl bg-[#1c2127] p-6 border border-[#283039] shadow-md shadow-black/15">
                <h3 className="text-xl font-bold mb-4 text-red-500">Qué NO cubre</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li>❌ Profesiones reguladas</li>
                  <li>❌ Actividades de alto riesgo</li>
                  <li>❌ Servicios fuera de la plataforma</li>
                </ul>
              </div>
            </section>

            {/* Riesgo */}
            <section>
              <h2 className="text-xl font-bold mb-4">Niveles de Riesgo</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <RiskCard title="Bajo Riesgo" color="green" text="Limpieza, recados, paseo de mascotas" />
                <RiskCard title="Riesgo Medio" color="blue" text="Montajes, pintura, jardinería básica" />
                <RiskCard title="Alto Riesgo" color="red" text="Industrial, trabajos verticales" excluded />
              </div>
            </section>

            {/* Legal */}
            <section className="border-t border-[#283039] pt-10 pb-20 text-xs text-slate-400 space-y-4">
              <p>
                Esta información es meramente informativa y no sustituye las Condiciones Generales
                de la póliza. En caso de discrepancia, prevalecerá el contrato asegurador.
              </p>
              <p>
                © 2024 YaVoy Platform S.L. Todos los derechos reservados.
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Seguro;

/* ---------- Subcomponente ---------- */
type RiskProps = {
  title: string;
  text: string;
  color: "green" | "blue" | "red";
  excluded?: boolean;
};

const RiskCard: React.FC<RiskProps> = ({ title, text, color, excluded }) => {
  const colorMap = {
    green: "text-green-500",
    blue: "text-blue-500",
    red: "text-red-500",
  };

  return (
    <div className={`rounded-xl p-6 border bg-[#1c2127] ${excluded ? "border-red-500/30 opacity-80" : "border-[#283039]"}`}>
      <h4 className={`font-bold mb-2 ${colorMap[color]}`}>{title}</h4>
      <p className="text-sm text-slate-300">{text}</p>
      <div className="mt-4 text-sm font-semibold">{excluded ? "No cubierto" : "Incluido"}</div>
    </div>
  );
};
