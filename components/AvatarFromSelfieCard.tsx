import React, { useState } from "react";
import { setAvatarFromSelfie } from "@/services/profileMedia";

const AvatarFromSelfieCard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const path = await setAvatarFromSelfie();
      setMessage("Avatar actualizado con tu selfie.");
      window.dispatchEvent(new Event("voy:user-updated"));
      console.log("Avatar path:", path);
    } catch (e: any) {
      setError(e?.message || "No se pudo actualizar el avatar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Avatar</h3>
          <p className="text-xs text-slate-600">
            Si ya subiste una selfie, puedes usarla como avatar para tu perfil.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Actualizando..." : "Usar selfie como avatar"}
      </button>

      {message && (
        <div className="text-xs text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
          {message}
        </div>
      )}
      {error && (
        <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </div>
      )}
    </div>
  );
};

export default AvatarFromSelfieCard;
