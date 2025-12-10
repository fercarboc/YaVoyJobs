import { GoogleGenAI } from "@google/genai";

// En Vite las vars vienen de import.meta.env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

let ai: GoogleGenAI | null = null;

// Solo creamos el cliente si hay API key real
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const optimizeJobDescription = async (draft: string): Promise<string> => {
  // Si no hay texto suficiente o no hay IA, devolvemos tal cual
  if (!draft || draft.length < 5 || !ai) return draft;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert copywriter for a neighborhood help app called "YaVoy".
      Rewrite the following job description to be friendly, clear, trustworthy, and concise (max 2 sentences).
      It should sound like a neighbor asking for help.

      Original: """${draft}"""`,
    });

    // Según el SDK, response.text() suele existir, pero comprobamos
    // @ts-ignore por si el tipo no expone text correctamente
    const text = (response as any).text?.() || '';
    return text.trim() || draft;
  } catch (e) {
    // En caso de error, no rompemos la app: devolvemos el original
    return draft;
  }
};

export const suggestJobPrice = async (description: string): Promise<string> => {
  if (!description || !ai) return "10-20";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Based on this task description: "${description}",
      suggest a reasonable hourly price range in euros for Madrid neighborhoods.
      Answer ONLY with a range, e.g., "10-15". Do not add currency symbols or extra text.`,
    });

    // @ts-ignore igual que arriba
    const text = (response as any).text?.() || '';
    return text.trim() || "10-20";
  } catch (e) {
    return "10-20";
  }
};
