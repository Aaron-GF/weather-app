"use client";
import { useWeather } from "@/services/weatherApi";
import { useState } from "react";
import WeatherInfo from "@/components/WeatherInfo";
import SearchBar from "@/components/SearchBar";
import { BgFromDesc, isDayTime } from "@/utils/utils";

export default function Home() {
  const { weather, searchWeatherByCity } = useWeather();
  const [ city, setCity ] = useState("");

  const handleSumit = async (e) => {
    e.preventDefault();
    await searchWeatherByCity(city);
    window.scrollTo({ top:0, behavior: "smooth"}); // made scroll top then search city on searchbar
  };

 const bgImage = weather ? BgFromDesc(
    weather?.main,
    isDayTime(weather.dt, weather.sunrise, weather.sunset)
  ) : null; // protect to the first render

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
      <SearchBar city={city} setCity={setCity} handleSumit={handleSumit} />
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
}
