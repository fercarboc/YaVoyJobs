import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Safely initialize, though in this environment we assume it's present.
const ai = new GoogleGenAI({ apiKey });

export const optimizeJobDescription = async (draft: string): Promise<string> => {
  if (!draft || draft.length < 5) return draft;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert copywriter for a neighborhood help app called "YaVoy".
      Rewrite the following job description to be friendly, clear, trustworthy, and concise (max 2 sentences).
      It should sound like a neighbor asking for help.
      Return ONLY the rewritten text.
      
      Draft: "${draft}"`,
    });

    return response.text?.trim() || draft;
  } catch (error) {
    console.error("Error optimizing text with Gemini:", error);
    return draft; // Fallback to original
  }
};

export const suggestJobPrice = async (description: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Based on this task description: "${description}", suggest a fair price range in Euros (€). Just give the range, e.g., "10-15". Do not add currency symbols or extra text.`,
        });
        return response.text?.trim() || "10-20";
    } catch (e) {
        return "10-20";
    }
}