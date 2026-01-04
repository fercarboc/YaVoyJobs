import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/services/supabase";
import { applyToJob, getCurrentVoyUserId } from "@/services/jobs.service";

const WorkerJobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasApplied, setHasApplied] = useState(false);
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const { data, error } = await supabase.from("VoyJobs").select("*").eq("id", id).maybeSingle();
        if (error) throw error;
        if (!mounted) return;
        setJob(data);

        const me = await getCurrentVoyUserId();
        if (me) {
          const { data: existing } = await supabase
            .from("VoyJobApplications")
            .select("id")
            .eq("job_id", id)
            .eq("helper_user_id", me)
            .maybeSingle();
          if (mounted) setHasApplied(!!existing);
        }
      } catch (err: any) {
        console.error(err);
        if (mounted) setError(err?.message || "No se pudo cargar la oferta");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [id]);

  const handleApply = async () => {
    if (!id || hasApplied) return;
    const me = await getCurrentVoyUserId();
    if (!me) {
      navigate("/login", { replace: true });
      return;
    }
    setApplying(true);
    try {
      await applyToJob(id, 0, "Interesado");
      setHasApplied(true);
      alert("Aplicación enviada");
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "No se pudo aplicar");
    } finally {
      setApplying(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Oferta #{id || "—"}</h1>
          <p className="text-sm text-gray-600">Detalle de la oferta.</p>
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg"
        >
          Volver
        </button>
      </div>

      {loading ? (
        <div className="p-3 text-sm text-gray-600">Cargando oferta...</div>
      ) : error ? (
        <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl">{error}</div>
      ) : !job ? (
        <div className="p-3 text-sm text-gray-600">Oferta no encontrada.</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 space-y-3">
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Título</p>
            <p className="text-base font-semibold text-gray-900">{job.title}</p>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Ubicación</p>
            <p className="text-sm text-gray-700">{job.city || "Sin ciudad"} · {job.district || job.neighborhood || ""}</p>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Tipo</p>
            <p className="text-sm text-gray-700">{job.job_type}</p>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Precio</p>
            <p className="text-sm text-gray-700">
              {job.price_hourly ? `${job.price_hourly} €/hora` : job.price_fixed ? `${job.price_fixed} €` : "Sin precio"}
            </p>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-500 font-bold">Descripción</p>
            <p className="text-sm text-gray-700">{job.description || "Sin descripción"}</p>
          </div>

          <button
            type="button"
            onClick={handleApply}
            disabled={hasApplied || applying}
            className={`px-5 py-2 rounded-lg text-sm font-semibold ${
              hasApplied || applying ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {hasApplied ? "Ya has aplicado" : applying ? "Aplicando..." : "Aplicar"}
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkerJobDetail;
