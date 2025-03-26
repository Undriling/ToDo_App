import { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API } from "../constants";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(WEATHER_API);
        setWeather(res.data);
      } catch (err) {
        setError("Error fetching weather data");
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-4 bg-gray-600 text-white rounded-lg shadow-md">
      <h2 className="text-xl text-center font-serif">Weather</h2>
      {error ? (
        <p>{error}</p>
      ) : weather ? (
        <p>
          Temp: {weather.main.temp}°C ,{" "}
          {weather.weather[0].description.toUpperCase()}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
