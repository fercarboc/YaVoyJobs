// src/pages/worker/WorkerInmoNegociosPage.tsx
import React, { useEffect, useState } from "react";
import { RealEstateBusinessView } from "../../components/RealEstateBusinessView";
import { UserRole } from "../../types";
import { listWorkerInmoAds } from "@/services/inmoNegocios.service";

export default function WorkerInmoNegociosPage() {
  const [ads, setAds] = useState<any[]>([]);
  const [loadingAds, setLoadingAds] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoadingAds(true);
        const data = await listWorkerInmoAds(30);
        setAds(data);
      } finally {
        setLoadingAds(false);
      }
    })();
  }, []);

  return (
    <RealEstateBusinessView
      role={UserRole.WORKER}
      // En pruebas: dejamos todo desbloqueado para que el worker vea listado
      hasInmoPlan={true}
      hasNegocioPlan={true}
      onGoToPlans={() => {
        // si quieres, navega a /plans o abre drawer
        console.log("go plans");
      }}
      ads={ads}
      loadingAds={loadingAds}
    />
  );
}
