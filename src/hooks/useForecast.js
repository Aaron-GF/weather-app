"use client";
import { useState } from "react";

/* get weather forecast */
export const useForecast = () => {
  const [forecast, setForecast] = useState(null);

  const getForecast = async (city) => {
    const res = await fetch(`/api/forecast?city=${city}`);
    const data = await res.json();
    console.log(data);

    if (data.cod === "404") {
      return;
    }

    setForecast({
      rain_probability: data.list[0].pop,
      data: data.list,
    });
  };
  return { forecast, getForecast };
};