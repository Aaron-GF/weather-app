"use client";
import { useState } from "react";
import { useWeather } from "@/hooks/useWeather";
import { useForecast } from "@/hooks/useForecast";

import WeatherInfo from "@/components/WeatherInfo";
import SearchBar from "@/components/SearchBar";

import { BgFromDesc, isDayTime } from "@/utils/utils";

import { CircularProgress, Box } from "@mui/material";

export default function Home() {
  const { weather, searchWeatherByCity, searchWeatherByCoords } = useWeather();
  const { forecast, getForecast } = useForecast();

  const [city, setCity] = useState("");
  const [fixed, setFixed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e, coords) => {
    e?.preventDefault();
    setLoading(true);

    if (coords) {
      const cityByCoords = await searchWeatherByCoords(
        coords.latitude,
        coords.longitude
      );
      await searchWeatherByCity(cityByCoords);
      await getForecast(cityByCoords);
    } else {
      await searchWeatherByCity(city);
      await getForecast(city);
    }
    setLoading(false);
    setFixed(true);
    window.scrollTo({ top: 0, behavior: "smooth" }); // made scroll top then search city on searchbar
  };

  const bg = weather
    ? BgFromDesc(
        weather?.main,
        isDayTime(weather.dt, weather.sunrise, weather.sunset),
        weather?.cloudiness
      )
    : null; // protect to the first render

  return (
    <div className="relative w-full min-h-screen">
      {/* Content on the background */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
        {!bg && (
          <div className="flex flex-col items-center justify-center text-center p-2 md:p-4 m-2 rounded-2xl animate-zoom-in bg-pattern opacity-80">
            <h1 className="text-sky-100 m-2 text-xl">WEATHER</h1>
            <p className="mini-info font-mono">
              Find your location to know the weather
            </p>
          </div>
        )}
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

        {/* Render fixed background image or video*/}
        {bg && bg.type === "video" && (
          <video
            key={bg.src}
            autoPlay
            muted
            loop
            playsInline
            className="fixed inset-0 w-full h-full object-cover -z-10"
          >
            <source src={bg.src} type="video/mp4" />
          </video>
        )}

        {bg && bg.type === "image" && (
          <div
            className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(${bg.src})` }}
          />
        )}

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
