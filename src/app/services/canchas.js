const API_URL = "https://goolbooking-api.onrender.com/api";
export async function getCanchas() {
  const response = await fetch(`${API_URL}/fields?limit=1`);
  if (!response.ok) {
    throw new Error("Error retrieving fields");
  }
  const data = await response.json();
  return data;
}
