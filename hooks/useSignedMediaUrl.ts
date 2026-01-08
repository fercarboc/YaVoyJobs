import { useEffect, useState } from "react";
import { getSignedUrlAuto } from "@/services/profileMedia";

export function useSignedMediaUrl(pathOrUrl?: string | null, expiresIn = 3600) {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      if (!pathOrUrl) {
        setUrl(null);
        return;
      }
      setLoading(true);
      try {
        const signed = await getSignedUrlAuto(pathOrUrl, expiresIn);
        if (mounted) setUrl(signed);
      } catch {
        // Si falla, al menos no rompemos el render
        if (mounted) setUrl(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    run();
    return () => {
      mounted = false;
    };
  }, [pathOrUrl, expiresIn]);

  return { url, loading };
}
