"use client";
import { useWeather } from "@/services/weatherApi";
import { useEffect } from "react";
import WeatherInfo from "@/components/WeatherInfo";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const { weather, searchWeatherByCity } = useWeather();

  useEffect(() => {
    searchWeatherByCity("fisterra");
  }, []);

  return (
    <div>
      <SearchBar />
      {weather ? (
        <WeatherInfo
          icon={weather.icon}
          description={weather.description}
          temp={weather.temp}
          wind={weather.wind}
        />
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}
