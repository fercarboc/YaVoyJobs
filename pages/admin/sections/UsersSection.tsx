const UsersSection = () => {
  return (
    <section id="users" className="flex flex-col gap-6 scroll-mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">group</span>
          Usuarios &amp; Empresas
        </h2>
      </div>

      <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden p-4 flex flex-col gap-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center bg-[#111418] border border-border-dark rounded-lg px-3 py-2 w-full md:w-96">
            <span className="material-symbols-outlined text-[#9da8b9]">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar por email, nombre o ID..."
              className="bg-transparent border-none text-white text-sm focus:ring-0 w-full placeholder-[#4b5563]"
            />
          </div>

          <div className="flex gap-2">
            <select className="bg-[#111418] border border-border-dark text-[#9da8b9] text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5">
              <option>Todos los roles</option>
              <option>Usuario</option>
              <option>Empresa</option>
              <option>Admin</option>
            </select>

            <select className="bg-[#111418] border border-border-dark text-[#9da8b9] text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5">
              <option>Cualquier estado</option>
              <option>Activo</option>
              <option>Pendiente</option>
              <option>Baneado</option>
            </select>
          </div>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto rounded-lg border border-border-dark">
          <table className="w-full text-left">
            <thead className="bg-[#1c2027]">
              <tr>
                <th className="px-4 py-3 text-xs font-medium text-[#9da8b9] uppercase w-16">
                  Avatar
                </th>
                <th className="px-4 py-3 text-xs font-medium text-[#9da8b9] uppercase">
                  Nombre &amp; Email
                </th>
                <th className="px-4 py-3 text-xs font-medium text-[#9da8b9] uppercase">
                  Rol
                </th>
                <th className="px-4 py-3 text-xs font-medium text-[#9da8b9] uppercase">
                  Verificado
                </th>
                <th className="px-4 py-3 text-xs font-medium text-[#9da8b9] uppercase">
                  Registro
                </th>
                <th className="px-4 py-3 text-xs font-medium text-[#9da8b9] uppercase text-right">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border-dark bg-[#111418]">
              <tr>
                <td className="px-4 py-3">
                  <div
                    className="bg-center bg-cover rounded-full size-8 bg-gray-600"
                    data-alt="User Avatar"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrNOb4XvlFBA1F0Pt2W0Gq3yUF72oRWzbKf_oZpSJGW_QBQ_mfT6kF_z6AfFT_XRp2ZEBo6l3D9hWxFlhuFxa1gk1KAbKOxjQDxhIpM3WbLBNLnMJEdqbrXYh1tKbgQxmWmJkvXNEDkTl73VZdpa4tYDZlIz4CXuwBnOx0jBCZGFp-5LqxJO3ChYnZaDi-2avEmk51YObz15V9yQCxdXpMa6LiNH0MoCbDOFzcmVVpW1J5ZclV8XtWm1Cbk4Dv-gqCR7qpcec7kBg")',
                    }}
                  />
                </td>

                <td className="px-4 py-3">
                  <p className="text-white text-sm font-medium">
                    Laura Méndez
                  </p>
                  <p className="text-[#9da8b9] text-xs">
                    laura.mendez@example.com
                  </p>
                </td>

                <td className="px-4 py-3 text-sm text-[#9da8b9]">
                  Usuario
                </td>

                <td className="px-4 py-3">
                  <span
                    className="material-symbols-outlined text-green-500 text-lg"
                    title="Verificado"
                  >
                    verified
                  </span>
                </td>

                <td className="px-4 py-3 text-sm text-[#9da8b9]">
                  20 Oct, 2023
                </td>

                <td className="px-4 py-3 text-right">
                  <button className="text-primary hover:text-white text-xs font-medium uppercase">
                    Gestionar
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-3">
                  <div
                    className="bg-center bg-cover rounded-full size-8 bg-gray-600"
                    data-alt="Company Logo"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMAzkIZF7lICLUO-YFhJclqdNe5QT06gr8y5or3o4eH-vngtMR-IZkz3ZFc5u2fFI0LxNnezqjU7GQVugzDf4e50aTHG1gFFFsYNvbBjkrb9eu4spA_eXmzMC5ZqtfIkLn4VxFp1v7p2bYiBduYKbYd99Qx0pN6IxUtzWIcYZsYbgtw92SLbLjU7lf980h5DSjeMzZybzdEZFkn6E0Etavs6bOOokbolmHrdL92K-m-q8BVSeqG7BiAGQfVGj4R_uEnmODk6O1t0U")',
                    }}
                  />
                </td>

                <td className="px-4 py-3">
                  <p className="text-white text-sm font-medium">
                    Logística Rápida SA
                  </p>
                  <p className="text-[#9da8b9] text-xs">
                    contacto@logisticarapida.com
                  </p>
                </td>

                <td className="px-4 py-3 text-sm text-[#9da8b9]">
                  Empresa
                </td>

                <td className="px-4 py-3">
                  <span
                    className="material-symbols-outlined text-orange-400 text-lg"
                    title="Pendiente"
                  >
                    pending
                  </span>
                </td>

                <td className="px-4 py-3 text-sm text-[#9da8b9]">
                  22 Oct, 2023
                </td>

                <td className="px-4 py-3 text-right">
                  <button className="text-primary hover:text-white text-xs font-medium uppercase">
                    Gestionar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
