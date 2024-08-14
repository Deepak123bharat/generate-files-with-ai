import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure the API key is defined
const apiKey = "AIzaSyDpPHKSBTs0Om7gvCiem8kS6FT-oP_MXWU";

if (!apiKey) {
  throw new Error("is not defined in environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const runGemini = async (prompt: string) => {
  try {
    const result = await model
      .generateContent(prompt)
      .then((res) => res.response)
      .then((res) => res.text());
    return result;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};

export default runGemini;
