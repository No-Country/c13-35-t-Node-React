export async function getCanchas(deporte, ciudad) {
  try {
    const response = await fetch(
      `https://goolbooking-api.onrender.com/api/fields?deporte=${deporte}&ciudad=${ciudad}`
    );

    if (!response.ok) {
      throw new Error("La ciudad no fue encontrada");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new error;
  }
}
