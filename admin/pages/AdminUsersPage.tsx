import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AdminRole, AdminUser, listAdminUsers } from "@/services/adminApi";

const roleOptions: ("ALL" | AdminRole)[] = ["ALL", "ADMIN", "HELPER", "PARTICULAR", "COMPANY", "PROVIDER"];
const statusOptions = ["ALL", "ACTIVE", "INACTIVE"];
const pageSize = 25;

const formatDate = (value?: string) => (value ? new Date(value).toLocaleDateString() : "-");

const AdminUsersPage: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [roleFilter, setRoleFilter] = useState<"ALL" | AdminRole>("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "ACTIVE" | "INACTIVE">("ALL");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    const params = {
      role: roleFilter === "ALL" ? undefined : roleFilter,
      status: statusFilter === "ALL" ? undefined : statusFilter,
      q: search ? search.trim() : undefined,
      page,
      pageSize,
    };
    const result = await listAdminUsers(params);
    if (result.error) {
      const message = result.error.message.includes("RLS")
        ? "Sin permisos por RLS para consultar VoyUsers"
        : result.error.message || "No se pudieron cargar los usuarios";
      setError(message);
      setUsers([]);
      setCount(0);
    } else {
      setUsers(result.data);
      setCount(result.count);
    }
    setLoading(false);
  }, [roleFilter, statusFilter, search, page]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleOpenAgencyForm = (type: "HOUSING_AGENCY" | "MARKET_VENDOR") => {
    window.dispatchEvent(
      new CustomEvent("admin:open-agency-form", {
        detail: { type },
      })
    );
  };

  const startIndex = useMemo(() => (count === 0 ? 0 : (page - 1) * pageSize + 1), [count, page]);
  const endIndex = useMemo(() => Math.min(count, page * pageSize), [count, page]);
  const totalPages = Math.max(1, Math.ceil(count / pageSize));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Usuarios</h1>
          <p className="text-sm text-gray-600">Gestión de cuentas y permisos.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleOpenAgencyForm("HOUSING_AGENCY")}
            className="px-3 py-2 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700"
          >
            Alta Agencia
          </button>
          <button
            onClick={() => handleOpenAgencyForm("MARKET_VENDOR")}
            className="px-3 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Alta Vendor
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <select
          value={roleFilter}
          onChange={(e) => {
            setRoleFilter(e.target.value as typeof roleFilter);
            setPage(1);
          }}
          className="px-3 py-2 border rounded-xl text-sm"
        >
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role === "ALL" ? "Todos los roles" : role}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value as typeof statusFilter);
            setPage(1);
          }}
          className="px-3 py-2 border rounded-xl text-sm"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status === "ALL" ? "Todos los estados" : status}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Buscar por nombre, email o teléfono"
            className="px-3 py-2 border rounded-xl text-sm"
          />
          <button
            onClick={() => {
              setSearch("");
              setPage(1);
            }}
            className="text-xs text-blue-600 hover:underline"
          >
            Limpiar
          </button>
        </div>

        <div className="text-xs text-gray-500">
          Mostrando {startIndex || "-"}-{endIndex} de {count}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 text-xs text-gray-500">
        <div>
          {loading ? "Actualizando..." : `${totalPages} páginas disponibles`}
        </div>
        <div className="flex gap-2">
          <button
            disabled={page <= 1 || loading}
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="px-3 py-1 rounded-xl border text-xs disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            disabled={page >= totalPages || loading}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-3 py-1 rounded-xl border text-xs disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">{error}</div>
      )}

      {loading ? (
        <div className="p-4 text-sm text-gray-500">Cargando usuarios...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3">Nombre</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Teléfono</th>
                <th className="text-left px-4 py-3">Rol</th>
                <th className="text-left px-4 py-3">Ciudad</th>
                <th className="text-left px-4 py-3">Creado</th>
                <th className="text-left px-4 py-3">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{user.full_name || "-"}</td>
                  <td className="px-4 py-3 text-gray-700">{user.email || "-"}</td>
                  <td className="px-4 py-3 text-gray-700">{user.phone || "-"}</td>
                  <td className="px-4 py-3 text-gray-700">{user.role}</td>
                  <td className="px-4 py-3 text-gray-700">{user.city || "-"}</td>
                  <td className="px-4 py-3 text-gray-600">{formatDate(user.created_at)}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {user.is_active ? "Activo" : user.is_active === false ? "Inactivo" : "Sin dato"}
                  </td>
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
