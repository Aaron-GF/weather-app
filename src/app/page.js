"use client";
import { useWeather } from "@/services/weatherApi";
import { useEffect } from "react";
import WeatherInfo from "@/components/WeatherInfo";
import SearchBar from "@/components/SearchBar";
import { BgFromDesc, isDayTime } from "@/utils/utils";

export default function Home() {
  const { weather, searchWeatherByCity } = useWeather();

  useEffect(() => {
    searchWeatherByCity("londres");
  }, []);

  if(!weather) {
    return <p>Loading weather...</p>
  }

  const bgImage = BgFromDesc(weather?.description, isDayTime(weather.dt, weather.sunrise, weather.sunset))

  return (
    <div
      style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        zIndex: 10,
        width: "100%",
      }}
    >
      <SearchBar />
      <WeatherInfo weather={weather} />
    </div>
  );
}