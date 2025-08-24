"use client";
import { useState } from "react";
import { useWeather, useForecast } from "@/hooks/index.js";

import WeatherInfo from "@/components/WeatherInfo";
import SearchBar from "@/components/SearchBar";

import { BgFromDesc, isDayTime } from "@/utils/utils";

import { CircularProgress, Box } from "@mui/material";

export default function Home() {
  const { weather, searchWeatherByCity } = useWeather();
  const { forecast, getForecast } = useForecast();

  const [city, setCity] = useState("");
  const [fixed, setFixed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await searchWeatherByCity(city);
    await getForecast(city);
    setLoading(false);
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
    <div className="relative w-full min-h-screen">
      {/* Fixed background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: bgImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content on the background */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
        {/* Searchbar */}
        <div
          className={`w-full flex justify-center transition-all duration-500 ${
            fixed ? "fixed top-10 transform z-10" : ""
          }`}
        >
          <SearchBar
            city={city}
            setCity={setCity}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* Spinner fullscreen progressbar */}
        {loading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Box>
              <CircularProgress size={50} color="inherit" />
            </Box>
          </div>
        )}

        {/* Weather info */}
        {!loading && weather && forecast && (
          <WeatherInfo weather={weather} forecast={forecast} />
        )}
      </div>
    </div>
  );
}
