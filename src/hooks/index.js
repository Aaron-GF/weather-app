"use client";
import { useState } from "react";
import { msToKmh } from "@/utils/utils";

/* set object to contain needed weather info*/
export const useWeather = () => {
  const [weather, setWeather] = useState(null);

  const searchWeatherByCity = async (city) => {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();
    console.log(data);

    if (data.cod === "404") {
      window.alert("The location could not be found, check the name or try another");
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
  return { weather, searchWeatherByCity };
};

/* get weather forecast */
export const useForecast = () => {
  const [forecast, setForecast] = useState(null);

  const getForecast = async (city) => {
    const res = await fetch(`/api/forecast?city=${city}`);
    const data = await res.json();

    if (data.cod === "404") {
      return;
    }

    setForecast({
      rain_probability: data.list[0].pop
    })
  }
  return { forecast, getForecast };
}

/* get suggestions and export to use on searchbar */
export const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  const showSuggestions = async (city) => {
    const res = await fetch(`/api/suggestions?city=${city}`);
    const data = await res.json();
    
    if (!Array.isArray(data)) {
      //Verify if data is an array
      setSuggestions([]);
      return;
    }

     setSuggestions([...new Set(data.map((item) => item.name))]); // Set to show only unique values

  };
  return { suggestions, showSuggestions };
};
