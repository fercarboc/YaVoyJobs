import React from 'react';
import { Modal } from '../common/Modal';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

type EditForm = {
  full_name: string;
  city: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  editForm: EditForm;
  setEditForm: (next: EditForm) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function EditProfileModal({
  open,
  onClose,
  editForm,
  setEditForm,
  onSubmit,
}: Props) {
  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose} title="Editar Perfil">
      <form onSubmit={onSubmit}>
        <Input
          label="Nombre Completo"
          type="text"
          value={editForm.full_name}
          onChange={(e) => setEditForm({ ...editForm, full_name: e.target.value })}
          required
        />
        <Input
          label="Ciudad"
          type="text"
          value={editForm.city}
          onChange={(e) => setEditForm({ ...editForm, city: e.target.value })}
          placeholder="Madrid"
          required
        />
        <div style={{ display: 'flex', gap: 12, paddingTop: 16 }}>
          <Button type="button" variant="secondary" style={{ flex: 1 }} onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" style={{ flex: 1 }}>
            Guardar Cambios
          </Button>
        </div>
      </form>
    </Modal>
  );
}
