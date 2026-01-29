import { useState } from "react";
import cityData from "@/utils/cities_data.json";

export default function FetchCoordinates() {
  const [cityList, setCityList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const getCityName = (fullCity:any) => {
    return fullCity.split(",")[0].trim(); // Extract city name before the comma
  };

  const fetchAllCityCoordinates = async () => {
    setIsLoading(true);

    const totalCities = cityData.hcms_cities.length;
    const updatedCities = [];

    for (let i = 0; i < totalCities; i++) {
      const city = cityData.hcms_cities[i];
      try {
        const cityName = getCityName(city.city);
        const response = await fetch(
          `/api/get-coordinates?cityName=${encodeURIComponent(cityName)}`
        );
        const data = await response.json();

        updatedCities.push({
          ...city,
          latitude: data.latitude || null,
          longitude: data.longitude || null,
        });
      } catch (error) {
        console.error(`Error fetching coordinates for ${city.city}:`, error);
        updatedCities.push(city); // Add city without coordinates if error occurs
      }

      // Update progress
      setProgress(((i + 1) / totalCities) * 100);
    }

    setCityList(updatedCities);
    // console.log(updatedCities);
    setIsLoading(false);
    setIsComplete(true);
    saveDataToFile(updatedCities); // Save the final data to file
  };

  const saveDataToFile = (data) => {
    // console.log("Process completed. Data saved to localStorage.");
    const jsonData = JSON.stringify(data, null, 2);
    localStorage.setItem("jsonData", jsonData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1>City Coordinates</h1>
      {isLoading ? (
        <div className="w-full max-w-md my-4">
          <div className="h-4 w-full bg-gray-200 rounded">
            <div
              className="h-full bg-blue-500 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center mt-2">{Math.round(progress)}% Complete</p>
        </div>
      ) : isComplete ? (
        <p>All cities have been processed and saved.</p>
      ) : (
        <button
          onClick={fetchAllCityCoordinates}
          className="mb-4 p-2 bg-blue-500 text-white rounded"
        >
          Start Fetching Coordinates
        </button>
      )}
      <ul>
        {cityList.map((city, index) => (
          <li key={index}>
            {city.city} - Latitude: {city.latitude || "N/A"}, Longitude:{" "}
            {city.longitude || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
}
