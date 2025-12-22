import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../../services/supabase';

interface RequireRoleProps {
  children: React.ReactElement;
  allowedRoles: string[];
}

const RequireRole: React.FC<RequireRoleProps> = ({ children, allowedRoles }) => {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchRole = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setUserRole(null);
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from('VoyUsers')
        .select('role')
        .eq('auth_user_id', session.user.id)
        .single();
      if (error) {
        setUserRole(null);
      } else {
        setUserRole(data?.role || null);
      }
      setLoading(false);
    };
    fetchRole();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireRole;
