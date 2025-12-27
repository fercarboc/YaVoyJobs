// Mock storage para imágenes JPG
const STORAGE_KEY = "yavoy_agency_storage";

type StoredFile = {
  id: string;
  dataUrl: string;
  createdAt: string;
};

function readStore(): StoredFile[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredFile[]) : [];
  } catch {
    return [];
  }
}

function writeStore(items: StoredFile[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export async function uploadJpg(file: File): Promise<string> {
  if (!file.type.includes("jpeg") && !file.type.includes("jpg")) {
    throw new Error("Solo se permiten imágenes JPG");
  }
  const dataUrl = await fileToDataUrl(file);
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const items = readStore();
  items.push({ id, dataUrl, createdAt: new Date().toISOString() });
  writeStore(items);
  return dataUrl;
}

export function listStoredImages(): string[] {
  return readStore().map((f) => f.dataUrl);
}

async function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
