"use client";
import { useState } from "react";
import { msToKmh } from "@/utils/utils";

const getWeather = async (city) => {
  const appId = process.env.NEXT_PUBLIC_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;

  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export const useWeather = () => {
  const [weather, setWeather] = useState(null);

  const searchWeatherByCity = async (city) => {
    const data = await getWeather(city);
    console.log(data);

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
