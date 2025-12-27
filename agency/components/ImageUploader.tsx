import React, { useRef } from "react";
import { supabase } from "../../services/supabase";
import { HousingImage } from "../types/agency";

type Props = {
  existing: HousingImage[];
  newFiles: File[];
  onAddFiles: (files: File[]) => void;
  onRemoveExisting: (img: HousingImage) => void;
  onRemoveNew: (idx: number) => void;
  onMoveExisting: (idx: number, dir: -1 | 1) => void;
  onMoveNew: (idx: number, dir: -1 | 1) => void;
};

const ImageUploader: React.FC<Props> = ({
  existing,
  newFiles,
  onAddFiles,
  onRemoveExisting,
  onRemoveNew,
  onMoveExisting,
  onMoveNew,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    onAddFiles(Array.from(files));
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.webp"
          className="hidden"
          onChange={handleSelect}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full"
        >
          Subir imágenes
        </button>
        <span className="text-xs text-gray-500">JPG/PNG/WEBP, máx 10</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {existing.map((img, idx) => (
          <div key={img.id} className="relative w-28 h-24 rounded-xl overflow-hidden border border-gray-200 flex-none bg-gray-50">
            <img src={img.url.startsWith("http") ? img.url : getPublicUrl(img.url)} alt={img.id} className="w-full h-full object-cover" />
            <div className="absolute top-1 right-1 flex gap-1">
              <button
                type="button"
                onClick={() => onMoveExisting(idx, -1)}
                className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full shadow"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => onMoveExisting(idx, 1)}
                className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full shadow"
              >
                ↓
              </button>
            </div>
            <button
              type="button"
              onClick={() => onRemoveExisting(img)}
              className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow"
            >
              Borrar
            </button>
          </div>
        ))}
        {newFiles.map((file, idx) => (
          <div key={`new-${idx}`} className="relative w-28 h-24 rounded-xl overflow-hidden border border-gray-200 flex-none bg-gray-50">
            <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-full object-cover" />
            <div className="absolute top-1 right-1 flex gap-1">
              <button
                type="button"
                onClick={() => onMoveNew(idx, -1)}
                className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full shadow"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => onMoveNew(idx, 1)}
                className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full shadow"
              >
                ↓
              </button>
            </div>
            <button
              type="button"
              onClick={() => onRemoveNew(idx)}
              className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow"
            >
              Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;

function getPublicUrl(path: string) {
  // Supabase public URL helper
  const url = supabase.storage.from("housing-images").getPublicUrl(path);
  return url.data.publicUrl;
}
