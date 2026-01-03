
import AdminLayout from "./AdminLayout";
import DashboardSection from "./sections/DashboardSection";
import EconomySection from "./sections/EconomySection";
// las demás secciones irán aquí

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <DashboardSection />
      <EconomySection />
      {/* siguientes secciones aquí */}
    </AdminLayout>
  );
};

export default AdminDashboard;
