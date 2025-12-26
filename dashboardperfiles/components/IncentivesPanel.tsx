import React from "react";
import {
  Gift,
  Info,
  CheckCircle2,
  Clock3,
  Lock,
  TrendingUp,
  Trophy,
  Target,
} from "lucide-react";
import { DashboardUserRole } from "../dashboardTypes";

type UnlockStep = {
  title: string;
  targetAmount: number;
  reward: number;
  status: "locked" | "in_progress" | "unlocked";
};

type Props = {
  role: DashboardUserRole;
  // Valores de ejemplo; en el futuro vendran de API
  generatedAmount?: number; // € generados que cuentan para incentivo (worker)
  totalIncentive?: number; // € maximo a desbloquear (worker)
  completedJobs?: number;
  requiredJobs?: number;
  daysToWithdraw?: number;
};

export const IncentivesPanel: React.FC<Props> = ({
  role,
  generatedAmount = 32,
  totalIncentive = 20,
  completedJobs = 7,
  requiredJobs = 10,
  daysToWithdraw = 5,
}) => {
  const isWorker = role === DashboardUserRole.TRABAJADOR || role === DashboardUserRole.PROVEEDOR;
  const targetAmount = 50; // Ejemplo: nivel maximo se alcanza a 50 €
  const progressPct = Math.min(Math.round((generatedAmount / targetAmount) * 100), 100);

  const steps: UnlockStep[] = isWorker
    ? [
        {
          title: "Primer desbloqueo",
          targetAmount: 25,
          reward: 10,
          status: generatedAmount >= 25 ? "unlocked" : "in_progress",
        },
        {
          title: "Segundo desbloqueo",
          targetAmount: 50,
          reward: 10,
          status: generatedAmount >= 50 ? "unlocked" : generatedAmount >= 25 ? "in_progress" : "locked",
        },
      ]
    : [
        {
          title: "Alta gratuita",
          targetAmount: 0,
          reward: 1,
          status: "unlocked",
        },
        {
          title: "Anuncios extra",
          targetAmount: 1,
          reward: 3,
          status: "in_progress",
        },
        {
          title: "Descuento plan",
          targetAmount: 2,
          reward: 2,
          status: "locked",
        },
      ];

  const statusLabel = isWorker
    ? progressPct >= 100
      ? "Incentivo completo desbloqueado"
      : generatedAmount >= 25
      ? "En progreso"
      : "Bloqueado"
    : "Bonos y anuncios promocionales activos";

  const statusIcon = isWorker
    ? progressPct >= 100
      ? <Trophy className="text-emerald-600" size={18} />
      : generatedAmount >= 25
      ? <Clock3 className="text-amber-600" size={18} />
      : <Lock className="text-gray-500" size={18} />
    : <Gift className="text-[#0056b3]" size={18} />;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <span role="img" aria-label="gift">
            🎁
          </span>
          Incentivos YaVoy
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          {isWorker
            ? "Gana dinero extra por completar tus primeros trabajos."
            : "Recibe anuncios y planes promocionales al contratar packs en YaVoy."}
        </p>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Columna principal */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-blue-800 uppercase tracking-wide">
                  {isWorker ? "Incentivo total disponible" : "Beneficio promocional"}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0056b3] flex items-center justify-center">
                    <Gift size={20} />
                  </div>
                  <div>
                    {isWorker ? (
                      <>
                        <p className="text-3xl font-extrabold text-slate-900">{totalIncentive.toFixed(2)} €</p>
                        <p className="text-xs text-slate-500">
                          Se desbloquea automaticamente al completar trabajos con exito.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-3xl font-extrabold text-slate-900">Anuncios y bonus activos</p>
                        <p className="text-xs text-slate-500">
                          Disfruta de anuncios sin comisión y descuentos en planes.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-blue-50 text-[#0056b3] px-3 py-2 rounded-full text-xs font-bold w-fit">
                {statusIcon}
                {statusLabel}
              </div>
            </div>

            {/* Progreso */}
            {isWorker ? (
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 mb-2">
                  <span>Progreso actual</span>
                  <span className="text-[#0056b3]">
                    {generatedAmount.toFixed(0)} € / {targetAmount} €
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0056b3] to-blue-400"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                <PromoStat label="Alta gratis" value="1 mes" />
                <PromoStat label="Anuncios sin comisión" value="3 anuncios" />
                <PromoStat label="Descuento plan" value="Paga 10/12" />
              </div>
            )}
          </div>

          {/* Desglose */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-[#0056b3]" size={18} />
              <h3 className="text-base font-bold text-slate-900">Desglose del incentivo</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {steps.map((step) => {
                const isUnlocked = step.status === "unlocked";
                const isProgress = step.status === "in_progress";

                const statusChip = isUnlocked
                  ? { label: "Desbloqueado", className: "bg-emerald-50 text-emerald-700 border border-emerald-100" }
                  : isProgress
                  ? { label: "En progreso", className: "bg-amber-50 text-amber-700 border border-amber-100" }
                  : { label: "Bloqueado", className: "bg-gray-100 text-gray-600 border border-gray-200" };

                const icon = isUnlocked ? (
                  <CheckCircle2 className="text-emerald-600" size={20} />
                ) : isProgress ? (
                  <Clock3 className="text-amber-600" size={20} />
                ) : (
                  <Lock className="text-gray-400" size={20} />
                );

                return (
                  <div
                    key={step.title}
                    className="border border-gray-200 rounded-xl p-4 flex items-start gap-3 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
                  >
                    <div className="mt-1">{icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-bold text-slate-900">{step.title}</p>
                        <span className={`text-[11px] font-bold px-2 py-1 rounded-full ${statusChip.className}`}>
                          {statusChip.label}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">
                        {isWorker
                          ? `${step.reward} € al alcanzar ${step.targetAmount} € generados`
                          : step.title === "Alta gratuita"
                          ? "1 mes sin coste de plataforma"
                          : step.title === "Anuncios extra"
                          ? "3 anuncios sin comisión el primer mes"
                          : "Paga 10 y usa 12 meses en planes anuales"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Columna lateral */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <Info className="text-[#0056b3]" size={18} />
              <h3 className="text-sm font-bold text-slate-900">Como funciona</h3>
            </div>
            <p className="text-sm text-slate-600">
              {isWorker
                ? "El incentivo se activa cuando tus trabajos se completan sin incidencias. Puedes ver tu progreso en tiempo real."
                : "Activa anuncios y descuentos al darte de alta o contratar planes. No hay comisiones ocultas en tus anuncios promocionados."}
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {isWorker ? (
                <>
                  <div className="rounded-xl bg-blue-50 text-[#0056b3] px-3 py-2 font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Trabajos: {completedJobs}/{requiredJobs}
                  </div>
                  <div className="rounded-xl bg-gray-50 text-slate-700 px-3 py-2 font-semibold flex items-center gap-1.5">
                    <Clock3 size={14} /> Retiro en {daysToWithdraw}d
                  </div>
                  <div className="rounded-xl bg-gray-50 text-slate-700 px-3 py-2 font-semibold flex items-center gap-1.5">
                    <Target size={14} /> Objetivo: {targetAmount} €
                  </div>
                  <div className="rounded-xl bg-emerald-50 text-emerald-700 px-3 py-2 font-bold flex items-center gap-1.5">
                    <Gift size={14} /> Bonus: {totalIncentive} €
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-xl bg-blue-50 text-[#0056b3] px-3 py-2 font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Alta gratis 1 mes
                  </div>
                  <div className="rounded-xl bg-gray-50 text-slate-700 px-3 py-2 font-semibold flex items-center gap-1.5">
                    <Gift size={14} /> +3 anuncios sin coste
                  </div>
                  <div className="rounded-xl bg-gray-50 text-slate-700 px-3 py-2 font-semibold flex items-center gap-1.5">
                    <Clock3 size={14} /> Paga 10/12 meses en anual
                  </div>
                  <div className="rounded-xl bg-emerald-50 text-emerald-700 px-3 py-2 font-bold flex items-center gap-1.5">
                    <Target size={14} /> Mejora a plan con 5 anuncios/mes
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
            <p className="text-sm font-bold text-slate-900">Estado actual del incentivo</p>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              {statusIcon}
              <span>{statusLabel}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              {isWorker ? (
                <>
                  <button className="flex-1 bg-[#0056b3] text-white text-sm font-bold rounded-xl px-4 py-2 hover:bg-blue-800 transition">
                    Ver trabajos disponibles
                  </button>
                  <button className="flex-1 border border-gray-200 text-sm font-bold rounded-xl px-4 py-2 text-slate-800 hover:bg-gray-50 transition">
                    Como funciona el incentivo
                  </button>
                </>
              ) : (
                <>
                  <button className="flex-1 bg-[#0056b3] text-white text-sm font-bold rounded-xl px-4 py-2 hover:bg-blue-800 transition">
                    Ver planes y bonos
                  </button>
                  <button className="flex-1 border border-gray-200 text-sm font-bold rounded-xl px-4 py-2 text-slate-800 hover:bg-gray-50 transition">
                    Ver anuncios promocionados
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PromoStat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
    <p className="text-xs text-slate-600">{label}</p>
    <p className="text-sm font-bold text-slate-900">{value}</p>
  </div>
);
