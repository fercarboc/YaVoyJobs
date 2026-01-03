import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white overflow-hidden h-screen flex">
      <AdminSidebar />

      <main className="flex-1 h-full overflow-y-auto bg-background-dark relative">
        <AdminHeader />
        <div className="max-w-[1200px] mx-auto p-8 pb-32 flex flex-col gap-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
