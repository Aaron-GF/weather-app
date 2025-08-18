"use client";
import { useState } from "react";
import { msToKmh } from "@/utils/utils";

const appId = process.env.NEXT_PUBLIC_API_KEY;

/* call weather and set object to contain needed weather info*/
export const useWeather = () => {
  const [weather, setWeather] = useState(null);

  const searchWeatherByCity = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;
    const res = await fetch(URL);
    const data = await res.json();

    setWeather({
      name: data.name,
      icon: data.weather[0].icon,
      main: data.weather[0].main,
      description: data.weather[0].description,
      temperature: {
        temp: Math.round(data.main.temp),
        feels_like: Math.round(data.main.feels_like),
        temp_min: Math.round(data.main.temp_min),
        temp_max: Math.round(data.main.temp_max),
      },
      wind: {
        speed: msToKmh(data.wind.speed) /* to get kilometres per hour */,
        deg: data.wind.deg,
      },
      humidity: data.main.humidity,
      cloudiness: data.clouds.all,
      dt: data.dt,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    });
  };
  return { weather, searchWeatherByCity };
};

/* call suggestions and export to use on searchbar */
export const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async (city) => {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${appId}`;
    const res = await fetch(URL);
    const data = await res.json();

    if(!Array.isArray(data)) { //Verify if data is an array
      setSuggestions([]);
      return;
    }

    setSuggestions([...new Set(data.map((item) => item.name))]); // Set to show only unique values
  };

  return { suggestions, getSuggestions };
};
