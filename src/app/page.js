"use client";
import { useState } from "react";
import { useWeather, useForecast } from "@/hooks/index.js";

import WeatherInfo from "@/components/WeatherInfo";
import SearchBar from "@/components/SearchBar";

import { BgFromDesc, isDayTime } from "@/utils/utils";

export default function Home() {
  const { weather, searchWeatherByCity } = useWeather();
  const { forecast, getForecast } = useForecast();

  const [city, setCity] = useState("");
  const [fixed, setFixed] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await searchWeatherByCity(city);
    await getForecast(city);
    setFixed(true);   
    window.scrollTo({ top: 0, behavior: "smooth" }); // made scroll top then search city on searchbar
  };

  const bgImage = weather
    ? BgFromDesc(
        weather?.main,
        isDayTime(weather.dt, weather.sunrise, weather.sunset)
      )
    : null; // protect to the first render

  return (
    <div
      className="flex flex-col justify-center items-center bg-fixed"
      style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div
        className={`w-full flex justify-center transition-all duration-500 ${
          fixed ? "fixed top-10 transform z-10" : ""
        }`}
      >
        <SearchBar city={city} setCity={setCity} handleSubmit={handleSubmit} />
      </div>

      {weather && forecast && (
        <WeatherInfo weather={weather} forecast={forecast} />
      )}
    </div>
  );
}
