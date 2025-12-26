import React from "react";
import {
  Home,
  Briefcase,
  Store,
  Package,
  CreditCard,
  FileText,
  Gift,
  AlertCircle,
  BarChart3,
  Settings,
  Search,
  MessageSquare
} from "lucide-react";

import { AppSection, DashboardUserRole } from "./dashboardTypes";

export const YA_VOY_BLUE = "#0056b3";

export const NAVIGATION_ITEMS = [
  {
    id: AppSection.INICIO,
    icon: <Home size={20} />,
    roles: [
      DashboardUserRole.EMPRESA,
      DashboardUserRole.PARTICULAR,
      DashboardUserRole.PROVEEDOR,
      DashboardUserRole.INVITADO,
      DashboardUserRole.TRABAJADOR,
    ],
  },
  {
    id: AppSection.EXPLORAR_TRABAJOS,
    icon: <Search size={20} />,
    roles: [DashboardUserRole.TRABAJADOR],
  },
  {
    id: AppSection.MIS_TRABAJOS,
    icon: <Briefcase size={20} />,
    roles: [
      DashboardUserRole.EMPRESA,
      DashboardUserRole.PARTICULAR,
      DashboardUserRole.TRABAJADOR,
    ],
  },
  {
    id: AppSection.MARKETPLACE,
    icon: <Store size={20} />,
    roles: [
      DashboardUserRole.PROVEEDOR,
      DashboardUserRole.EMPRESA,     // si empresa también puede vender, déjalo
      DashboardUserRole.PARTICULAR,  // si particular compra, déjalo
      DashboardUserRole.INVITADO,    // marketplace público
    ],
  },
  {
    id: AppSection.MENSAJES,
    label: "Mensajes",
    icon: <MessageSquare size={20} />, 
    roles: [
    DashboardUserRole.EMPRESA, 
    DashboardUserRole.PARTICULAR, 
    DashboardUserRole.PROVEEDOR, 
    DashboardUserRole.INVITADO, 
    DashboardUserRole.TRABAJADOR] 
  },
  {
    id: AppSection.PEDIDOS,
    icon: <Package size={20} />,
    roles: [
      DashboardUserRole.PROVEEDOR,   // gestiona pedidos como vendedor
      DashboardUserRole.EMPRESA,     // si empresa vende también
    ],
  },
  {
    id: AppSection.PAGOS,
    icon: <CreditCard size={20} />,
    roles: [
      DashboardUserRole.EMPRESA,
      DashboardUserRole.PARTICULAR,
      DashboardUserRole.PROVEEDOR,
      DashboardUserRole.TRABAJADOR,
    ],
  },
  {
    id: AppSection.FACTURACION,
    icon: <FileText size={20} />,
    roles: [
      DashboardUserRole.EMPRESA,
      DashboardUserRole.PARTICULAR,
      DashboardUserRole.PROVEEDOR,
      
    ],
  },
  {
    id: AppSection.INCENTIVOS,
    icon: <Gift size={20} />,
    roles: [
      DashboardUserRole.EMPRESA,
      DashboardUserRole.PARTICULAR,
     
      DashboardUserRole.TRABAJADOR,
    ],
  },
  {
    id: AppSection.INCIDENCIAS,
    icon: <AlertCircle size={20} />,
    roles: [
      DashboardUserRole.EMPRESA,
      DashboardUserRole.PARTICULAR,
      DashboardUserRole.PROVEEDOR,
      DashboardUserRole.TRABAJADOR,
      DashboardUserRole.INVITADO, // si quieres soporte para invitado
    ],
  },
  {
    id: AppSection.INFORMES,
    icon: <BarChart3 size={20} />,
    roles: [
      DashboardUserRole.EMPRESA,
      DashboardUserRole.PROVEEDOR,
    ],
  },
  {
    id: AppSection.CONFIGURACION,
    icon: <Settings size={20} />,
    roles: [
      DashboardUserRole.EMPRESA,
      DashboardUserRole.PARTICULAR,
      DashboardUserRole.PROVEEDOR,
      DashboardUserRole.TRABAJADOR,
    ],
  },
];
