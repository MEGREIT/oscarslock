// pages/api/get-coordinates.js
import fetch from "node-fetch";

export default async function handler(req: any, res: any) {
  const { cityName } = req.query;

  if (!cityName) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
        cityName
      )}&format=json`
    );
    const data: any = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      res.status(200).json({ latitude: lat, longitude: lon });
    } else {
      res.status(404).json({ error: "Coordinates not found" });
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
