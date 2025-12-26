import React from 'react';
import { Icons } from '../Icons';
import { User } from '../../types';

type Props = {
  open: boolean;
  user: User;
  onClose: () => void;
  onEditProfile: () => void;
  onChangePassword: () => void;
  onLogout: () => void;
};

export default function ProfileDropdown({
  open,
  user,
  onClose,
  onEditProfile,
  onChangePassword,
  onLogout,
}: Props) {
  if (!open) return null;

  return (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-100">
        <p className="font-bold text-slate-900 text-sm">{user.full_name}</p>
        <p className="text-xs text-gray-500">{user.email}</p>
      </div>

      <button
        onClick={() => {
          onEditProfile();
          onClose();
        }}
        className="w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 transition flex items-center"
      >
        <Icons.Edit3 size={16} className="mr-2 text-brand-500" />
        Editar Perfil
      </button>

      <button
        onClick={() => {
          onChangePassword();
          onClose();
        }}
        className="w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 transition flex items-center border-b border-gray-100"
      >
        <Icons.Shield size={16} className="mr-2 text-brand-500" />
        Cambiar Contraseña
      </button>

      <button
        onClick={() => {
          onLogout();
          onClose();
        }}
        className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition flex items-center"
      >
        <Icons.LogIn size={16} className="mr-2" />
        Cerrar Sesión
      </button>
    </div>
  );
}
