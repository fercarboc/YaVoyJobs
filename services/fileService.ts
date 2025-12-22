import { supabase } from './supabase';

const DEFAULT_SIGNED_URL_TTL = 60 * 60 * 24 * 7; // 7 days

function normalizePath(bucket: string, path: string) {
  const withoutBucket = path.startsWith(`${bucket}/`) ? path.slice(bucket.length + 1) : path;
  return withoutBucket.replace(/^\/+/, '');
}

// Obtiene una URL firmada (o pública) para un archivo en Storage
export async function getStorageFileUrl(
  bucket: string,
  path: string,
  expiresInSeconds = DEFAULT_SIGNED_URL_TTL
): Promise<string> {
  const normalizedPath = normalizePath(bucket, path);
  try {
    const { data, error } = await supabase.storage.from(bucket).createSignedUrl(normalizedPath, expiresInSeconds);
    if (!error && data?.signedUrl) {
      return data.signedUrl;
    }
  } catch {
    // Silenciar para intentar URL pública como respaldo
  }

  const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(normalizedPath);
  if (publicData?.publicUrl) {
    return publicData.publicUrl;
  }

  const storageBase = (supabase as any).storageUrl as string | undefined;
  if (storageBase) {
    return `${storageBase}/object/public/${bucket}/${normalizedPath}`;
  }

  // Último recurso: devolver la ruta
  return normalizedPath;
}

// Utilidad para encriptar archivos (AES-GCM)
export async function encryptFile(file: File, key: CryptoKey): Promise<ArrayBuffer> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = await file.arrayBuffer();
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    data
  );
  // Concatenar IV + encrypted
  const result = new Uint8Array(iv.length + encrypted.byteLength);
  result.set(iv, 0);
  result.set(new Uint8Array(encrypted), iv.length);
  return result.buffer;
}

// Generar clave AES-GCM (puedes guardar la clave en localStorage o derivarla de la sesión)
export async function generateKey(): Promise<CryptoKey> {
  return crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

// Subir archivo a Supabase Storage
export async function uploadEncryptedFile(
  bucket: string,
  path: string,
  encryptedBuffer: ArrayBuffer,
  contentType: string
): Promise<string> {
  const normalizedPath = normalizePath(bucket, path);
  const { data, error } = await supabase.storage.from(bucket).upload(normalizedPath, encryptedBuffer, {
    contentType,
    upsert: true
  });
  if (error) throw error;
  const uploadedPath = data?.path || normalizedPath;
  return await getStorageFileUrl(bucket, uploadedPath);
}
