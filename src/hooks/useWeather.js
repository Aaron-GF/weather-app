"use client";
import { useState } from "react";
import { msToKmh } from "@/utils/utils";

/* set object to contain needed weather info*/
export const useWeather = () => {
  const [weather, setWeather] = useState(null);

  const searchWeatherByCity = async (city) => {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();

    if (data.cod === "404") {
      window.alert(
        "The location could not be found, check the name or try another"
      );
      return;
    }

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
        speed: msToKmh(data.wind.speed) /* get kilometres per hour */,
        deg: data.wind.deg,
      },
      humidity: data.main.humidity,
      cloudiness: data.clouds.all,
      dt: data.dt,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    });
  };

  const searchWeatherByCoords = async (lat, lon) => {
    const res = await fetch(`/api/geolocation?lat=${lat}&lon=${lon}`);
    const data = await res.json();
    console.log(data);
    return data[0].name;
  };

  return { weather, searchWeatherByCity, searchWeatherByCoords };
};
