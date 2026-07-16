// API Base URL
const BASE_URL = "https://paradise-garments-limited.onrender.com/api";

// CREATE INQUIRY API
export const createInquiry = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/inquiry`, {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    return data;

  } catch (error) {
    throw error;
  }
};