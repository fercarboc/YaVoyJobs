import React from 'react';
import { Icons } from '../Icons';
import { theme } from '../../theme';

type PasswordForm = {
  newPassword: string;
  confirmPassword: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  passwordForm: PasswordForm;
  setPasswordForm: (next: PasswordForm) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function ChangePasswordModal({
  open,
  onClose,
  passwordForm,
  setPasswordForm,
  onSubmit,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-slate-800">Cambiar Contraseña</h2>
          <button onClick={onClose}>
            <Icons.X className="text-gray-400 hover:text-gray-600 cursor-pointer" size={24} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nueva Contraseña</label>
            <input
              type="password"
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Confirmar Nueva Contraseña
            </label>
            <input
              type="password"
              value={passwordForm.confirmPassword}
              onChange={(e) =>
                setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="••••••••"
              required
            />
          </div>

          <p className="text-xs text-gray-500">La contraseña debe tener al menos 6 caracteres.</p>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 rounded-lg font-bold transition"
              style={{
                background: theme.colors.primary,
                color: theme.colors.surface,
              }}
            >
              Cambiar Contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
