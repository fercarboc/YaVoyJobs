import React, { useState, useRef, useEffect, useCallback } from 'react';
import { changePassword } from '../services/userService';
import { supabase } from '../services/supabase';
import { getStorageFileUrl } from '../services/fileService';

interface PerfilProps {
  user: any;
}

const STORAGE_BUCKET = 'user-documents';


// Componente para capturar foto con la cámara (fuera del principal)
function CameraCapture({ onCapture, onCancel }: { onCapture: (blob: Blob) => void, onCancel: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then(s => {
      setStream(s);
      if (videoRef.current) videoRef.current.srcObject = s;
    });
    return () => { stream?.getTracks().forEach(t => t.stop()); };
    // eslint-disable-next-line
  }, []);
  const handleCapture = () => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(blob => { if (blob) onCapture(blob); }, 'image/jpeg', 0.95);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-4 shadow-xl">
        <video ref={videoRef} autoPlay playsInline className="rounded-lg border w-72 h-72 object-cover bg-black" />
        <div className="flex gap-4">
          <button className="btn btn-primary" onClick={handleCapture}>Capturar</button>
          <button className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

// Este componente será extendido para cada tipo de usuario
export const Perfil: React.FC<PerfilProps> = ({ user }) => {
  // Estados para los campos del perfil
  const [nombre, setNombre] = useState(user.full_name || '');
  const [apellidos, setApellidos] = useState(user.last_name || '');
  const [documento, setDocumento] = useState(user.document_number || '');
  const initialDocType = user.document_type || (user.role === 'COMPANY' ? 'CIF' : 'NIF');
  const [documentoTipo, setDocumentoTipo] = useState(initialDocType);
  const [domicilio, setDomicilio] = useState(user.address || '');
  const [codPostal, setCodPostal] = useState(user.postal_code || '');
  const [localidad, setLocalidad] = useState(user.city || '');
  const [provincia, setProvincia] = useState(user.province || '');
  const [pais, setPais] = useState(user.country || '');
  const [foto, setFoto] = useState<string | null>(user.selfie_photo_url || null);
  const [docAdjunto, setDocAdjunto] = useState<string | null>(user.document_photo_url || null);

  // Estado para mostrar la cámara
  const [showCamera, setShowCamera] = useState(false);
  const resolveStorageUrl = useCallback(async (value: string | null) => {
    if (!value) return null;
    if (/^https?:\/\//.test(value)) return value;
    return await getStorageFileUrl(STORAGE_BUCKET, value);
  }, []);
  useEffect(() => {
    setNombre(user.full_name || '');
    setApellidos(user.last_name || '');
    setDocumento(user.document_number || '');
    setDocumentoTipo(user.document_type || (user.role === 'COMPANY' ? 'CIF' : 'NIF'));
    setDomicilio(user.address || '');
    setCodPostal(user.postal_code || '');
    setLocalidad(user.city || '');
    setProvincia(user.province || '');
    setPais(user.country || '');
    let active = true;
    const hydrateMedia = async () => {
      const selfieUrl = await resolveStorageUrl(user.selfie_photo_url || null);
      const documentUrl = await resolveStorageUrl(user.document_photo_url || null);
      if (!active) return;
      setFoto(selfieUrl);
      setDocAdjunto(documentUrl);
    };
    hydrateMedia();
    return () => { active = false; };
  }, [user, resolveStorageUrl]);

  // Estados para cambio de contraseña
  const [newPassword, setNewPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState<string | null>(null);
  const [resetMsg, setResetMsg] = useState<string | null>(null);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const getFileExtension = (file: File) => {
    const fromName = file.name.includes('.') ? file.name.split('.').pop() : null;
    if (fromName && fromName.length <= 5) return fromName;
    const typeExt = file.type.split('/')[1];
    return typeExt === 'jpeg' ? 'jpg' : (typeExt || 'jpg');
  };

  const uploadPublicFile = async (file: File, prefix: 'selfie' | 'document') => {
    const ext = getFileExtension(file);
    const userFolder = user.auth_user_id || user.id;
    const path = `${userFolder}/${prefix}_${Date.now()}.${ext}`;
    const { data, error } = await supabase.storage.from(STORAGE_BUCKET).upload(path, file, {
      contentType: file.type,
      upsert: true
    });
    if (error) throw error;
    const uploadedPath = data?.path || path;
    return await getStorageFileUrl(STORAGE_BUCKET, uploadedPath);
  };

  // Handlers para subida de archivos (selfi/logo y documento)
  // Handler para subida y encriptado de selfi/logo
  const handleFotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => setFoto(ev.target?.result as string);
      reader.readAsDataURL(file);
      // Subir al bucket
      try {
        const url = await uploadPublicFile(file, 'selfie');
        setFoto(url);
        await savePhotoUrlToDB(user.id, 'selfie_photo_url', url);
      } catch (err) {
        // Manejar error
      }
    }
  };

  // Handler para subida y encriptado de documento
  const handleDocChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => setDocAdjunto(ev.target?.result as string);
      reader.readAsDataURL(file);
      // Subir al bucket
      try {
        const url = await uploadPublicFile(file, 'document');
        setDocAdjunto(url);
        await savePhotoUrlToDB(user.id, 'document_photo_url', url);
      } catch (err) {
        // Manejar error
      }
    }
  };

  // Enviar email de recuperación de contraseña
  async function sendPasswordReset(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
    return true;
  }

  // Handler para cambio directo
  const handlePasswordChange = async () => {
    setLoadingPassword(true);
    setPasswordMsg(null);
    try {
      await changePassword(newPassword);
      setPasswordMsg('Contraseña cambiada correctamente.');
      setNewPassword('');
    } catch (e: any) {
      setPasswordMsg('Error: ' + (e.message || 'No se pudo cambiar la contraseña.'));
    }
    setLoadingPassword(false);
  };

  // Handler para recuperación por email
  const handlePasswordResetEmail = async () => {
    setResetMsg(null);
    try {
      await sendPasswordReset(user.email);
      setResetMsg('Email de recuperación enviado. Revisa tu bandeja de entrada.');
    } catch (e: any) {
      setResetMsg('Error: ' + (e.message || 'No se pudo enviar el email.'));
    }
  };

  // Guardar la URL en la tabla VoyUsers
  async function savePhotoUrlToDB(userId: string, field: 'selfie_photo_url' | 'document_photo_url', url: string) {
    const { error } = await supabase
      .from('VoyUsers')
      .update({ [field]: url })
      .eq('id', userId);
    if (error) throw error;
  }

  // TODO: Añadir lógica de guardado, encriptado y blur

  // Validación de campos obligatorios
  const camposObligatorios = [nombre, documentoTipo, documento, domicilio, codPostal, localidad, provincia, pais];
  const perfilCompleto = camposObligatorios.every(Boolean);

  // Guardar datos de perfil
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const handleSaveProfile = async () => {
    setSaving(true);
    setSaveMsg(null);
    const fullNameToSave = [nombre, apellidos].filter(Boolean).join(' ').trim();
    try {
      const { error } = await supabase
        .from('VoyUsers')
        .update({
          full_name: fullNameToSave || nombre,
          document_type: documentoTipo,
          document_number: documento,
          address: domicilio,
          postal_code: codPostal,
          city: localidad,
          province: provincia,
          country: pais
        })
        .eq('id', user.id);
      if (error) throw error;
      setSaveMsg('Perfil guardado correctamente.');
    } catch (e: any) {
      setSaveMsg('Error al guardar: ' + (e.message || '')); 
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-4 min-h-[600px]">
      <h2 className="text-xl font-bold mb-4">Perfil</h2>
      <div className="bg-white border rounded-lg p-4 mb-4 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Usuario (email)</label>
          <input value={user.email} className="border rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed" disabled readOnly />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <label className="font-semibold">Contraseña</label>
          <div className="flex gap-2 items-center">
            <input
              type="password"
              placeholder="Nueva contraseña"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="input flex-1"
            />
            <button
              className="btn btn-primary"
              onClick={handlePasswordChange}
              disabled={loadingPassword || !newPassword}
            >
              Guardar
            </button>
          </div>
          {passwordMsg && <div className="text-sm mt-2">{passwordMsg}</div>}
          <div className="mt-2">
            <button
              className="btn btn-secondary text-xs"
              onClick={handlePasswordResetEmail}
              type="button"
            >
              ¿Olvidaste tu contraseña? Enviar email de recuperación
            </button>
            {resetMsg && <div className="text-sm mt-2">{resetMsg}</div>}
          </div>
        </div>
      </div>
      {!perfilCompleto && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-2 text-center font-semibold">
          Faltan datos obligatorios en tu perfil. Hasta que no esté completo, no podrás ser candidato a un trabajo.
        </div>
      )}
      <form className="flex flex-col gap-4 bg-slate-50 p-6 rounded-xl border max-w-lg mx-auto shadow mt-2">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Nombre</label>
          <input value={nombre} onChange={e => setNombre(e.target.value)} className="border rounded px-3 py-2 bg-white focus:outline-brand-500" required placeholder="Introduce tu nombre" />
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col gap-1 flex-1">
            <label className="font-semibold">Apellidos</label>
            <input value={apellidos} onChange={e => setApellidos(e.target.value)} className="border rounded px-3 py-2 bg-white focus:outline-brand-500" placeholder="Introduce tus apellidos" />
          </div>
          <div className="flex flex-col gap-1 w-40">
            <label className="font-semibold">Tipo de documento</label>
            <select
              value={documentoTipo}
              onChange={e => setDocumentoTipo(e.target.value)}
              className="border rounded px-3 py-2 bg-white focus:outline-brand-500"
              required
            >
              <option value="NIF">NIF</option>
              <option value="NIE">NIE</option>
              <option value="DNI">DNI</option>
              <option value="CIF">CIF</option>
              <option value="PASAPORTE">Pasaporte</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Numero de documento</label>
          <input value={documento} onChange={e => setDocumento(e.target.value)} className="border rounded px-3 py-2 bg-white focus:outline-brand-500" required placeholder="Documento identificativo" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Domicilio</label>
          <input value={domicilio} onChange={e => setDomicilio(e.target.value)} className="border rounded px-3 py-2 bg-white focus:outline-brand-500" required placeholder="Dirección completa" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Código Postal</label>
          <input value={codPostal} onChange={e => setCodPostal(e.target.value)} className="border rounded px-3 py-2 bg-white focus:outline-brand-500" required placeholder="Código postal" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Localidad</label>
          <input value={localidad} onChange={e => setLocalidad(e.target.value)} className="border rounded px-3 py-2 bg-white focus:outline-brand-500" required placeholder="Ciudad o localidad" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Provincia</label>
          <input value={provincia} onChange={e => setProvincia(e.target.value)} className="border rounded px-3 py-2 bg-white focus:outline-brand-500" required placeholder="Provincia" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">País</label>
          <input value={pais} onChange={e => setPais(e.target.value)} className="border rounded px-3 py-2 bg-white focus:outline-brand-500" required placeholder="País" />
        </div>
        <div className="flex justify-end mt-2">
          <button
            className="btn btn-primary px-6 py-2 rounded font-bold text-white bg-brand-600 hover:bg-brand-700 transition"
            onClick={e => { e.preventDefault(); handleSaveProfile(); }}
            disabled={!perfilCompleto || saving}
          >
            Guardar cambios
          </button>
        </div>
        {saveMsg && <div className="text-sm mt-2 text-center">{saveMsg}</div>}
      </form>
      <div className="flex justify-end mt-2">
        <button
          className="btn btn-primary"
          onClick={handleSaveProfile}
          disabled={!perfilCompleto || saving}
        >
          Guardar cambios
        </button>
      </div>
      {saveMsg && <div className="text-sm mt-2 text-center">{saveMsg}</div>}
      <div className="mt-4">
        <label className="font-semibold">Foto de perfil (selfi/logo)</label>
        <div className="flex flex-col gap-2">
          <input type="file" accept="image/*" onChange={handleFotoChange} />
          <button
            type="button"
            className="btn btn-secondary w-fit"
            onClick={() => setShowCamera(true)}
          >
            Hacer selfi con cámara
          </button>
        </div>
        {showCamera && (
          <CameraCapture
            onCapture={async (blob) => {
              setShowCamera(false);
              // Convertir blob a File y reutilizar handleFotoChange
              const file = new File([blob], 'selfie.jpg', { type: 'image/jpeg' });
              const e = { target: { files: [file] } } as any;
              await handleFotoChange(e);
            }}
            onCancel={() => setShowCamera(false)}
          />
        )}
        {foto && (
          <div className="mt-2">
            <img src={foto} alt="Selfi/Logo" className="w-24 h-24 rounded-full object-cover border-2 border-brand-500" />
          </div>
        )}
      </div>

      {/* CameraCapture y showCamera ahora están fuera y arriba */}
      <div className="mt-4">
        <label>Documento adjunto (JPG)</label>
        <input type="file" accept="image/jpeg" onChange={handleDocChange} />
        {docAdjunto && (
          <div className="mt-2 relative w-32 h-20">
            <img
              src={docAdjunto}
              alt="Documento"
              className="w-full h-full object-contain border-2 border-brand-500"
              style={{ filter: 'blur(14px) brightness(1.1) contrast(0.8)' }}
            />
            {/* Si el usuario es admin, mostrar sin blur */}
            {user.role === 'ADMIN' && (
              <img
                src={docAdjunto}
                alt="Documento sin blur"
                className="w-full h-full object-contain border-2 border-green-500 absolute top-0 left-0"
                style={{ filter: 'none' }}
              />
            )}
          </div>
        )}
      </div>
      {/* Cambio de contraseña */}
      <div className="mt-8 p-4 border rounded-lg bg-slate-50">
        <h3 className="font-semibold mb-2">Cambiar contraseña</h3>
        <div className="flex gap-2 items-center">
          <input
            type="password"
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className="input flex-1"
          />
          <button
            className="btn btn-primary"
            onClick={handlePasswordChange}
            disabled={loadingPassword || !newPassword}
          >
            Guardar
          </button>
        </div>
        {passwordMsg && <div className="text-sm mt-2">{passwordMsg}</div>}
        <div className="mt-4">
          <button
            className="btn btn-secondary text-xs"
            onClick={handlePasswordResetEmail}
            type="button"
          >
            ¿Olvidaste tu contraseña? Enviar email de recuperación
          </button>
          {resetMsg && <div className="text-sm mt-2">{resetMsg}</div>}
        </div>
      </div>
    </div>
  );
};
