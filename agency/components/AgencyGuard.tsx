import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../../services/supabase";

type Props = {
  children: React.ReactNode;
};

const AgencyGuard: React.FC<Props> = ({ children }) => {
  const [allowed, setAllowed] = useState<null | boolean>(null);

  useEffect(() => {
    const check = async () => {
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user) return setAllowed(false);
      const { data, error } = await supabase
        .from("VoyUsers")
        .select("role")
        .eq("auth_user_id", auth.user.id)
        .maybeSingle();
      if (error) {
        console.error(error);
        setAllowed(false);
        return;
      }
      setAllowed(data?.role === "AGENCY");
    };
    check();
  }, []);

  if (allowed === null) return <div className="p-6 text-center text-sm text-gray-500">Comprobando acceso...</div>;
  if (!allowed) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

export default AgencyGuard;
