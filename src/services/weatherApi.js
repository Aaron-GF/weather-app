'use client'
import { useState } from "react";

const getWeather = async (city) => {
  const appId = process.env.API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`;

  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export const useWeather = () => {
  const [weather, setWeather] = useState("");

  const searchWeatherByCity = async (city) => {
    const data = await getWeather(city);
    return data;
  };

  setWeather({
    icon: data.weather[0].icon,
  });
  return searchWeatherByCity;
};
