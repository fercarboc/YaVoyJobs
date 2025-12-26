import React, { useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { UserAvatar } from '../common/Avatar';

const ProviderProfileTab: React.FC<{ user: any }> = ({ user }) => {
  // Estados para los campos del perfil
  const [nombre, setNombre] = useState(user.full_name || '');
  const [apellidos, setApellidos] = useState(user.last_name || '');
  const [documento, setDocumento] = useState(user.document_number || '');
  const [documentoTipo, setDocumentoTipo] = useState(user.document_type || 'CIF');
  const [domicilio, setDomicilio] = useState(user.address || '');
  const [codPostal, setCodPostal] = useState(user.postal_code || '');
  const [localidad, setLocalidad] = useState(user.city || '');
  const [provincia, setProvincia] = useState(user.province || '');
  const [pais, setPais] = useState(user.country || '');
  const [logo, setLogo] = useState(user.logo_url || user.selfie_photo_url || null);
  const [docAdjunto, setDocAdjunto] = useState(user.document_photo_url || null);
  const [newPassword, setNewPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);

  // Handlers para subir logo y documento
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogo(URL.createObjectURL(file));
      // Aquí lógica para subir a storage y guardar en DB
    }
  };
  const handleDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setDocAdjunto(URL.createObjectURL(file));
      // Aquí lógica para subir a storage y guardar en DB
    }
  };

  // Handler para guardar perfil
  const handleSaveProfile = async () => {
    setSaving(true);
    setSaveMsg('Guardando...');
    // Aquí lógica para guardar en DB
    setTimeout(() => {
      setSaving(false);
      setSaveMsg('Perfil guardado correctamente.');
    }, 1200);
  };

  // Handler para cambiar contraseña
  const handlePasswordChange = async () => {
    setPasswordMsg('Contraseña cambiada correctamente.');
    setNewPassword('');
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-transparent mt-8 animate-fade-in">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-800 text-center tracking-tight">Perfil del Proveedor</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Card izquierda: datos del proveedor */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-10 flex flex-col gap-6 min-w-[340px]">
          <Input label="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required placeholder="Introduce el nombre de tu empresa" />
          <Input label="Apellidos / Razón social" value={apellidos} onChange={e => setApellidos(e.target.value)} placeholder="Apellidos o razón social" />
          <div>
            <label className="block font-semibold mb-1 text-blue-800">Tipo de documento</label>
            <select value={documentoTipo} onChange={e => setDocumentoTipo(e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400">
              <option value="CIF">CIF</option>
              <option value="NIF">NIF</option>
              <option value="NIE">NIE</option>
              <option value="DNI">DNI</option>
              <option value="PASAPORTE">Pasaporte</option>
            </select>
          </div>
          <Input label="Número de documento" value={documento} onChange={e => setDocumento(e.target.value)} required placeholder="Documento identificativo" />
          <Input label="Domicilio" value={domicilio} onChange={e => setDomicilio(e.target.value)} required placeholder="Dirección completa" />
          <div className="flex gap-4">
            <Input label="Código Postal" value={codPostal} onChange={e => setCodPostal(e.target.value)} required placeholder="Código postal" />
            <Input label="Localidad" value={localidad} onChange={e => setLocalidad(e.target.value)} required placeholder="Ciudad o localidad" />
          </div>
          <div className="flex gap-4">
            <Input label="Provincia" value={provincia} onChange={e => setProvincia(e.target.value)} required placeholder="Provincia" />
            <Input label="País" value={pais} onChange={e => setPais(e.target.value)} required placeholder="País" />
          </div>
        </div>
        {/* Card derecha: logo, documentación, contraseña, datos bancarios */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-10 flex flex-col gap-8 min-w-[340px] items-center">
          <div className="flex flex-col items-center gap-3 w-full">
            <UserAvatar user={{ ...user, selfie_photo_url: logo }} size={120} />
            <label className="block mt-2 text-base font-semibold text-blue-800">Logo / Avatar</label>
            <input type="file" accept="image/*" onChange={handleLogoChange} className="mt-1 file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200" />
          </div>
          <div className="w-full flex flex-col items-center">
            <label className="block font-semibold mb-2 text-blue-800">Documento acreditativo (JPG)</label>
            <input type="file" accept="image/jpeg" onChange={handleDocChange} className="file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200" />
            {docAdjunto && (
              <div className="mt-3 relative w-48 h-36 mx-auto">
                <img src={docAdjunto} alt="Documento" className="w-full h-full object-contain border-2 border-blue-400 rounded-lg shadow" />
              </div>
            )}
          </div>
          <div className="w-full flex flex-col items-center">
            <h3 className="font-semibold mb-3 text-blue-700 text-lg">Cambiar contraseña</h3>
            <div className="flex flex-col md:flex-row gap-3 items-center w-full">
              <Input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Nueva contraseña" />
              <Button variant="primary" onClick={handlePasswordChange} disabled={!newPassword}>Guardar</Button>
            </div>
            {passwordMsg && <div className="text-sm mt-2 text-green-600">{passwordMsg}</div>}
          </div>
          <div className="w-full flex flex-col items-center">
            <h3 className="font-semibold mb-3 text-blue-700 text-lg">Datos bancarios</h3>
            <Input label="IBAN" placeholder="ES00 0000 0000 0000 0000 0000" />
            <Input label="Titular de la cuenta" placeholder="Nombre del titular" />
          </div>
          <div className="flex justify-end w-full">
            <Button variant="primary" onClick={handleSaveProfile} disabled={saving} style={{ minWidth: 180, fontSize: 18, padding: '12px 0' }}>Guardar cambios</Button>
          </div>
          {saveMsg && <div className="text-center text-base mt-4 text-blue-700 font-semibold w-full">{saveMsg}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProviderProfileTab;
