import React, { useRef, useState } from "react";
import { uploadJpg } from "../services/storage.mock";

type Props = {
  images: string[];
  onChange: (imgs: string[]) => void;
  max?: number;
};

const ImageUploader: React.FC<Props> = ({ images, onChange, max = 8 }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files.length) return;
    const pending = [...images];
    for (let i = 0; i < files.length; i++) {
      if (pending.length >= max) break;
      const file = files[i];
      try {
        const url = await uploadJpg(file);
        pending.push(url);
      } catch (err: any) {
        setError(err?.message || "Error subiendo imagen");
      }
    }
    onChange(pending);
    if (inputRef.current) inputRef.current.value = "";
  };

  const removeAt = (idx: number) => {
    const next = images.filter((_, i) => i !== idx);
    onChange(next);
  };

  const move = (idx: number, dir: -1 | 1) => {
    const next = [...images];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    const tmp = next[target];
    next[target] = next[idx];
    next[idx] = tmp;
    onChange(next);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,image/jpeg"
          multiple
          onChange={handleSelect}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full"
        >
          Subir imágenes JPG
        </button>
        <span className="text-xs text-gray-500">Máx {max} imágenes</span>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}

      {images.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-28 h-24 rounded-xl overflow-hidden border border-gray-200 flex-none bg-gray-50"
            >
              <img src={img} alt={`img-${idx}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute top-1 right-1 flex gap-1">
                <button
                  type="button"
                  onClick={() => move(idx, -1)}
                  className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full shadow"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => move(idx, 1)}
                  className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full shadow"
                >
                  ↓
                </button>
              </div>
              <button
                type="button"
                onClick={() => removeAt(idx)}
                className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow"
              >
                Borrar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
