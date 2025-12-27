import React, { useEffect, useState } from "react";
import { AdminRole, AdminUser, listUsers, updateUserActive, updateUserRole } from "@/services/adminApi";

const roles: AdminRole[] = ["PARTICULAR", "COMPANY", "HELPER", "ADMIN", "PROVIDER"];

const AdminUsersPage: React.FC = () => {
  const [data, setData] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [roleFilter, setRoleFilter] = useState<AdminRole | "">("");
  const [error, setError] = useState<string | null>(null);

  const load = async (role?: AdminRole) => {
    setLoading(true);
    setError(null);
    try {
      const res = await listUsers(role);
      setData(res);
    } catch (err: any) {
      setError(err?.message || "No se pudieron cargar los usuarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleRoleChange = async (user: AdminUser, role: AdminRole) => {
    try {
      await updateUserRole(user.id, role);
      load(roleFilter || undefined);
    } catch (err: any) {
      alert(err?.message || "Error actualizando rol");
    }
  };

  const handleActive = async (user: AdminUser, active: boolean) => {
    try {
      await updateUserActive(user.id, active);
      load(roleFilter || undefined);
    } catch (err: any) {
      alert(err?.message || "Error actualizando estado");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Usuarios</h1>
          <p className="text-sm text-gray-600">Listado y gestión de roles y actividad.</p>
        </div>
        <select
          value={roleFilter}
          onChange={(e) => {
            const value = e.target.value as AdminRole | "";
            setRoleFilter(value);
            load(value || undefined);
          }}
          className="px-3 py-2 rounded-xl border text-sm"
        >
          <option value="">Todos los roles</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {error && <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">{error}</div>}

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando usuarios...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3">Nombre</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Rol</th>
                <th className="text-left px-4 py-3">Estado</th>
                <th className="text-left px-4 py-3">Creado</th>
                <th className="text-left px-4 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{u.full_name || "—"}</td>
                  <td className="px-4 py-3 text-gray-700">{u.email}</td>
                  <td className="px-4 py-3">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u, e.target.value as AdminRole)}
                      className="text-sm border rounded-lg px-2 py-1"
                    >
                      {roles.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleActive(u, !(u.is_active ?? true))}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        u.is_active ?? true ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {u.is_active ?? true ? "Activo" : "Inactivo"}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{u.created_at ? new Date(u.created_at).toLocaleDateString() : "—"}</td>
                  <td className="px-4 py-3 text-gray-600">—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsersPage;
